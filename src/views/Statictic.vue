<script setup>
import Footer from '@/components/Footer.vue';
import paginate from 'vuejs-paginate-next';
import * as XLSX from "xlsx";
import { AllApi } from '@/core/api';
import { ref } from 'vue';
const search = ref(null);
const Orders = ref([]);
async function getAllOrders(page = 1) {
    let all = await AllApi.OrderSectionApi.getOrdersOrderGet({
        search: search.value,
        status: null,
        companyName: null,
        branchId: null,
        id: null,
        page: page,
        limit: 25
    });
    const { data } = all;
    if (data) {

        Orders.value = data;
        return data;
    }
    return [];
}
getAllOrders();
const excelTable = ref(null);

function downloadExcel(item) {
    excelTable.value = item;
    setTimeout(() => {

        const table = document.getElementById(`downloadTable`);
        const workbook = XLSX.utils.table_to_book(table, { sheet: "Sheet1" });
        XLSX.writeFile(workbook, `test.xlsx`);
    })
}
</script>

<template>
    <div class="container" style="background-color: #F6FBFC; overflow-y: auto; height: 80vh;">
        <div v-for="(item, index) in Orders?.data" :key="index">
            <div>
                <div style="display: flex; justify-content: space-between;">
                    <span style="font-weight: 600;">Buyurtma № {{ item.id }}</span>
                    <span > {{ item.payment_type == 'NASIYA' ? '25%' : '100%' }} </span>
                    <span v-if="item.status == 1" style="display: flex; align-items: center;font-weight: 600;"
                        @click="downloadExcel(item)"><img src="../assets/excell.svg" width="18" height="15"
                            alt=""> Yuklab
                        olish</span>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <span >Dorilar soni {{ item.number }} ta</span>
                    <span v-if="item.status == 1">Chiqmagan dorilar soni {{ item.trade.filter((fill) =>
                        fill.trade_status == false).length }}
                        ta</span>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <span>Summa: {{ item.money }} so'm</span>
                    <span>Summa: {{ item.trade.filter((fill) => fill.trade_status === false).reduce((count, current) =>
                        count + (current.sold_product.price25 * current.number), 0) }} so'm</span>

                </div>
            </div>
            <div style="background-color: #fff; border-radius: 7px; padding: 0 10px; margin: 15px 0;"
                v-for="trade in item.trade">
                <h4 style="text-align: center; font-weight: 600;">
                    {{ trade.sold_product.name }}
                </h4>
                <div style="display: flex; justify-content: space-between;">
                    <span>Muddati: {{ trade.sold_product.deadline.slice(0, 10) }}</span><span>{{
                        trade.sold_product.company_name }}</span>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <span>Narxi: {{ item.payment_type == 'NASIYA' ? trade.sold_product.price25 :
                        trade.sold_product.price100 }} so'm</span>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <span>Miqdori: {{ trade.number }} ta</span><span>Jami summa: {{ item.payment_type == 'NASIYA' ?
                        trade.sold_product.price25 * trade.number : trade.sold_product.price100 * trade.number }}
                        so’m</span>
                </div>
            </div>
        </div>
        <div v-if="excelTable">
            <table id="downloadTable" v-show="false" >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Dori nomi</th>
                        <th>Soni</th>
                        <th>Seriya raqami</th>
                        <th>Muddati</th>
                        <th>Firma</th>
                        <th>Narxi</th>
                        <th>To'lov turi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in excelTable.trade" :key="index">
                        <td>{{ item?.id }}</td>
                        <td style="background-color: #ff0000;">{{ item?.sold_product?.name }}</td>
                        <td>{{ item?.number }}</td>
                        <td>{{ item?.sold_product?.code }}</td>
                        <td>{{ item?.sold_product?.deadline }}</td>
                        <td>{{ item?.sold_product?.company_name }}</td>
                        <td>{{ item?.sold_product?.price100 }} so'm</td>
                        <td>{{ excelTable.payment_type }}</td>
                    </tr>
                </tbody>
            </table>

        </div>
        <paginate :page-count="Orders?.pages || 0" :click-handler="getAllOrders" :prev-text="'Prev'" :next-text="'Next'"
            :container-class="'paginationClass'">
        </paginate>
    </div>
    <Footer />
</template>
<style scoped>
.container {
    padding: 10px;
    width: 100%;
    color: black;
    /* border: 1px solid #0fcbc0; */
}

.paginationClass {
    display: flex;
    justify-content: center;
    list-style-type: none;
    padding: 0;
    margin: 20px 0;
    cursor: pointer;
}

.paginationClass :deep li.page-item a.page-link {
    border: 1px solid #0fcbc0;
    border-radius: 50px;
    display: block;
    text-align: center !important;
    width: 40px !important;
    padding: 0;
    margin: 0 2px;
}

.paginationClass :deep li.page-item.active a.page-link {
    background-color: #0fcbc0;
    /* Фон активной страницы */
    color: white;
    /* Белый цвет текста */
    border-color: #0fcbc0;
    /* Цвет границы совпадает с фоном */
}
</style>
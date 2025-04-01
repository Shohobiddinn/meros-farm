<script setup>
import Footer from '@/components/Footer.vue';
import paginate from 'vuejs-paginate-next';
import * as XLSX from "xlsx";
import { AllApi } from '@/core/api';
import { ref } from 'vue';
const search = ref(null);
const Orders = ref([]);
const status = ref(null);

async function getAllOrders(page = 1) {
    console.log(status.value);

    let all = await AllApi.OrderSectionApi.getOrdersOrderGet({
        page: page,
        limit: 25,
        search: search.value,
        status: status.value,
        companyName: null,
        branchId: null,
        id: null,

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
    }, 500)
}
</script>

<template>
    <div class="container" style="text-align: center;">
        <div class="search-container">
            <i class="search-icon"><img src="../assets/search.svg" alt=""></i>
            <select class="search-box" v-model="status" @change="getAllOrders">
                <option :value="null" selected>Barchasi</option>
                <option value="true">Bron urilgan</option>
                <option value="false">Bron urilmagan</option>
            </select>
        </div>

    </div>

    <div class="container" style="background-color: #F6FBFC; overflow-y: auto; height: 80vh;"
        v-if="Orders?.data?.length">
        <div v-for="(item, index) in Orders?.data" :key="index">
            <RouterLink :to="{
                path: '/statistic-trade',
                query: {
                    order_id: item.id
                }
            }" class="card">
                <div style="display: flex; justify-content: space-between;">
                    <span style="font-weight: 600;">Buyurtma № {{ item.id }}</span>
                    <span> {{ item.payment_type == 'NASIYA' ? '25%' : '100%' }} </span>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <span>Sana </span>
                    <span>{{ item?.created_at ? item?.created_at : '' }} </span>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <span>Summa: {{ item.money }} UZS</span>
                    <span>Summa: {{ item.trade.filter((fill) => fill.trade_status === false).reduce((count, current) =>
                        count + (current.sold_product.price25 * current.number), 0) }} UZS</span>

                </div>
            </RouterLink>
        </div>
        <paginate :page-count="Orders?.pages || 0" :click-handler="getAllOrders" :prev-text="'Prev'" :next-text="'Next'"
            :container-class="'paginationClass'">
        </paginate>
    </div>
    <div class="container" style="background-color: #F6FBFC; overflow-y: auto; height: 80vh;"
        v-else>
        <h3 style="text-align: center;">Ma'lumot topilmadi</h3>
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

.search-container {
    display: flex;
    align-items: center;
    border: 1px solid #69c2c0;
    border-radius: 10px;
    padding: 5px 10px;
    background-color: #fff;
    width: 95%;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.search-icon {
    margin-right: 10px;
    color: #8c8c8c;
    font-size: 16px;
}

.search-box {
    border: none;
    outline: none;
    width: 100%;
    font-size: 16px;
    color: #8c8c8c;
}

.card {
    background-color: #fff;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5px;
    display: block;
}
</style>
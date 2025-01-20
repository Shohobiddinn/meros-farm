<script setup >
import Footer from '@/components/Footer.vue';
import paginate from 'vuejs-paginate-next';

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
</script>

<template>
    <div class="container" style="background-color: #F6FBFC; overflow-y: auto; height: 80vh;" >
        <div v-for="(item, index) in Orders?.data" :key="index">
            <div>
                <div style="display: flex; justify-content: space-between;">
                    <span>Buyurtma № {{ item.number }}</span>
                    <span>25%</span>
                    <span>Yuklab olish</span>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <span>Dorilar soni 20 ta</span>
                    <span>Chiqmagan dorilar soni 25 ta</span>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <span>Summa: 75 000 000 so'm</span>
                    <span>Summa: 25 000 000 so'm</span>
                </div>
            </div>
            <div style="background-color: #fff; border-radius: 7px; padding: 0 10px; margin: 15px 0;" v-for="trade in item.trade">
                <h4 style="text-align: center;">
                    {{ trade.sold_product.name }}
                </h4>
                <div style="display: flex; justify-content: space-between;">
                    <span>Muddati: {{ trade.sold_product.deadline.slice(0,10) }}</span><span>{{ trade.sold_product.company_name }}</span>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <span>Narxi::01.11.2026</span>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <span>Miqdori::01.11.2026</span><span>Jami summa:1 079 820 so’m</span>
                </div>
            </div>
        </div>
        <paginate :page-count="Orders?.pages || 0" :click-handler="getAllOrders" :prev-text="'Prev'"
        :next-text="'Next'" :container-class="'paginationClass'">
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
</style>
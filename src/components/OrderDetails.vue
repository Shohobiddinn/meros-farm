<template>
  <div class="order-details-page">
    <header class="order-header" @click="goBack">
      <button class="back-button">←</button>
    </header>
    <div>
      
    </div>

    <div
      class="order-details"
      v-for="item in order"
      :key="item.id"
      @click="goToDetails(item.id)"
    >
      <div>
        <div class="product-header">
          <h3>{{ item.name }}</h3>
        </div>
        <div class="product-info">
          <div style="display: flex; justify-content: space-between;">
            <p
              style="
                padding-bottom: 10px;
                padding-top: 10px;
              "
            >
              Muddati: {{ item.deadline }}
            </p>
            <p
              style="
                padding-bottom: 10px;
                padding-top: 10px;
              "
            >
              {{ item.company_name }}
            </p>
          </div>
          <div>
            <p style="padding-bottom: 10px">Narxi: {{ item.price100 }}</p>
          </div>
          <div style="display: flex; justify-content: space-between;">
            <p style="padding-right: 10px">Miqdori: {{ item.number }}</p>
            <p>Jami summa: {{ item.price25 }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { AllApi } from "@/core/api";

const order = ref({}); // Стейт для заказа
const route = useRoute(); // Получаем текущий маршрут

async function getOrderDetails() {
  const response =
    await AllApi.SoldProductsSectionApi.getSoldProductsSoldProductsGet({
      orderId: route.params.id,
    });
  let { data } = response;
  if (data.data.length) {
    order.value = data.data; // Сохраняем данные заказа
  } // Получаем детали заказа
}

getOrderDetails();

function goBack() {
  window.history.back();
}

// onMounted(() => {
//   const orderId = route.params.id; // Получаем ID заказа из параметров маршрута
//   getOrderDetails(orderId); // Запрашиваем детали заказа
// });
</script>

<style scoped>
.order-details-page {
  padding: 16px;
  background-color: #f5f5f5;
  height: 100vh;
  width: 100vw; /* Занимаем всю ширину экрана */
  max-width: 100%; /* Убираем максимальное ограничение ширины */
  box-sizing: border-box; /* Учитываем padding в ширину */
}

.order-details {
  margin-top: 16px;
  cursor: pointer;
  background-color: #ffffff; /* Белый фон для каждого заказа */
  padding: 16px;
  margin-bottom: 16px; /* Отступ между заказами */
  border-radius: 8px; /* Закругленные углы */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Тень для визуального выделения */
  border: 1px solid #e0e0e0; /* Легкая граница */
  
}

.order-row {
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  border-bottom: 1px solid #e0e0e0;
}
.order-header {
  display: flex;
  align-items: center;
  padding: 16px 0;
  background-color: white;
  border-radius: 8px;
}

.back-button {
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
}
.product-header h3 {
  text-align: center;
  font-size: 14px;
  font-weight: 400;
}

.product-info p {
  margin: 0;
  font-weight: 300;
  font-size: 12px;
}
</style>

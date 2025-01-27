<template>
  <div class="order-page">
    <header class="order-header" @click="goBack">
      <button  class="back-button">←</button>
      <h2>BUYURTMALARIM</h2>
    </header>

    <!-- v-for для отображения всех заказов -->
    <div class="order-details"   v-for="item in orderData" :key="item.id" @click="goToDetails(item.id)">
      <div class="order-row">
        <span>Buyurtma № {{ item.number }}/{{ item.year }}</span>
        <span>{{ item.payment_type }}</span>
      </div>
      <div class="order-row">
        <span>Sana</span>
        <span>{{ formatDate(item.trade[0]?.date) }}</span>
      </div>
      <div class="order-row">
        <span>Summa</span>
        <span>{{ formatCurrency(item.money) }} UZS</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { AllApi } from "@/core/api";
import router from "@/router";
import { ref } from "vue";

let orderData = ref([]);

// Получение данных с API
function getOrders() {
  AllApi.OrderSectionApi.getOrdersOrderGet()
    .then((res) => {
      let { data } = res;
      if (data.data.length) {
        orderData.value = data.data; // Присваиваем полученные данные
      }
    })
    .catch((error) => {
      console.error("Ошибка при получении данных:", error);
    });
}
getOrders();

function goBack() {
  window.history.back();
}

function goToDetails(id) {
  router.push({
    name: "orderDetails",
    params: { id: id },
  });
   // Переход на страницу деталей заказа
}

// Форматирование суммы
function formatCurrency(value) {
  return new Intl.NumberFormat("ru-RU").format(value);
}

// Форматирование даты
function formatDate(date) {
  if (!date) return "N/A";
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  return new Date(date).toLocaleDateString("ru-RU", options);
}
</script>

<style scoped>
.order-page {
    height: 100vh;
  padding: 16px;
  background-color: #f5f5f5;
  width: 100vw; /* Занимаем всю ширину экрана */
  max-width: 100%; /* Убираем максимальное ограничение ширины */
  box-sizing: border-box; /* Учитываем padding в ширину */
}

.order-header {
  display: flex;
  align-items: center;
  padding: 16px 0;
  background-color: #efefef;
}

.back-button {
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
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
</style>

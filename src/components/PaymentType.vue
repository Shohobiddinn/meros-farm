<template>
  <div class="container">
    <div class="card">
      <h2>{{ title }}</h2>

      <!-- Отображение выбранных продуктов -->
      <div class="selected-products">
        <h3>Tanlangan mahsulotlar:</h3>
        <ul>
          <li v-for="product in selectedProducts" :key="product.id">
            {{ product.product.name }} - {{ product.count }} dona
          </li>
        </ul>
      </div>

      <div class="input_type">
        <label style="font-weight: bold;color: black;">To'lov turini tanlang:</label>
        <div role="radiogroup" aria-labelledby="radio-group-label">
          <!-- Радиокнопка для "Naqd pul" -->
          <div>
            <input
              type="radio"
              id="naqd"
              value="naqd"
              v-model="selectedOption"
            />
            <label for="naqd">Naqd pul</label>
            <div class="price">
              <!-- Цена для Naqd pul -->
              <span>Jami narxi: {{ propss.selectedTotalPrice }} UZS</span>
            </div>
          </div>

          <!-- Радиокнопка для "Nasiya" -->
          <div>
            <input
              type="radio"
              id="nasiya"
              value="nasiya"
              v-model="selectedOption"
            />
            <label for="nasiya">Nasiya</label>
            <div class="price">
              <!-- Цена для Nasiya -->
              <span
                >Jami narxi (Nasiya):
                {{ propss.selectedTotalPrice25 }} UZS</span
              >
            </div>
          </div>
        </div>
      </div>

      <div class="btn">
        <button class="btn1" @click="propss.Cancel">Bekor qilish</button>
        <button class="btn2" @click="handleSave">Qo'shish</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { AllApi } from "@/core/api";
import { ref } from "vue";

const propss = defineProps({
  title: { default: null },
  selectedProducts: { type: Array, required: true }, // Новый проп для списка продуктов
  selectedTotalPrice: { type: String, required: true },
  selectedTotalPrice25: { type: String, required: true },
  product_id: { type: String, required: true },
  Save: { default: null, type: Function, required: true },
  Cancel: { default: null, type: Function, required: true },
});
const selectedOption = ref("naqd");
const quantity = ref(1);

async function handleSave() {
    const productIds = propss.selectedProducts.map(product => {return {id:product.id}});

    try {
    // Отправка данных через API
    let response = await AllApi.OrderSectionApi.addOrderOrderAddPost(
        {
            basket:productIds,
            payment_type:selectedOption.value
        }
    );
    console.log('Успешно сохранено:', response);
    propss.Save(); // Вызываем функцию для дальнейших действий
  } catch (error) {
    console.error('Ошибка при сохранении:', error);
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center !important;
  height: 100vh;
}

input {
  width: 90px;
}

.card {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  margin-right: 20px;
  padding: 20px;
  box-sizing: border-box;
  background: #f5f5f5;
  border: 2px solid #69c2c0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card h2 {
  margin-top: 0;
  font-size: 14px;
  font-weight: 600;
}

.btn {
  display: flex;
  justify-content: space-between;
}

.btn1 {
  border: 1px solid red;
  color: red;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
}

.btn2 {
  border: 1px solid #69c2c0;
  color: #69c2c0;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
}

.input_type {
  padding-right: 10px;
  padding-bottom: 10px;
}
.selected-products {
  word-wrap: break-word; /* Позволяет тексту переноситься на новую строку */
  overflow-wrap: break-word; /* Поддержка для более старых браузеров */
  max-width: 100%; /* Максимальная ширина списка */
}

.selected-products ul {
  padding-left: 0; /* Убираем отступы слева для списка */
  list-style-type: none; /* Убираем маркеры у списка */
}
@media (max-width:480px) {
    .selected-products {
    width: 285px;
  word-wrap: break-word; /* Позволяет тексту переноситься на новую строку */
  overflow-wrap: break-word; /* Поддержка для более старых браузеров */
  max-width: 100%; /* Максимальная ширина списка */
}
selected-products ul {
  padding-left: 0; /* Убираем отступы слева для списка */
  list-style-type: none; /* Убираем маркеры у списка */
}
}
</style>

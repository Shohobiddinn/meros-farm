<template>
  <div class="container">
    <div style="display: flex; justify-content: center; align-items: center">
      <div class="search-container">
        <i class="search-icon">🔍</i>
        <input type="text" placeholder="Qidirish..." v-model="search" class="search-box" @input="getAllProducts" />
      </div>
      <i class="filter-icon"><img src="../assets/hamburger.png" alt="" /></i>
    </div>
    <div style="overflow-y: auto; height: 80vh;">
      <div class="scroll-container">
        <div class="card" v-for="i in 5">
          <img src="../assets/1.png" alt="">
        </div>

        <!-- Add more cards as needed -->
      </div>
      <div class="product-list">
        <div class="product-card" v-for="(item, index) in products?.data" :key="index">
          <div>
            <div class="product-header">
              <h3>{{ item.name }}</h3>
            </div>
            <div class="product-info">
              <div style="display: flex">
                <p style="padding-right: 10px; padding-bottom: 2px; padding-top: 10px;font-weight: 400;">Muddati: {{
                  item.deadline.slice(0,10) }}
                </p>
                <p style="padding-right: 10px; padding-bottom: 2px; padding-top: 10px;">{{ item.company_name }}</p>
              </div>
              <div style="display: flex">
                <p style="padding-right: 10px">Narxi 100%: <span style="font-weight: 600;">{{ item.price100 }}
                    UZS</span> </p>
                <p>Narxi 75%: <span style="font-weight: 600;">{{ item.price100 }} UZS</span></p>
              </div>
            </div>
          </div>
          <div class="product-actions">
            <img v-if="isNewProduct(item.created_at)" src="../assets/new.png" alt="" class="new-product-badge" />
            <button class="add-to-cart-btn" @click="ShowProductAdd(item)">
              <img src="../assets/garbage.png" alt="" />
            </button>
          </div>
        </div>
      </div>

      <paginate :page-count="products?.pages || 0" :click-handler="getAllProducts" :prev-text="'Prev'"
        :next-text="'Next'" :container-class="'paginationClass'">
      </paginate>
    </div>
    <Footer />
  </div>
</template>
<script setup>
import { ref } from "vue";
import { VueFinalModal, useModal, useModalSlot } from "vue-final-modal";
import AddNewProduct from "@/components/AddNewProduct.vue";
import Footer from "@/components/Footer.vue";
import { AllApi } from "@/core/api";
import paginate from 'vuejs-paginate-next';

const products = ref([]);

const basket = ref([]);
const basketQuantity = ref(0);
const search = ref(null)
function ShowProductAdd(product) {
  const { open, close } = useModal({
    component: VueFinalModal,
    attrs: {},
    slots: {
      default: useModalSlot({
        component: AddNewProduct,
        attrs: {
          title: product.name,
          product_id: product.id,
          Save(quantity) {
            // addToBasket(product, quantity);
            close();
          },
          Cancel(e) {
            close();
          },
        },
      }),
    },
  });
  open();
}

async function getAllProducts(page = 1) {
  let all = await AllApi.ProductsApi.getProductsProductsGet({
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

    products.value = data;
    return data;
  }
  return [];
}
getAllProducts();

// Функция для проверки, является ли продукт "новым"
function isNewProduct(created_at) {
  const productDate = new Date(created_at);
  const currentDate = new Date();
  const differenceInTime = currentDate - productDate;
  const differenceInDays = differenceInTime / (1000 * 3600 * 24);
  return differenceInDays <= 3; // Возвращает true, если продукт был добавлен за последние 3 дня
}
// Updated function to add products to basket
function addToBasket(product, amount) {
  const existingProduct = basket.value.find((item) => item.id === product.id);
  if (existingProduct) {
    existingProduct.count += amount; // Add the entered amount to the existing count
  } else {
    basket.value.push({ ...product, count: amount }); // Add new product with the entered amount
  }
  basketCount.value = basket.value.length;
}

// Function called after saving from the modal
function handleSaveModal(selectedProduct, enteredAmount) {
  addToBasket(selectedProduct, enteredAmount);
}
</script>

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


.product-list {
  display: flex;
  flex-direction: column;
  justify-content: center !important;
  align-items: center;
  gap: 10px;
}

.product-card {
  width: 90%;
  border: 1px solid #0fcbc0;
  border-radius: 7px;
  padding: 20px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.product-header h3 {
  font-size: 14px;
  font-weight: 700;
}

.product-info p {
  margin: 0;
  font-weight: 300;
  font-size: 12px;
}

.product-actions {
  display: flex;
  align-items: center;
  justify-content: center;
}

.add-to-cart-btn {
  background-color: inherit;
  /* border: 1px solid #0fcbc0; */
  border: none;
  /* color: white; */
  font-size: 24px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  /* bottom: -18px;*/
  right: 4px;
  cursor: pointer;
}

.new-product-badge {
  position: absolute;
  top: 0px;
  right: -5px;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
  margin-left: 10px;
}

.search-container {
  display: flex;
  align-items: center;
  border: 1px solid #69c2c0;
  border-radius: 10px;
  padding: 5px 10px;
  background-color: #fff;
  width: 300px;
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

.filter-icon {
  margin-left: 10px;
  color: #69c2c0;
  font-size: 16px;
  cursor: pointer;
}

.scroll-container {
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  padding: 20px;
  box-sizing: border-box;

  scrollbar-width: none;
  /* Hide scrollbar in Firefox */
  -ms-overflow-style: none;
  /* Hide scrollbar in IE and Edge */
}

.scroll-container::-webkit-scrollbar {
  display: none;
  /* Hide scrollbar in WebKit browsers (Chrome, Safari) */
}

.card {
  flex: 0 0 auto;
  width: 260px;
  height: 110px;
  margin-right: 20px;
  /* padding: 20px; */
  box-sizing: border-box;
  background: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card h2 {
  margin-top: 0;
}

.scroll-container::-webkit-scrollbar {
  height: 8px;
}

.scroll-container::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 4px;
}

.scroll-container::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}
</style>

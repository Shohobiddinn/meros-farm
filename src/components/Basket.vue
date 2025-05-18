<template>
  <div class="container">
    <div v-if="!loading">
      <div class="empty_basket" v-if="products?.length === 0">
        <p class="empty_basket_p">Savat</p>
        <p class="empty_basket_p">Savatda hozircha mahsulot yo'q</p>
        <button key="login-button" class="main_btn" @click="router.push('/mainPage')">
          Bosh sahifa
        </button>
      </div>
      <div style="overflow-y: auto; height: 70vh" v-else>
        <div v-if="false" style="display: flex; justify-content: center; align-items: center">
          <div class="search-container">
            <i class="search-icon">🔍</i>
            <input type="text" placeholder="Qidirish..." class="search-box" />
          </div>
          <i class="filter-icon"><img src="../assets/hamburger.png" alt="" /></i>
        </div>
        <div class="scroll-container"></div>

        <div>
          <div>
            <div v-if="false" style="
                display: flex;
                padding-top: 20px;
                justify-content: space-around;
              ">
              <p style="text-align: left; cursor: pointer" @click="deleteSelected">
                Tanlanganlarini o'chirish
              </p>
              <div style="display: flex">
                <p style="padding-right: 5px">Hammasini tanlash</p>
                <input type="checkbox" v-model="selectAll" @change="toggleSelectAll" />
              </div>
            </div>
            <div class="product-list">
              <div class="product-card" v-for="item in products" :key="item.id">
                <div style="display: flex; justify-content: space-around">
                  <div class="product-header">
                    <h3>{{ item.product.name }}</h3>
                  </div>
                  <input type="checkbox" v-model="item.selected" @change="updateSelectAll" class="checkbox" />
                </div>

                <div>
                  <div class="product-info">
                    <div style="display: flex">
                      <p style="padding-right: 20px">
                        Muddati: {{ item.product.deadline }}
                      </p>
                      <p>{{ item.product.company_name }}</p>
                    </div>
                    <div style="display: flex; justify-content: space-between">
                      <p style="padding-right: 10px">
                        Narxi:
                        <span style="font-weight: 600">{{ item.product.price100 }} UZS</span>
                      </p>
                      <button style="
                          background-color: inherit;
                          border: none;
                          cursor: pointer;
                          color: red;
                        " @click="removeFromBasket(item)">
                        <img src="../assets/trash.png" alt="" /> O'chirish
                      </button>
                    </div>
                  </div>
                </div>

                <div style="
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                  ">
                  <div></div>
                  <div>
                    <div class="counter-container">
                      <button class="counter-btn" @click="decrement(item.product_id)">
                        -
                      </button>
                      <span style="padding: 0 10px">{{ item.count }}</span>
                      <button class="counter-btn" @click="increment(item.product_id)">
                        +
                      </button>
                    </div>
                    <p style="
                        text-align: center;
                        font-weight: 100;
                        font-size: 12px;
                      ">
                      {{ item.product[price] }} UZS
                    </p>
                  </div>
                  <p>{{ item.product[price] * item.count }} UZS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div :style="products.length == 0 ? 'display:none' : ' '">
        <div class="">
          <label>
            <input type="radio" v-model="price" name="region" value="price100" checked />
            100%
          </label>
          <br />
          <label>
            <input type="radio" v-model="price" name="region" value="price25" />
            25%
          </label>
        </div>
        <div class="orderFull">
          <button class="danger_btn" @click="deleteAll">O'chirish</button>
          <button key="login-button" class="main_btn" style="transform: translateX(-17px)" @click="OrderPaymentType">
            Buyurtma bering
            {{ selectedTotalPrice }} UZS
          </button>
        </div>
      </div>

    </div>
    <div class="loading" v-else>
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24">
        <path fill="currentColor"
          d="M10.72,19.9a8,8,0,0,1-6.5-9.79A7.77,7.77,0,0,1,10.4,4.16a8,8,0,0,1,9.49,6.52A1.54,1.54,0,0,0,21.38,12h.13a1.37,1.37,0,0,0,1.38-1.54,11,11,0,1,0-12.7,12.39A1.54,1.54,0,0,0,12,21.34h0A1.47,1.47,0,0,0,10.72,19.9Z">
          <animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate"
            values="0 12 12;360 12 12" />
        </path>
      </svg>

    </div>

    <Footer />
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import Footer from "@/components/Footer.vue";
import browserStore from "@/core/service/browser-store";
import router from "@/router";
import { AllApi } from "@/core/api";
import PaymentType from "./PaymentType.vue";
import { VueFinalModal, useModal, useModalSlot } from "vue-final-modal";
import request from "superagent";
import Swal from "sweetalert2";
const loading = ref(false)
const price = ref("price100");
const products = ref([]);
const basket = ref([]);
const basketCount = ref(0);
const selectAll = ref(false);
const token = ref("");
async function deleteAll() {
  await Swal.fire({
    title: "Savatdagi barcha mahsulotlar o'chirilsinmi ?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Ha",
    cancelButtonText: "Yo'q",
  }).then((result) => {
    if (result.isConfirmed) {
      try {
        if (browserStore.getSession("token")) {
          token.value = browserStore.getSession("token");
        }
        request
          .delete("https://merospharmfergana.uz/basket/delete")
          .set("Authorization", `Bearer ${token.value}`)
          .then((res) => {
            window.location.reload();
          })
          .catch((err) => console.error(err));
      } catch (error) {
        console.error("Error deleting all products:", error);
      }
    }
  });
}

function addToBasket(product) {
  const existingProduct = basket.value.find((item) => item.id === product.id);
  if (!existingProduct) {
    basket.value.push({ ...product });
  }
  // basketCount.value = basket.value.length;
}

// Подсчет суммы всех выбранных продуктов
const selectedTotalPrice = computed(() => {
  return products.value
    .filter((item) => item.selected)
    .reduce((total, item) => {
      const productPrice = Number(item.product[price.value]) || 0;
      const count = Number(item.count) || 1;
      return total + productPrice * count;
    }, 0);
});
const selectedTotalPrice25 = computed(() => {
  return products.value
    .filter((item) => item.selected)
    .reduce((total, item) => {
      const price = Number(item.product.price25) || 0;
      const count = Number(item.count) || 1;
      return total + price * count;
    }, 0);
});

async function updateProductCount(productId, newCount, id) {
  try {
    await AllApi.BasketApi.basketUpdateBasketUpdatePut({
      product_id: productId,
      number: newCount,
      id: id,
    });
    products.value = [];
    getAllBasketProducts();
    console.log(`Product ${productId} updated with count ${newCount}`);
  } catch (error) {
    console.error("Error updating product count:", error);
  }
}

// Function to delete selected products
function deleteSelected() {
  products.value = products.value.filter((product) => !product.selected);
}

async function getAllBasketProducts(product_id = null, page = 1) {
  let all = await AllApi.BasketApi.getBasketBasketGet({
    status: null,
    id: null,
    page: page,
    limit: 999999999999,
    product_id: product_id,
  });
  const { data } = all;
  if (data) {
    getProducts(data.data);
  }
}
getAllBasketProducts();

function getProducts(basketData) {
  for (let item of basketData) {
    AllApi.ProductsApi.getProductsProductsGet({ id: item.product_id }).then(
      (res) => {
        products.value.push({
          ...item,
          product: res?.data,
          count: item.number || 1,
          selected: true,
        });
      }
    );
  }
}

// Function to remove product from basket
function removeFromBasket(item) {
  const product = products.value.find((p) => p.product_id === item.product_id);
  if (product) {
    product.count = 0;
    updateProductCount(item.product_id, product.count, product.id);
  }
}

function toggleSelectAll() {
  products.value.forEach((product) => {
    product.selected = selectAll.value;
  });
}

function updateSelectAll() {
  selectAll.value = products.value.every((product) => product.selected);
}

function increment(productId) {
  debugger;
  const product = products.value.find((p) => p.product_id === productId);
  if (product && product.count < 10) {
    product.count++;
    updateProductCount(productId, product.count, product.id);
    addToBasket(product);
  } else {
    alert("ofierjofrijfg");
  }
}
async function OrderPaymentType() {
  if (price.value == 'price100') {

    if (selectedTotalPrice.value < 3000000) {
      console.log('hello');
      Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        },
      }).fire({
        icon: 'warning',
        title: 'Maʼlumot qiymati 3 000 000 dan yuqori bo\'lishi kerak',
      })
      return;
    }
  }
  loading.value = true;
  await Swal.fire({
    title: "Buyurtma bermoqchimisiz ?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Ha",
    cancelButtonText: "Yo'q",
  }).then((result) => {
    if (result.isConfirmed) {
      const productIds = products.value.map((product) => {
        return { id: product.id };
      });
      try {
        // Отправка данных через API
        let response = AllApi.OrderSectionApi.addOrderOrderAddPost({
          basket: productIds,
          payment_type: price.value !== "price25" ? "naqd" : "nasiya",
        });
        stopLoading()

      } catch (error) {
        stopLoading()
        console.error("Ошибка при сохранении:", error);
      }
    }
  });

}
function stopLoading() {
  setTimeout(() => {
    loading.value = false

    products.value = [];
    getAllBasketProducts();
    window.location.reload();

  }, 10000)
}
function decrement(productId) {
  const product = products.value.find((p) => p.product_id === productId);
  if (product) {
    product.count--;
    updateProductCount(productId, product.count, product.id);
  }
}

// Watch for changes in products to update selectAll
watch(
  () => products.value.map((product) => product.selected),
  (newValue) => {
    selectAll.value = newValue.every((selected) => selected);
  },
  { deep: true }
);
</script>

<style scoped>
.loading {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1001;
  width: 100vw;
  height: 100vh;
  background-color: white;
  opacity: 0.7;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  padding: 10px 10px 100px 10px;
  width: 100%;
  color: black;
}

.undeline {
  margin-top: 20px;
  border-top: 1px solid #ccc;
}

.orderFull {
  position: fixed;
  bottom: 100px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  height: 40px;
  width: 100% !important;
  background-color: white;
}

.main_btn {
  width: 45%;
  background-color: #62c4bf;
  color: white;
  border: none;
  border-radius: 5px;
  height: 40px;
  text-align: center !important;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
}

.danger_btn {
  width: 45%;
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  height: 40px;
  text-align: center !important;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
}

.empty_basket {
  height: 90vh !important;
  display: flex !important;
  justify-content: space-around !important;
  align-items: center;
  flex-direction: column;
}

.empty_basket_p {
  font-size: 25px;
  font-weight: 500;
}

.cart-container {
  position: relative;
  display: inline-block;
}

.checkbox {
  position: absolute;
  top: 10px;
  right: 9px;
}

.cart-badge {
  position: relative;
  bottom: 40px;
  left: 20px;
  background-color: red;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
}

.counter-container {
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 1px solid #ccc;
  padding: 10px 20px;
  border-radius: 5px;
}

.counter-btn {
  width: 20px;
  height: 20px;
  /* background-color: #00c7b7; */
  color: black !important;
  font-weight: lighter !important;
  border: 1px solid #00c7b7;
  /* font-size: 20px; */
  border-radius: 50%;
  cursor: pointer;
  padding: 0;
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
}

.counter-btn:disabled {
  background-color: #ddd;
  cursor: not-allowed;
}

.counter-input {
  width: 50px;
  text-align: center;
  font-size: 18px;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.footer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 2px solid #0fcbc0;
  margin-top: 20px;
  padding-top: 15px;
}

.footer-item {
  text-align: center;
}

.footer-item img {
  width: auto;
  height: 30px;
  cursor: pointer;
}

.footer-item img:hover {
  opacity: 0.8;
}

.footer-item img:active {
  transform: scale(0.95);
}

.product-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
}

.product-card {
  width: 90%;
  border: 1px solid #0fcbc0;
  border-radius: 10px;
  padding: 0 20px 0 20px;
  position: relative;

  /* justify-content: space-between; */
}

.product-header h3 {
  padding-right: 40px;
  font-size: 14px;
  font-weight: 600;
}

.product-info p {
  margin: 0;
  font-weight: 300;
  font-size: 12px;
}

.product-actions {
  display: flex;
  align-items: end;
  justify-content: end;
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
</style>

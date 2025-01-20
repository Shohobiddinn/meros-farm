<template>
  <div class="container">
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
          <div style="
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
                      Muddati: {{ item.product.deadline.slice(0,10) }}
                    </p>
                    <p>{{ item.product.company_name }}</p>
                  </div>
                  <div style="display: flex; justify-content: space-between">
                    <p style="padding-right: 10px">
                      Narxi: <span style="font-weight:600">{{ item.product.price100 }} UZS</span>
                    </p>
                    <button v-if="false" style="
                        background-color: inherit;
                        border: none;
                        cursor: pointer;
                        color:red;
                      " @click="removeFromBasket(item)">
                      <img src="../assets/trash.png" alt="" /> O'chirish
                    </button>
                  </div>
                </div>
              </div>

              <div style="display: flex; justify-content: space-between;align-items:center;">
                <div></div>
                <div class="counter-container">
                  <button class="counter-btn" @click="decrement(item.product_id)">
                    -
                  </button>
                  <span style="padding: 0 10px">{{ item.count }}</span>
                  <button class="counter-btn" @click="increment(item.product_id)">
                    +
                  </button>
                </div>
                <p>{{ item.product.price100 * item.count  }} UZS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="undeline orderFull" :style="products.length == 0 ? 'display:none' : ' '">
      <p>{{ selectedTotalPrice }} so'm</p>
      <button key="login-button" class="main_btn" @click="OrderPaymentType">
        Bron qilish
      </button>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import Footer from "@/components/Footer.vue";
import router from "@/router";
import { AllApi } from "@/core/api";
import PaymentType from "./PaymentType.vue";
import { VueFinalModal, useModal, useModalSlot } from "vue-final-modal";

const products = ref([]);

const basket = ref([]);
const basketCount = ref(0);
const selectAll = ref(false);

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
      const price = Number(item.product.price100) || 0;
      const count = Number(item.count) || 1;
      return total + price * count;
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
    products.value = []
    getAllBasketProducts()
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
    limit: 25,
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
function removeFromBasket(product) {
  // Find the product in the basket
  const basketProduct = products.value.find((item) => item.id === product.id);
  console.log(basketProduct);

  if (basketProduct) {
    // Decrement the count
    if (basketProduct.count > 1) {
      basketProduct.count--;
    } else if (basketProduct.count === 1) {
      // Keep the item if its count is 1
      basket.value = basket.value.filter((item) => item.id !== product.id);
    }
    // Update basket count
    // basketCount.value = basket.value.length;
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
  debugger
  const product = products.value.find((p) => p.product_id === productId);
  if (product && product.count < 10) {
    product.count++;
    updateProductCount(productId, product.count, product.id);
    addToBasket(product);
  }
  else {
    alert('ofierjofrijfg')
  }
}
function OrderPaymentType(product) {
  const { open, close } = useModal({
    component: VueFinalModal,
    attrs: {},
    slots: {
      default: useModalSlot({
        component: PaymentType,
        attrs: {
          title: "To'lov turi",
          selectedProducts: products.value.filter((item) => item.selected),
          selectedTotalPrice: selectedTotalPrice.value,
          selectedTotalPrice25: selectedTotalPrice25.value,
          Save(quantity) {
            // addToBasket(product, quantity);
            products.value = []
            getAllBasketProducts()
            close();
          },
          Cancel(e) {
            products.value = []
            getAllBasketProducts()
            close();
          },

        },
      }),
    },
  });
  open();
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
.container {
  padding: 10px;
  width: 100%;
  color: black;
}

.undeline {
  margin-top: 20px;
  border-top: 1px solid #ccc;
}

.orderFull {
  position: fixed;
  bottom: 90px;
  display: flex;
  justify-content: space-around;
  height: 40px;
  padding: 10px 20px;
  width: 100% !important;
  background-color: white;
}

.main_btn {
  width: 50%;
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
  padding: 20px;
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

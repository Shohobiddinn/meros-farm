
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
  padding: 5px 20px;
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
  border-radius: 5px;
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
  width: 100%;
  height: 110px;
  margin-right: 20px;
  /* padding: 20px; */
  box-sizing: border-box;
  background: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 5px;
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

.swiper-pagination {
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
}

.swiper-pagination.swiper-pagination-bullets.swiper-pagination-horizontal {
  /* transform: translateY(200px) !important; */

}

.modal {
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal .content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  border-radius: 10px;
}
</style>
<template>
  <div class="container">
    <div style="display: flex; justify-content: center; align-items: center">
      <div class="search-container">
        <i class="search-icon"><img src="../assets/search.svg" alt=""></i>
        <input type="text" placeholder="Qidirish..." v-model="search" class="search-box" @input="resetAndFetch" />
      </div>
      <i class="filter-icon" @click="modalOpen = true"><img src="../assets/hamburger.png" alt="" /></i>
    </div>
    <div style="overflow-y: auto; height: 80vh;" @scroll="handleScroll">
      <div class="scroll-container" v-if="adversting">
        <swiper :pagination="{ dynamicBullets: true }" :loop="true" :autoplay="{ delay: 1500 }" :modules="modules" style="height: 140px;">
          <swiper-slide >
            <div class="card">
              <img src="../assets/photo_2025-03-28_09-41-15.jpg" alt="" width="100%" height="100%">
            </div>
          </swiper-slide>
          <swiper-slide >
            <div class="card">
              <img src="../assets/photo_2025-03-28_09-41-31.jpg" alt="" width="100%" height="100%">
            </div>
          </swiper-slide>
          <swiper-slide >
            <div class="card">
              <img src="../assets/photo_2025-03-28_09-41-37.jpg" alt="" width="100%" height="100%">
            </div>
          </swiper-slide>
          <swiper-slide >
            <div class="card">
              <img src="../assets/photo_2025-03-28_09-41-53.jpg" alt="" width="100%" height="100%">
            </div>
          </swiper-slide>
          <swiper-slide >
            <div class="card">
              <img src="../assets/photo_2025-03-28_09-41-57.jpg" alt="" width="100%" height="100%">
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div v-if="products.length">
        <div class="product-list" :style="{ marginTop: !adversting ? '20px' : '0px' }">
          <div class="product-card" v-for="(item, index) in products" :key="index">
            <div>
              <div class="product-header">
                <h3>{{ item.name }}</h3>
              </div>
              <div class="product-info">
                <div style="display: flex">
                  <p style="padding-right: 10px; padding-bottom: 2px; padding-top: 3px;font-weight: 400;">Muddati: {{ item?.deadline }}</p>
                  <p style="padding-right: 10px; padding-bottom: 2px; padding-top: 3px;">{{ item.company_name }}</p>
                </div>
                <div style="display: flex">
                  <p style="padding-right: 10px">Narxi 100%: <span style="font-weight: 600;">{{ item.price100 }} UZS</span></p>
                  <p>Narxi 25%: <span style="font-weight: 600;">{{ item.price25 }} UZS</span></p>
                </div>
              </div>
            </div>
            <div class="product-actions">
              <img v-if="item.status" src="../assets/new.png" alt="" class="new-product-badge" />
              <button class="add-to-cart-btn" @click="ShowProductAdd(item)">
                <img src="../assets/garbage.png" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <h3 style="text-align: center; margin-top: 20px;">Ma'lumot topilmadi</h3>
      </div>
    </div>
    <Footer />

    <div class="modal" v-if="modalOpen" @click="closeModal">
      <div class="content">
        <div>
          <label for="toggle">
            <input type="checkbox" id="toggle" v-model="adversting" />
            {{ adversting ? "Reklamani yoqish" : "Reklamani o'chirish" }}
          </label><br>
          <label for="radio2"> <input type="checkbox" name="radio" id="radio2" v-model="newProduct"> Yangi tovarlar</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Footer from "@/components/Footer.vue";
import { AllApi } from "@/core/api";
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { VueFinalModal, useModal, useModalSlot } from "vue-final-modal";
import AddNewProduct from "@/components/AddNewProduct.vue";
const modules = [Pagination];
const adversting = ref(true);
const newProduct = ref(false);
const products = ref([]);
const modalOpen = ref(false);
const search = ref(null);
const page = ref(1);
const loading = ref(false);

async function fetchProducts() {
  if (loading.value) return;
  loading.value = true;

  let response = await AllApi.ProductsApi.getProductsProductsGet({
    search: search.value,
    status: newProduct.value ? true : null,
    page: page.value,
    limit: 25
  });

  if (response?.data) {
    products.value = [...products.value, ...response.data.data];
    page.value++;
  }

  loading.value = false;
}
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
function handleScroll(event) {
  const { scrollTop, scrollHeight, clientHeight } = event.target;
  if (scrollTop + clientHeight >= scrollHeight - 10) {
    fetchProducts();
  }
}

function resetAndFetch() {
  products.value = [];
  page.value = 1;
  fetchProducts();
}

fetchProducts();
</script>

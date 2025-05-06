<template>
  <footer class="footer">
    <router-link to="/mainPage" class="footer-item" active-class="active">
      <div class="img-wrapper">
        <img src="/src/assets/home.svg" alt="Categories"> <br>
        <span style="display: inline-block; transform: translateY(-10px); color: #0fcbc0;">
          Mahsulotlar

        </span>
      </div>
    </router-link>
    <router-link to="/statistic" class="footer-item" active-class="active">
      <div class="img-wrapper">
        <img src="/src/assets/statictic.svg" alt="Categories"> <br>
        Buyurtmalar
      </div>
    </router-link>
    <router-link to="/basket" class="footer-item" active-class="active">
      <div class="img-wrapper">
        <img src="/src/assets/Group 2.png" alt="Cart">
        <span v-if="basket.length > 0" class="badge">{{ basket.length }}</span> <br>
        Savat
      </div>
    </router-link>
    <router-link to="/profil" class="footer-item" active-class="active">
      <div class="img-wrapper">
        <img src="/src/assets/Group.png" alt="User"> <br>
        Profil
      </div>
    </router-link>
  </footer>
</template>

<script setup>

import { RouterLink, RouterView } from 'vue-router'
import { onMounted, ref, watch } from 'vue';
import { AllApi } from '@/core/api';
const basket = ref([]);

async function basketBadge(product_id = null, page = 1) {
  let all = await AllApi.BasketApi.getBasketBasketGet({
    status: null,
    id: null,
    page: page,
    limit: 9999999999999,
    product_id: product_id,
  });
  basket.value = all.data.data;
}

onMounted(() => {
  basketBadge();
});

</script>
<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 2px solid #0fcbc0;
  padding-top: 5px;
  background-color: white;
  z-index: 1000;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
}

.footer-item {
  text-align: center;
  position: relative;
}

.footer-item img {
  width: 38px;
  height: 38px;
  /* Set a fixed height */
  cursor: pointer;
  object-fit: contain;
  transition: opacity 0.3s ease, border-radius 0.3s ease;
}

.footer-item:nth-child(1) img {
  width: 55px;
  height: 55px;
}

.footer-item.active .img-wrapper {
  border-bottom: 2px solid #0fcbc0;
  /* Active state border on wrapper */
}

.footer-item img:hover {
  opacity: 0.8;
  border-radius: 50% !important;
}

.footer-item img:active {
  transform: scale(0.95);
}

.badge {
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: #ff0000;
  color: #fff;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
}
</style>

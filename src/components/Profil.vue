<template>
  <div class="container">
    <div>
    <div class="personal_info1">
      <p>Shaxsiy kabinet</p>
      <div class="personal_info2">
        <p>Sizning balansingiz</p>
        <h2>{{user.balance}}</h2>
        <p>{{user.name}}</p>
      </div>
    </div>
    <ul class="menu-list">
      <li class="menu-item" @click="getOrders">
        <img src="/src/assets/Group 2.png" alt="Orders Icon" class="icon" />
        <span class="item-text">Buyurtmalarim</span>
        <img src="/src/assets/arrow.png" alt="Arrow Icon" class="arrow" />
      </li>
      <li class="menu-item">
        <img src="/src/assets/bell.png" alt="Notifications Icon" class="icon" />
        <span class="item-text">Bildirishnomalar</span>
        <img src="/src/assets/arrow.png" alt="Arrow Icon" class="arrow" />
      </li>
      <li class="menu-item">
        <img src="/src/assets/flag.png" alt="Language Icon" class="icon" />
        <span class="item-text">Ilova tili</span>
        <span class="item-subtext">O'zbekcha</span>
        <img src="/src/assets/arrow.png" alt="Arrow Icon" class="arrow" />
      </li>
    </ul>
  </div>
  <div>
    <button class="logout-button">Chiqish</button>
  </div>
    <Footer />
  </div>
</template>
<script setup>
import Footer from "@/components/Footer.vue";
import { AllApi } from "@/core/api";
import router from "@/router";
import { ref } from "vue";

let orderData = ref([]);
let user = ref({});

function getUser(){
  AllApi.UserInfoApi.getUserCurrentUserUserGet().then((res) => {
    let { data } = res;
    user.value = data;
    console.log(data);
  }).catch((error) => {
    console.error("Ошибка при получении данных:", error);
  });
}
getUser();

function getOrders(){
router.push("/groupOrders");
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
    padding: 10px;
    width: 100%;
  
}
.personal_info1 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(#40c6bb, #28899e);
}
.personal_info2 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  border-radius: 15px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px;
}
.menu-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #eaeaea;
}

.icon {
  width: 24px;
  height: 24px;
  margin-right: 15px;
}

.item-text {
  flex-grow: 1;
}

.item-subtext {
  color: #999;
  margin-right: 10px;
}

.arrow {
  width: 16px;
  height: 16px;
}

.logout-button {
  width: 100%;
  padding: 15px;
  background-color: #00a5df;
  color: white;
  text-align: center;
  font-size: 16px;
  border-radius: 8px;
  border: none;
  margin-top: 20px;
}
</style>

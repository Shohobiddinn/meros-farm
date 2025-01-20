<template>
  <div class="container">
    <div class="card">
      <h2>{{title}}</h2>
      <div class="input_type">
        <p style="padding-right: 10px;">Sonini kiriting:</p>
        <input  v-model="quantity" type="number" placeholder="Soni" />
      </div>
      <div class="btn">
        <button class="btn1" @click="propss.Cancel">Bekor qilish</button>
        <button class="btn2" @click="handleSave">Qo'shish</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { AllApi } from '@/core/api';
import { ref } from 'vue';

const propss = defineProps({
  title: { default: null },
  product_id: {type: String, required: true},
  Save: { default: null, type: Function, required: true },
  Cancel: { default: null, type: Function, required: true },
});

const quantity = ref(1);



async function handleSave() {
  if (quantity.value > 0) {
    try{
    
      let response = await AllApi.BasketApi.addBasketBasketAddPost({
        number: Number(quantity.value),
        product_id: propss.product_id
      })
      propss.Save(); 
    }
    catch(error){
console.log(error);

    }
    // Emit the product and amount to add to the basket
  }else{
    console.error("quantity must be not be 0")
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
  font-weight: 700;
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
  font-size:18px;
}

.btn2 {
  border: 1px solid #69c2c0;
  background-color: green;
  /* color: #69c2c0; */
  color: #ffffff;
  border-radius: 5px;
  cursor: pointer;
  font-size:18px;
}

.input_type {
  display: flex;
  justify-content: space-around;
  padding-right: 10px;
  padding-bottom: 10px;
}
.input_type input{
  border-radius: 5px;
  border-color:#69c2c0;

}
.input_type input:focus{
  border-color: #007bff;
}
</style>

<template>
  <div >
  <div class="firstMeros">
    <img src="/src/assets/Group 7.svg" />
    <div>
      <h2 style="margin-bottom: 0px" class="textMeros">Meros</h2>
      <h2 style="margin-top: 0px" class="textMeros">Pharm</h2>
    </div>
    
  </div>
  <div>
      <p class="helloMeros">Meros pharmga xush kelibsiz</p>
      <p class="selectRegion">Omborni tanlang</p>
    </div>

    <div class="radio-group">
            <label class="underlined-label">
                <input type="radio" name="region" value="fargona">
                Farg'ona
            </label>
            <label class="underlined-label">
                <input type="radio" name="region" value="namangan" checked>
                Namangan
            </label>
        </div>
        <button type="button" class="submit-button" @click="SelectRegion">DAVOM ETING</button>
    
  </div>
</template>

<script setup>
import router from '@/router';


function SelectRegion(){
  router.push('/mainPage')
}
</script>

<style>

.underlined-label {
    display: flex;
    align-items: center;
    font-size: 16px;
    margin-bottom: 20px;
    cursor: pointer;
    position: relative;
    padding-bottom: 5px; /* Space between text and underline */
    color: black;
}
.underlined-label::after {
    content: '';
    position: absolute;
    left: 30px; /* Adjust based on radio button size */
    right: 0;
    bottom: 0;
    height: 1px; /* Adjust the thickness of the underline */
    background-color: #000; /* Color of the underline */
}
.form-group {
    margin-bottom: 20px;
}

.form-group label {
    font-size: 14px;
    margin-bottom: 5px;
    display: inline-block;
}

.radio-group {
  margin-top: 60px;
    margin-bottom: 20px;
}

.radio-group label {
    display: flex;
    align-items: center;
    font-size: 16px;
    margin-bottom: 10px;
    cursor: pointer;
}

.radio-group input {
  width: auto;
    margin-right: 10px;
}

.submit-button {
    background-color: #d3d3d3;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    color: #000000;
    cursor: pointer;
    text-transform: uppercase;
    width: 100%;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    transition: background-color 0.3s ease;
    margin-top: 60px;
}

.submit-button:hover {
    background-color: #b0b0b0;
}
.selectRegion{
  color: #000000;
  font-size: 15px;
  line-height: 18.15px;
  font-weight: 400;
  text-align: center;
}
.helloMeros {
  text-align: center;
  margin-top: 70px;
  padding-bottom: 10px;
  color: #000000;
  font-size: 20px;
  line-height: 24.2px;
  font-weight: 500;
}
.firstMeros {
  display: flex !important;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
}
</style>

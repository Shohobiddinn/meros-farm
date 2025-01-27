<template>
  <div class="container">
    <div v-if="showLogo" :class="['first_Meros', { 'slide-up': logoMoved }]">
      <img src="/src/assets/Group 7.svg" />
      <div>
        <h2 style="margin-bottom: 0px;" class="textMeros">Meros</h2>
        <h2 style="margin-top: 0px;" class="textMeros">Pharm</h2>
      </div>
    </div>

    <transition name="fade">
      <div v-if="showForm" class="form-container">
        <input class="input" v-model="loginData.username" key="username" type="text" placeholder="INNni kiriting" />
        <input class="input" key="password" v-model="loginData.password" type="password"
          placeholder="Parolni kiriting" />
        <button key="login-button" class="login_btn" @click="Login"> <img style="padding-right: 5px;"
            src="/src/assets/Vector.png" alt=""> Kirish</button>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import auth from '@/core/auth';
import router from '@/router';
const showLogo = ref(true);
const logoMoved = ref(false);
const showForm = ref(false);
const loginData = ref({
  username: '',
  password: '',
  grant_type: 'password',
});

onMounted(() => {
  setTimeout(() => {
    logoMoved.value = true; // Trigger slide-up effect
    setTimeout(() => {
      showForm.value = true; // Show form after logo has slid up
    }, 1000); // Delay to match the slide-up animation duration
  }, 3000); // Initial delay for logo appearance
});

async function Login() {

  if (!loginData.value.username || !loginData.value.password) {
    alert("Please enter both username and password.");
    return;
  }

  const response = await auth.logIn(loginData.value);


  if (response.isOk) {
    // Redirect to the desired page after successful login
    // alert("Login successful");
    // router.push('/selectRegion')
    // For example: router.push('/dashboard');
    router.push('/mainPage')
  } else {
    alert("Login failed: " + response.message);
  }
}


</script>

<style scoped>
.textMeros {
  font-size: 37.72px;
  font-family: "https://fonts.google.com/share?selection.family=Abhaya+Libre:wght@600;";
  color: #7B7979;
}

.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center !important;
}

/* Keyframes for sliding up */
@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 1;
  }

  to {
    transform: translateY(-80px);
    /* Adjust value as needed */
    opacity: 1;
  }
}

/* Apply animation to the logo */
.first_Meros {
  display: flex !important;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  opacity: 0;
  animation: fadeIn 1s ease-in forwards;
  animation-delay: 3s;
  /* Delay the slide effect by 3 seconds */
}

input {
  width: 300px;
  padding: 15px;
  margin: 5px;
  border-radius: 1px;
  border: none;
  font-family: inherit;
  background-color: #D9D9D9 !important;
  border-radius: 5px;
}

::placeholder {
  color: #B4A4A4;
  font-size: 18px;
  line-height: 22.23px;
}


.login_btn {
  margin-top: 50px;
  width: 100%;
  background-color: #62C4BF;
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

/* Animation for the fade-in effect */
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

/* Apply slide effect after fade-in */
.first_Meros.slide-up {
  animation: slideUp 1s ease-out forwards;
}

/* Style for form */
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  /* 20px gap from the logo */
  opacity: 1;
  transition: opacity 1s ease-in;
}

.form-container.show-form {
  opacity: 1;
}
</style>
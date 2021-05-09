<template>
  <div class="nav w-full h-12 flex justify-between mt-4">
    <div class="logo w-6 h-full text-2xl ml-6 animate__animated animate__tada cursor-pointer" @click="isActive = !isActive" :class="{ active: isActive }" >Jisro</div>
    <div class="navigation w-6/12 h-full text-base flex justify-around">
      <p class="mx-5"><router-link to="/Home" class="opacity-70 hover:opacity-100">Home</router-link></p>
      <p class="mx-5"><router-link to="/work" class="opacity-70 hover:opacity-100">Work</router-link></p>
      <p class="mx-5"><router-link to="/about" class="opacity-70 hover:opacity-100">About</router-link></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data: {
    isActive: true
  }
};
</script>

<style scoped>
.active {
  height: 24px;
  background-color: beige;
}</style>

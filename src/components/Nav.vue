<template>
  <div class="nav w-full flex justify-between h-20">
    <div
      class="logo flex w-full mx-3 items-center text-2xl justify-start animate__animated animate__tada cursor-pointer"
      @click="isActive = !isActive"
      :class="{ active: isActive }"
    >
      <router-link to="/" class="opacity-70 hover:opacity-100"
        >Jisro</router-link
      >
    </div>
    <div
      class="navigation md:w-6/12 text-base flex items-center justify-end mx-3"
    >
      <div class="hover:bg-tertiary w-24 h-20 flex justify-center items-center">
        <router-link to="/work" class="opacity-70 hover:opacity-100"
          >WERK</router-link
        >
      </div>
      <div class="hover:bg-tertiary w-24 h-20 flex justify-center items-center">
        <router-link to="/about" class="opacity-70 hover:opacity-100"
          >CONTACT</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data: function () {
    return {
      isActive: true,
    };
  },
};
</script>

<style scoped></style>

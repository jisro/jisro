<template>
  <div
    class="wrapper w-full overflow-y overflow-x-hidden text-quarternary bg-primary"
  >
    <router-view to="/" />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: function () {
    return {
      isActive: false,
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap");
</style>

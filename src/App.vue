<template>
  <div class="wrapper h-screen w-full flex flex-col bg-primary overflow-y-hidden z-0">
      <Nav />
      <Content />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Content from "@/components/Content.vue";

export default {
  name: "App",
  components: {Nav, Content},
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');
</style>

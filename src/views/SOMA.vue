<template>
  <div class="content flex flex-col h-full w-screen overflow-x-hidden">
    <router-link to="/"
      ><span class="material-icons p-4"> arrow_back </span></router-link
    >
    <div class="intro h-full my-12 flex flex-col justify-between items-center">
      <div class="hi flex flex-col justify-center items-center lg:w-3/5">
        <div
          class="img flex justify-center lg:justify-start w-full fill-current"
        ></div>
        <div
          class="desc md:items-end flex flex-col h-full w-3/5 items-center justify-center"
        >
          <div
            class="introtext text-quarternary text-5xl lg:text-4xl font-bold"
          >
            <p class="header text-4xl lg:text-5xl leading-tight">SOMA</p>
            <p class="text-base font-thin mt-2">
              Soma projectpagina
              <a
                v-scroll-to="'#contact'"
                to=""
                class="cursor-pointer font-semibold hover:bg-quarternary hover:text-primary"
                >Meer over mij.</a
              >
            </p>
          </div>
        </div>
      </div>

      <div
        id="over"
        class="over w-screen h-80 flex justify-center items-center flex-col rounded-lg bg-vijf mt-8"
      >
        <div v-scroll-reveal.reset.reset class="desc w-3/5">
          <div class="text-4xl font-bold">
            Over mij
            <div class="text-base font-thin">
              <p>Ik woon in Utrecht. Leergierig, empathisch.</p>
            </div>
            <div class="text-xl md:text-3xl font-semibold underline">
              <div
                class="rounded-full h-1 w-2/5 bg-quarternary opacity-20 my-6"
              ></div>

              <a class="hover:bg-quarternary hover:text-vijf" href="/cv.pdf"
                >curriculum vitae</a
              >
            </div>
          </div>
        </div>
      </div>
      <div
        class="copyright h-8 flex content-center items-center md:justify-center flex-col md:mt-0 text-quarternary"
      >
        <div
          v-scroll-reveal.reset
          class="desc w-11/12 flex h-full md:h-full md:w-6/12 flex-row justify-center mx-6"
        >
          © Jisro, 2021
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
export default {
  name: "Soma",
};
</script>

<style scoped>
.introtext {
  line-height: 2rem;
}
</style>

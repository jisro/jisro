<template>
  <div
    class="content flex flex-col h-full w-screen justify-around overflow-x-hidden text-quarternary"
  >
    <router-link to="/" class="bg-twee"
      ><span class="material-icons p-4"> arrow_back </span></router-link
    >
    <div class="intro h-full my-12 flex flex-col justify-between items-center">
      <div class="hi flex justify-center items-center w-4/5 lg:w-2/5">
        <div
          class="desc md:items-start flex flex-col h-full w-full items-start justify-start"
        >
          <div
            class="introtext text-quarternary font-bold"
          >
            <p class="header text-4xl lg:text-5xl leading-tight">POM</p>
            <p class="text-base lg:text-lg font-normal mt-2">
              Pom is een praatmaatje voor laagtaalvaardige kinderen.
            </p>
          </div>
        </div>
      </div>

      <div
        id="over"
        class="over w-screen h-full pb-8 flex justify-center items-center flex-col rounded-lg"
      >
        <div class="desc w-4/5 lg:w-2/5">
          <div class="text-base lg:text-lg">
            <br />In samenwerking met de VoorleesExpress heb ik samen met Sander
            een concept uitgewerkt voor laagtaalvaardige kinderen. <br /><br />
            <div class="text-base lg:text-lg mb-2">
              Deze webpagina wordt nog aangevuld. Hieronder is het volledige
              onderzoek te bekijken.
            </div>
            <br />
            <a
              href="/verslag.pdf"
              class="rounded-lg bg-quarternary text-primary opacity-80 h-full w-36 text-base not-italic text-center mb-8 p-4"
              >Onderzoeksdocument</a
            >
          </div>
        </div>
      </div>
      <div
        id="over"
        class="over w-screen h-full py-8 flex justify-center items-center flex-col rounded-lg mt-8"
      >
        <div class="desc w-3/5 lg:w-2/5 flex-col lg:mb-8">
          <div class="text-xl font-bold">
            Resultaat <br />
            <div class="text-base font-thin italic"></div>
          </div>
        </div>
        <div class="videoframe w-screen h-72 lg:h-96 flex flex-grow p-1/2">
          <iframe
            class="w-full h-screen flex self-start"
            src="https://player.vimeo.com/video/344591611?title=0"
            style="width: 100%; height: 100%"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>

        <div
          id="projects"
          class="projects h-full w-screen flex flex-col justify-between items-center mt-8"
        >
          <div
            class="show md:items-end flex flex-col h-full w-3/5 mt-8 items-start justify-center"
          >
            <p
              v-scroll-to="'#projects'"
              class="text-base font-semibold mt-2 flex lg:opacity-60 hover:opacity-100 cursor-pointer"
            >
              Andere projecten
              <span class="material-icons fill-current hover:animate-bounce">
                arrow_downward
              </span>
            </p>
          </div>
          <router-link
            to="/SOMA"
            v-scroll-reveal.reset.reset.reset
            class="project shadow-xl soma flex flex-col h-96 w-4/5 my-8 justify-start p-8 rounded-2xl bg-een cursor-pointer hover:scale-50 transition-transform ease-in"
          >
            <div class="introtext lg:w-2/5 text-quarternary text-2xl font-bold">
              <p class="header leading-tight">SOMA</p>
              <p class="text-base font-thin mt-2">
                Een smartphone app over lichaamsbewustzijn.
              </p>
              <br />
              <div class="tags flex flex-wrap w-full lg:w-4/5">
                <span
                  class="rounded-lg bg-quarternary text-een opacity-80 h-full w-24 text-base text-center m-1"
                  >UI Design</span
                >
                <span
                  class="rounded-lg bg-quarternary text-een opacity-80 h-full w-24 text-base text-center m-1"
                  >UX Design</span
                >
                <span
                  class="rounded-lg bg-quarternary text-een opacity-80 h-full w-24 text-base text-center m-1"
                  >Concept</span
                >
              </div>
            </div>
          </router-link>
          <router-link
            to="/Skatemap"
            v-scroll-reveal.reset.reset
            class="project shadow-xl skatemap flex flex-col h-96 w-4/5 my-8 justify-start p-8 rounded-2xl bg-tertiary cursor-pointer"
          >
            <div class="introtext lg:w-2/5 text-quarternary text-2xl font-bold">
              <p class="header leading-tight">Skatemap</p>
              <p class="text-base font-thin mt-2">Een app voor skaters.</p>
              <br />
              <div class="tags flex flex-wrap w-full lg:w-4/5">
                <span
                  class="rounded-lg bg-quarternary text-vier opacity-80 h-full w-24 text-base text-center m-1"
                  >UI Design</span
                >
                <span
                  class="rounded-lg bg-quarternary text-vier opacity-80 h-full w-24 text-base text-center m-1"
                  >UX Design</span
                >
                <span
                  class="rounded-lg bg-quarternary text-vier opacity-80 h-full w-24 text-base text-center m-1"
                  >Concept</span
                >
              </div>
            </div>
          </router-link>
          <router-link
            to="/Divers"
            v-scroll-reveal.reset.reset
            class="project shadow-xl divers flex flex-col h-96 w-4/5 my-8 justify-start p-8 rounded-2xl bg-zes cursor-pointer"
          >
            <div class="introtext lg:w-2/5 text-quarternary text-2xl font-bold">
              <p class="header leading-tight">Diversen</p>
              <p class="text-base w-11/12 font-normal mt-2">
                Meer projecten die zijn gemaakt voor hobby of studie.
              </p>
              <div class="tags flex flex-wrap w-full lg:w-4/5 mt-2 text-zes">
                <span
                  class="rounded-lg bg-quarternary opacity-80 h-full w-32 text-base text-center m-1"
                  >Critical Design</span
                >
                <span
                  class="rounded-lg bg-quarternary opacity-80 h-full w-24 text-base text-center my-1"
                  >Concept</span
                >
                <span
                  class="rounded-lg bg-quarternary opacity-80 h-full w-28 text-base text-center m-1"
                  >Data Design</span
                >

                <span
                  class="rounded-lg bg-quarternary opacity-80 h-full w-20 px-1 text-base text-center my-1"
                  >Games</span
                >
                <span
                  class="rounded-lg bg-quarternary opacity-80 h-full w-6 text-base text-center m-1"
                  >...</span
                >
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div
      class="copyright h-8 flex content-center items-center md:justify-center flex-col md:mt-0 text-quarternary wrap"
    >
      <div
        v-scroll-reveal.reset
        class="desc flex h-full md:h-full flex-row justify-center mx-6"
      >
        © Jisro, 2021
      </div>
    </div>
  </div>
</template>

<script lang="js">
export default {
  name: "Pom",
};
</script>

<style scoped>
.pom {
  background-image: url(../assets/pom.webp);
  background-position: right bottom;
  background-size: contain;
  background-repeat: no-repeat;
}

.divers {
  background-image: url(../assets/divers.webp);
  background-position: right bottom;
  background-size: contain;
  background-repeat: no-repeat;
}

.skatemap {
  background-image: url(../assets/skatemap.webp);
  background-position: right bottom;
  background-size: contain;
  background-repeat: no-repeat;
}

.soma {
  background-image: url(../assets/soma.webp);
  background-position: right bottom;
  background-size: contain;
  background-repeat: no-repeat;
}

.project:hover {
  transform: scale(1.05);
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}
</style>

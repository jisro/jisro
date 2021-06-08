<template>
  <div class="content flex flex-col w-screen overflow-x-hidden bg-quarternary">
    <div class="intro h-screen flex flex-col justify-between bg-secondary">
      <div
        id="navigation"
        class="nav w-screen flex justify-between h-20 font-semibold text-quarternary"
      >
        <div
          class="logo flex w-full mx-6 items-center text-2xl justify-start animate__animated animate__tada cursor-pointer"
        >
          <a v-scroll-to="'#navigation'" class="opacity-100 hover:opacity-70"
            >Jisro</a
          >
        </div>
        <div
          class="navigation md:w-6/12 text-base flex items-center justify-end mx-3"
        >
          <div
            class="w-24 h-20 md:w-96 flex justify-center items-center cursor-pointer"
          >
            <a v-scroll-to="'#pom'" class="opacity-100 hover:opacity-70"
              >Werk</a
            >
          </div>
          <div
            class="w-24 h-20 md:w-96 flex justify-center items-center cursor-pointer"
          >
            <a
              v-scroll-to="'#contact'"
              to=""
              class="opacity-100 hover:opacity-70"
              >Contact</a
            >
          </div>
        </div>
      </div>
      <div class="hi flex h-1/2 md:flex-shrink-0 justify-center">
        <div
          class="desc md:items-end flex flex-col w-6/12 items-center md:w-6/12"
        >
          <div
            class="introtext ml-8 text-quarternary text-5xl lg:text-7xl font-bold"
          >
            <p class="header leading-tight md:leading-tight lg:text-9xl">
              Hi, <br />
              ik ben <br />Joris
            </p>
            <br />
            <p class="text-xl lg:text-4xl font-thin md:mt-8 text-quarternary">
              Ik ben een UI/UX ontwerper <br />
              op zoek naar een baan.
            </p>
          </div>
        </div>
        <div class="img flex items-center w-6/12 md:w-1/2 fill-current">
          <svg
            class="h-full md:w-8/12"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="240 0 340 480"
          >
            <path
              d="M667.9 389.3c-18-18.1-38.4-33.8-61-45.6-21.9-11.5-45.1-19.9-66.8-31.9-12.4-6.9-24.5-14.4-36.2-22.5-1.6-1.1-3.1 1.5-1.5 2.6 26.8 18.5 55.4 33 85.1 46 29.5 12.9 55.6 30.8 78.3 53.6 1.3 1.3 3.5-.8 2.1-2.2zM314 258.4c-4.2 7.1-9.2 13.7-15.5 19.1-4.4 3.8-11.2 6.4-14.1 11.7-6.3 11.4 5.7 25.4 12.1 33.9 17.3 23.3 34.7 48.2 58 66.2 19.3 14.9 43.1 22.5 67.4 22.7 28.5.2 54.6-12.5 73-33.9 9.2-10.6 16.6-22.8 18.9-36.9 2.5-15.3-1.1-30.8-9.1-44-1-1.7-3.6-.1-2.6 1.5 7.1 11.9 10.7 25.7 9 39.6-1.6 13-7.8 24.7-16 34.8-16.7 20.5-39.8 34.1-66.7 35.8-23 1.4-46.9-4.6-66.1-17.4-21.9-14.6-38.3-36.4-54-57.2-5-6.7-10.2-13.3-15-20.2-4.1-5.9-9.7-14.4-7.1-21.9 1.5-4.2 5.9-6.2 9.3-8.6 2.2-1.6 4.3-3.2 6.3-5 5.9-5.3 10.6-11.7 14.6-18.5 1.2-1.8-1.4-3.3-2.4-1.7z"
            />
            <path
              d="M506.2 318.1c-2.8-35.2-2.5-70.6 1-105.8.2-1.9-2.8-1.9-3 0-3.4 35.2-3.8 70.5-1 105.8.2 1.9 3.2 1.9 3 0zM309.8 306c6-28.2 8.8-57 8.1-85.9 0-1.9-3-1.9-3 0 .7 28.6-2 57.1-8 85.1-.4 1.9 2.5 2.7 2.9.8zM295.3 280.3c-11.3 2.1-22.4 5-33.1 9-10.3 3.8-20.2 8.5-30.9 11.3-9.3 2.5-18.9 3.8-28.2 6.3-11.3 3-22.2 7.1-32.8 11.8-1.8.8-.2 3.4 1.5 2.6 10.8-4.8 21.9-8.9 33.3-11.9 9.4-2.5 19.1-3.8 28.5-6.4 10.4-2.9 20.1-7.5 30.2-11.2 10.5-3.8 21.3-6.6 32.2-8.7 1.9-.3 1.1-3.2-.7-2.8z"
            />
            <path
              d="M294 151.5c2.8 7.1 5 14.3 6.6 21.7 1.4 6.4 1.7 12.9 3.1 19.2 2.9 13.2 10.2 26 19 36.2 3 3.5 6.6 6.4 9.9 9.6 5.8 5.6 10.9 11.9 15.8 18.2 6.6 8.5 12.4 18.3 21.8 24 12.7 7.7 29.3 9.2 43.8 8.8 11.1-.3 22.2-3.5 30.3-11.5 8.4-8.3 16.2-16.9 25.1-24.7 11.2-9.7 22.4-20.1 31.8-31.6 6.5-8 9.5-16.3 11.2-26.3 2.9-17.3 5.7-34.5 9.5-51.7.4-1.9-2.5-2.7-2.9-.8-3.2 14.6-5.9 29.2-8.3 44-1.4 8.5-2.3 17.2-6.4 24.8-6.6 12.1-18.2 22.2-28.2 31.4-9.1 8.4-18.6 16.1-27 25.2-6.3 6.8-11.7 12.8-20.8 15.7-8 2.6-16.3 2.6-24.6 2.1-7.8-.5-15.6-1.2-23-3.8-12.2-4.3-18.8-12.6-26.3-22.6-7.7-10.2-15.8-19.7-25.1-28.5-10.1-9.4-18.3-23-21.9-36.3-1.9-6.8-2.2-13.8-3.6-20.7-1.6-8-4-15.9-7-23.5-.6-1.5-3.5-.7-2.8 1.1z"
            />
            <path
              d="M335 181.4c11.3 1.9 22.7 1.7 33.9-.8 5-1.1 10-1.6 15.1-2.1 26.4-2.4 53.1-2.5 79.6-2.8-.4-.8-.9-1.5-1.3-2.3-18.3 24.8-54 30.7-82.8 28.1-7-.6-13.8-1.7-19.8-5.3-9.5-5.7-18.1-13.1-26.7-20-1.5-1.2-3.6.9-2.1 2.1 9 7.2 18 15.2 28.1 20.9 6.7 3.9 14.5 4.8 22.2 5.4 29.5 2.3 65.1-4.5 83.7-29.7.7-.9-.2-2.3-1.3-2.3-26.3.3-52.7.5-78.8 2.7-5.2.4-10.4.9-15.5 2-11.1 2.3-22.1 2.9-33.4 1-1.9-.1-2.8 2.8-.9 3.1zM458.4 155.1c5.6.6 13.1 2.8 14.7 9 1.3 5.1-.6 10.4-3.4 14.6-1.1 1.6 1.5 3.1 2.6 1.5 3.5-5.3 5.7-12.7 3-18.8-2.7-6.3-10.7-8.6-16.9-9.3-1.9-.2-1.9 2.8 0 3zM427.4 87.1c-2.6-7.2 14-9.7 18.4-10.4 7.2-1.1 14.6-.2 20.2 4.8 1.4 1.3 3.6-.8 2.1-2.1-7.4-6.6-17.3-7-26.6-4.9-6.1 1.4-20.3 4.1-17 13.4.6 1.8 3.5 1 2.9-.8zM323.2 95c9.9-6.1 32.8-15.2 40.9-2.2 1 1.6 3.6.1 2.6-1.5-9.3-14.8-33.5-6-45 1.1-1.7 1-.2 3.6 1.5 2.6zM368.2 68.1c-6.9-5-14.9-6.7-23.3-5.2-10.3 1.9-20.4 5-30.3 8.2-2.7.9-1.6 5.2 1.2 4.3 8.4-2.7 16.9-5.2 25.5-7.2 9-2.1 16.9-1.9 24.6 3.7 2.4 1.8 4.6-2.1 2.3-3.8zM418.6 67.4c10.8-8.7 24-9.7 37.4-9.3 9.4.3 18.7 1.1 28 2.3 2.8.4 4.1-4 1.2-4.3-22.8-3.1-50.5-7.3-69.8 8.1-2.2 1.8 1 5 3.2 3.2zM378.9 124.9c5.6-15.1 8.3-30.9 8.2-47 0-1.9-3-1.9-3 0 .1 15.8-2.6 31.4-8.1 46.2-.6 1.8 2.3 2.6 2.9.8zM404.8 153.1c2-3 4-5.6 7.8-4.9 3.1.5 6.1 1 9.3.9 1.9 0 1.9-3 0-3-2.6 0-5.2-.2-7.7-.7-1.3-.2-2.6-.6-3.9-.4-3.7.5-6.1 3.7-8 6.6-1.1 1.6 1.5 3.1 2.5 1.5zM384.5 154.8c-2.8-8.2-11.8-10.2-18.7-5.6-1.6 1.1-.1 3.7 1.5 2.6 5.2-3.4 12.1-2.6 14.3 3.8.7 1.8 3.6 1.1 2.9-.8zM326.8 169.8c2.7-4.8 6.3-9 10.8-12.3 1.5-1.1 0-3.7-1.5-2.6-4.9 3.6-8.9 8-11.9 13.3-1 1.7 1.6 3.2 2.6 1.6zM520.5 144.6c7.8-1 14.2-4.7 18.2-11.4 5.6-9.4 9.4-21.2 10.2-32.2.3-4.1-.3-8.2 0-12.3.3-4.9 1.4-9.6 1.4-14.5-.1-6.7-3.8-8.2-10.3-6.5-1.9.5-1.1 3.4.8 2.9 3.3-.9 5.7-1.5 6.4 1.7.8 3.8-.3 8.7-.8 12.4-.8 5.8 0 11.6-.6 17.4-.9 9.3-4.1 18.8-8.4 27.1-3.6 7-8.8 11.2-16.9 12.3-1.9.4-1.9 3.4 0 3.1zM295.8 149.6c-7.5-1-11.8-4.8-13.7-12-1.5-5.9-3.5-11.1-6.9-16.1-7.2-10.6-5.5-21.7-.7-33.1.7-1.8-1.8-3.3-2.6-1.5-5 11.6-7.4 24.2.1 35.3 2.1 3.1 4 6.1 5.3 9.7 1.3 3.6 1.8 7.5 3.2 11 2.4 6 8.3 8.9 14.5 9.7 1.9.2 2.7-2.7.8-3zM292.8 123.3c-3.5-23.9-4.8-48-3.8-72.1.1-1.9-2.9-1.9-3 0-1 24.4.3 48.8 3.9 72.9.3 1.9 3.2 1.1 2.9-.8z"
            />
            <path
              d="M528.2 114.4c3.1-12 4.7-24.5 3.6-36.8-1.2-12.5-3.1-25-4.9-37.4-.3-1.9-3.2-1.1-2.9.8 1.7 12.2 3.6 24.4 4.8 36.6 1.2 12.1-.4 24.3-3.5 36-.5 1.9 2.4 2.7 2.9.8z"
            />
          </svg>
        </div>
      </div>
      <div class="down h-20 flex justify-center">
        <a class="cursor-pointer" v-scroll-to="'#pom'"
          ><svg
            width="51"
            height="24"
            viewBox="0 0 51 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M37.9326 0L25 12L12.0674 0H0L25.1244 23.25L50.2488 0H37.9326Z"
              fill="#202041"
            /></svg
        ></a>
      </div>
    </div>

    <flicking>
      <div
        id="pom"
        class="pom h-screen w-screen bg-twee flex content-center justify-center flex-col md:flex-row"
      >
        <div
          class="desc flex md:w-6/12 flex-row md:flex-col content-center justify-center"
        >
          <div class="text-3xl w-screen h-8/12 md:text-8xl font-bold">
            Pom
            <div class="text-xl md:text-3xl font-thin">
              Een praatmaatje voor kinderen met een taalachterstand.
            </div>
            <div class="img flex h-96 mt-8">
              <img
                v-scroll-reveal.reset="{ delay: 250 }"
                class="h-full"
                src="../assets/pom.svg"
              />
            </div>
            <router-link
              to="/Pom"
              class="more flex-col w-full h-6 flex items-end"
            >
              <img class="more cursor-pointer" src="../assets/more.svg" />
            </router-link>
          </div>
        </div>
      </div>
      <div
        id="pom2"
        class="pom h-screen w-screen bg-twee flex content-center justify-center flex-col md:flex-row"
      >
        <div
          class="desc flex md:w-6/12 flex-row md:flex-col content-center justify-center"
        >
          <div class="text-3xl w-screen h-8/12 md:text-8xl font-bold">
            Pom Twee
            <div class="text-xl md:text-3xl font-thin">
              Dit is wat ik heb gedaan.
            </div>
            <div class="img flex h-96 mt-8">
              <img
                v-scroll-reveal.reset="{ delay: 250 }"
                class="h-full"
                src="../assets/pom.svg"
              />
            </div>
            <router-link
              to="/Pom"
              class="more flex-col w-full h-6 flex items-end"
            >
              <img class="more cursor-pointer" src="../assets/more.svg" />
            </router-link>
          </div>
        </div>
      </div>
    </flicking>
    <div
      class="soma h-screen bg-drie flex content-center justify-center flex-col md:flex-row"
    >
      <div
        class="desc flex md:w-6/12 flex-row md:flex-col content-center justify-center"
      >
        <div class="text-3xl w-10/12 h-8/12 md:text-8xl font-bold">
          SOMA
          <div class="text-xl md:text-3xl font-thin">
            Een smartphone app over lichaamsbewustzijn.
          </div>
          <div class="img flex justify-center h-96 mt-8">
            <img
              v-scroll-reveal.reset="{ delay: 250 }"
              class="h-full"
              src="../assets/soma.svg"
            />
          </div>
          <div class="more flex-col w-full h-6 flex items-end">
            <img class="more cursor-pointer" src="../assets/more.svg" />
          </div>
        </div>
      </div>
    </div>

    <div
      class="skatemap h-screen bg-vier flex content-center justify-center flex-col md:flex-row"
    >
      <div
        class="desc flex md:w-6/12 flex-row md:flex-col content-center justify-center"
      >
        <div class="text-3xl w-10/12 h-8/12 md:text-8xl font-bold">
          skatemap
          <div class="text-xl md:text-3xl font-thin">Een app voor skaters.</div>
          <div class="img flex justify-center h-96 mt-8">
            <img
              v-scroll-reveal.reset="{ delay: 250 }"
              class="h-full"
              src="../assets/skatemap.svg"
            />
          </div>
          <div class="more flex-col w-full h-6 flex items-end">
            <img class="more cursor-pointer" src="../assets/more.svg" />
          </div>
        </div>
      </div>
    </div>

    <div class="skatemap h-4/12 md:justify-end flex-row md:flex-row md:mt-0">
      <div class="img w-full flex justify-end">
        <a class="cv bg-drie rounded-xl cursor-pointer" href="/cv.pdf"
          ><img class="h-full" src="../assets/cv.svg"
        /></a>
      </div>
    </div>

    <div
      class="samenwerken h-screen flex content-center md:justify-center flex-col md:flex-row mt-12 md:mt-0"
    >
      <div
        class="desc w-11/12 flex mb-48 md:h-full md:w-6/12 flex-col items-center justify-center"
      >
        <div class="text-3xl text-secondary md:text-8xl font-bold">
          Samenwerken?
          <div
            id="contact"
            class="text-xl text-secondary md:text-3xl font-thin"
          >
            Ik werk als freelancer voor Remoris. <br />Drink een koffietje met
            ons.
          </div>
        </div>
        <div
          class="contact w-screen h-96 my-8 flex justify-center items-center flex-col md:flex-row rounded-lg bg-secondary"
        >
          <div class="desc">
            <div class="text-3xl md:text-8xl font-bold">
              Contact
              <div class="text-xl md:text-3xl font-thin">
                <br />
                hi@jisro.nl <br />
                <a href="tel:+31 6 232 454 01">+31 6 232 454 01</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="copyright h-8 flex content-center md:justify-center flex-col md:flex-row md:mt-0 text-secondary"
      >
        <div
          class="desc w-11/12 flex h-full mb-24 md:h-full md:w-6/12 flex-row md:flex-col justify-center mx-6"
        >
          © Jisro, 2021
        </div>
      </div>
    </div>
  </div>
</template>

<script>
ScrollReveal().reveal(".pom");
export default {
  name: "Home",
};
</script>

<style scoped>
/* .content {
  height: 3700px;
  background-image: url("../assets/bg.svg");
  background-repeat: no-repeat;
  background-size: cover;
} */
/* 
.nav {
  background-image: url("../assets/nav.svg");
  background-repeat: no-repeat;
  background-size: cover;
} */

.introtext {
  line-height: 2rem;
}

.outline {
  background-image: url("../assets/outline.svg");
  background-repeat: none;
  background-size: cover;
}

  #progress .progress {
    position: relative;
    width: 400px;
    height: 10px;
    border-radius: 5px;
    background: #eee;
    margin: 10px auto;
    overflow: hidden;
  }
  #progress .thumb {
    position: relative;
    height: 100%;
    width: 0;
    border-radius: inherit;
    background: #ccc;
  }
</style>

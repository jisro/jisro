<template>
  <div
    class="content flex flex-col h-full w-screen justify-around overflow-x-hidden text-quarternary"
  >
    <router-link to="/" class="bg-twee"
      ><span class="material-icons p-4"> arrow_back </span></router-link
    >
    <div class="intro h-full my-12 flex flex-col justify-between items-center">
      <div class="hi flex justify-center items-center w-3/5">
        <div
          class="desc md:items-end flex flex-col h-full w-full items-center justify-start"
        >
          <div
            class="introtext text-quarternary text-5xl lg:text-4xl font-bold"
          >
            <p class="header text-4xl lg:text-5xl leading-tight">POM</p>
            <p class="text-base font-thin mt-2">
              Pom is een praatmaatje voor laagtaalvaardige kinderen.
            </p>
          </div>
        </div>
        <div
          class="img flex invisible max-h-36 lg:max-h-48 w-2/5 justify-center self-start lg:justify-start fill-current md:relative absolute right-24 top-9 md:right-0 md:top-0"
        >
          <svg
            viewBox="0 0 100 395"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SOMA">
              <g id="head">
                <mask
                  id="path-1-outside-1"
                  maskUnits="userSpaceOnUse"
                  x="68"
                  y="-1"
                  width="87"
                  height="92"
                  fill="black"
                >
                  <rect fill="white" x="68" y="-1" width="87" height="92" />
                  <path
                    d="M85.8525 20.5495C92.7038 20.2517 94.4806 24.8055 94.5645 27.7852C95.5412 5.21637 119.117 -6.32636 138.394 8.93919C154.017 21.3111 139.473 37.2022 130.248 43.6013C148.993 46.1811 155.347 53.4191 152.252 66.7034C149.777 77.3309 134.426 74.7397 127.06 72.1157C133.004 86.1604 118.046 87.7003 111.457 88.9429C106.185 89.9361 105.435 77.7244 105.719 71.4942C101.577 78.3095 89.7599 90.2744 75.6274 83.6119C61.4953 76.9492 78.9583 61.8474 89.4566 55.1294C53.6848 50.3564 76.377 20.9614 85.8525 20.5495Z"
                  />
                </mask>
                <path
                  d="M85.8525 20.5495C92.7038 20.2517 94.4806 24.8055 94.5645 27.7852C95.5412 5.21637 119.117 -6.32636 138.394 8.93919C154.017 21.3111 139.473 37.2022 130.248 43.6013C148.993 46.1811 155.347 53.4191 152.252 66.7034C149.777 77.3309 134.426 74.7397 127.06 72.1157C133.004 86.1604 118.046 87.7003 111.457 88.9429C106.185 89.9361 105.435 77.7244 105.719 71.4942C101.577 78.3095 89.7599 90.2744 75.6274 83.6119C61.4953 76.9492 78.9583 61.8474 89.4566 55.1294C53.6848 50.3564 76.377 20.9614 85.8525 20.5495Z"
                  stroke="#202041"
                  stroke-width="4"
                  mask="url(#path-1-outside-1)"
                />
              </g>
              <g id="lleg">
                <mask
                  id="path-2-outside-2"
                  maskUnits="userSpaceOnUse"
                  x="11"
                  y="211"
                  width="146"
                  height="148"
                  fill="black"
                >
                  <rect fill="white" x="11" y="211" width="146" height="148" />
                  <path
                    d="M13.0002 218.446C14.3042 216.96 15.9636 215.775 17.8478 214.981C22.2792 213.171 26.727 214.312 28.4506 214.695C42.5461 217.83 52.1062 209.977 57.0272 214.371C60.9331 217.862 56.4257 224.165 54.3093 238.299C52.3853 251.051 50.1467 266.094 58.1637 275.445C66.016 284.603 75.7747 279.037 93.9413 291.069C104.252 297.899 101.56 299.993 110.306 305.324C130.312 317.522 149.755 309.83 154.6 319.271C155.651 321.319 154.473 321.168 152.89 334.642C151.169 349.229 151.907 354.879 148.892 355.859C146.233 356.726 142.227 353.424 140.314 350.567C138.047 347.187 138.288 343.802 138.198 342.467C137.466 331.691 106.383 323.591 74.972 313.688C46.7563 304.791 42.2547 302 38.1317 298.398C25.7828 287.609 21.1264 273.274 17.9535 263.52C14.542 253.008 12.9802 229.42 13.0002 218.446Z"
                  />
                </mask>
                <path
                  d="M13.0002 218.446C14.3042 216.96 15.9636 215.775 17.8478 214.981C22.2792 213.171 26.727 214.312 28.4506 214.695C42.5461 217.83 52.1062 209.977 57.0272 214.371C60.9331 217.862 56.4257 224.165 54.3093 238.299C52.3853 251.051 50.1467 266.094 58.1637 275.445C66.016 284.603 75.7747 279.037 93.9413 291.069C104.252 297.899 101.56 299.993 110.306 305.324C130.312 317.522 149.755 309.83 154.6 319.271C155.651 321.319 154.473 321.168 152.89 334.642C151.169 349.229 151.907 354.879 148.892 355.859C146.233 356.726 142.227 353.424 140.314 350.567C138.047 347.187 138.288 343.802 138.198 342.467C137.466 331.691 106.383 323.591 74.972 313.688C46.7563 304.791 42.2547 302 38.1317 298.398C25.7828 287.609 21.1264 273.274 17.9535 263.52C14.542 253.008 12.9802 229.42 13.0002 218.446Z"
                  stroke="#202041"
                  stroke-width="4"
                  mask="url(#path-2-outside-2)"
                />
              </g>
              <g id="torso">
                <mask
                  id="path-3-outside-3"
                  maskUnits="userSpaceOnUse"
                  x="-1"
                  y="72"
                  width="123"
                  height="154"
                  fill="black"
                >
                  <rect fill="white" x="-1" y="72" width="123" height="154" />
                  <path
                    d="M14.5221 94.149C23.5875 77.8681 31.0741 75.3035 33.9751 74.5666C43.9026 72.0404 49.9463 78.2329 72.1773 87.7531C103.073 100.975 113.527 98.5064 118.35 108.06C122.686 116.647 117.968 126.03 110.113 141.64C98.8191 164.099 91.0378 163.622 79.0862 185.212C67.7922 205.617 69.8166 214.943 58.4831 220.719C49.2434 225.425 37.1267 224.708 28.4775 220.85C10.9689 213.037 7.5774 192.3 3.94073 170.044C-2.96723 127.744 10.4759 101.432 14.5221 94.149Z"
                  />
                </mask>
                <path
                  d="M14.5221 94.149C23.5875 77.8681 31.0741 75.3035 33.9751 74.5666C43.9026 72.0404 49.9463 78.2329 72.1773 87.7531C103.073 100.975 113.527 98.5064 118.35 108.06C122.686 116.647 117.968 126.03 110.113 141.64C98.8191 164.099 91.0378 163.622 79.0862 185.212C67.7922 205.617 69.8166 214.943 58.4831 220.719C49.2434 225.425 37.1267 224.708 28.4775 220.85C10.9689 213.037 7.5774 192.3 3.94073 170.044C-2.96723 127.744 10.4759 101.432 14.5221 94.149Z"
                  stroke="#202041"
                  stroke-width="4"
                  mask="url(#path-3-outside-3)"
                />
              </g>
              <g id="rleg">
                <mask
                  id="path-4-outside-4"
                  maskUnits="userSpaceOnUse"
                  x="58"
                  y="175"
                  width="146"
                  height="220"
                  fill="black"
                >
                  <rect fill="white" x="58" y="175" width="146" height="220" />
                  <path
                    d="M175.573 389.565C169.424 383.963 174.197 374.724 174.315 360.553C174.458 343.431 167.722 330.171 165.075 325.023C156.795 308.741 149.972 309.992 144.456 295.955C137.659 278.637 146.26 272.22 139.742 262.625C129.612 247.688 106.101 259.285 83.8486 244.363C64.5208 231.395 53.9756 203.682 63.6419 188.582C67.9938 181.809 76.9912 176.671 85.6356 177.016C95.231 177.397 99.6894 184.325 110.85 194.212C138.909 219.059 154.807 214.336 163.925 232.974C169.106 243.564 163.691 244.516 170.242 260.088C175.966 273.703 182.376 278.343 184.489 291.221C185.829 299.316 183.621 299.409 183.88 309.805C184.164 321.131 186.915 326.382 197.655 360.442C201.893 373.885 203.692 380.118 200.009 385.552C197.523 389.2 192.187 392.999 185.754 393C183.961 392.991 179.001 392.691 175.573 389.565Z"
                  />
                </mask>
                <path
                  d="M175.573 389.565C169.424 383.963 174.197 374.724 174.315 360.553C174.458 343.431 167.722 330.171 165.075 325.023C156.795 308.741 149.972 309.992 144.456 295.955C137.659 278.637 146.26 272.22 139.742 262.625C129.612 247.688 106.101 259.285 83.8486 244.363C64.5208 231.395 53.9756 203.682 63.6419 188.582C67.9938 181.809 76.9912 176.671 85.6356 177.016C95.231 177.397 99.6894 184.325 110.85 194.212C138.909 219.059 154.807 214.336 163.925 232.974C169.106 243.564 163.691 244.516 170.242 260.088C175.966 273.703 182.376 278.343 184.489 291.221C185.829 299.316 183.621 299.409 183.88 309.805C184.164 321.131 186.915 326.382 197.655 360.442C201.893 373.885 203.692 380.118 200.009 385.552C197.523 389.2 192.187 392.999 185.754 393C183.961 392.991 179.001 392.691 175.573 389.565Z"
                  stroke="#202041"
                  stroke-width="4"
                  mask="url(#path-4-outside-4)"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>

      <div
        id="over"
        class="over w-screen h-full py-8 flex justify-center items-center flex-col rounded-lg bg-vijf mt-8"
      >
        <div class="desc w-3/5">
          <div class="text-xl font-bold">
            Onderzoek <br />
            <div class="text-lg lg:text-2xl font-thin italic">
              <p>
                <br />Hoe kan er een product ontwikkeld
                worden dat zijn gebruikers stimuleert om lichamelijke sensaties
                te interpreteren, om zo op structurele basis het
                lichaamsbewustzijn te vergroten?
                <br><br>
                <div class="text-base not-italic">Deze webpagina wordt nog aangevuld. Hieronder is het volledige onderzoek te bekijken.</div>
              </p>
              <br />
              <a
                href="/explo.pdf"
                class="rounded-lg bg-quarternary text-primary opacity-80 h-full w-36 text-base not-italic text-center mb-8 p-1"
                >Onderzoeksdocument</a
              >
            </div>
          </div>
        </div>
      </div>
      <div
        id="over"
        class="over w-screen h-full py-8 flex justify-center items-center flex-col rounded-lg mt-8"
      >
        <div class="desc w-3/5 flex-col">
          <div class="text-xl font-bold">
            Resultaat <br />
            <div class="text-base font-thin italic"></div>
          </div>
        </div>
        <div
          class="videoframe w-screen lg:w-3/5 h-72 lg:h-96 flex flex-grow p-1/2"
        >
          <iframe
            class="w-full h-screen flex self-start"
            src="https://player.vimeo.com/video/344591611?title=0"
            style="width: 100%; height: 100%"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <a
          href="https://framer.com/share/SOMA--8FvLmVNE3r0BWyvA5PdM/hNsTfrRGW"
          class="rounded-lg bg-quarternary text-primary opacity-80 h-full w-36 text-base text-center mb-8 lg:mt-8"
          >Ervaar op framer!</a
        >

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
        class="project shadow-xl soma flex flex-col h-96 w-4/5 lg:w-3/5 my-8 justify-start p-8 rounded-2xl bg-een cursor-pointer hover:scale-50 transition-transform ease-in"
      >
        <div class="introtext lg:w-2/5 text-quarternary text-2xl font-bold">
          <p class="header leading-tight">SOMA</p>
          <p class="text-base font-thin mt-2">
            Een smartphone app over lichaamsbewustzijn.
          </p><br>
          <div class="tags flex flex-wrap w-full lg:w-4/5">
            <span class="rounded-lg bg-quarternary text-een opacity-80 h-full w-24 text-base text-center m-1">UI Design</span>
            <span class="rounded-lg bg-quarternary text-een opacity-80 h-full w-24 text-base text-center m-1">UX Design</span>
            <span class="rounded-lg bg-quarternary text-een opacity-80 h-full w-24 text-base text-center m-1">Concept</span>
          </div>
        </div>
      </router-link>
          <router-link
            to="/Skatemap"
            v-scroll-reveal.reset.reset
            class="project shadow-xl skatemap flex flex-col h-96 w-4/5 lg:w-3/5 my-8 justify-start p-8 rounded-2xl bg-tertiary cursor-pointer"
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
.introtext {
  line-height: 2rem;
}
.pom {
  background-image: url(../assets/pom.webp);
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

<template>
  <div class="lottie-anim"></div>
</template>

<script>
import lottie from "lottie-web";
export default {
  name: "LottieAnim",
  props: {
    animationData: Object,
    path: String,
    loop: {
      type: Boolean,
      default: true,
    },
    autoplay: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      animInstance: undefined,
    };
  },
  mounted() {
    let settings = {
      container: this.$el,
      renderer: "svg",
      loop: this.loop,
      autoplay: this.autoplay,
    };

    if (this.animationData) {
      settings.animationData = this.animationData;
    } else if (this.path) {
      settings.path = this.path;
    }

    this.animInstance = lottie.loadAnimation(settings);
  },
  beforeDestroy() {
    if (this.animInstance) this.animInstance.destroy();
  },
};
</script>

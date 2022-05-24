<template>
  <div id="back" @click="alterClose">
    <div id="youtube">
      <div id="parent">
        <iframe :src="video"></iframe>
      </div>
      <button id="video-stop" @click="alterClose">그만보기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "video-modal",
  props: {
    video: {
      type: String,
    },
  },
  methods: {
    alterClose() {
      this.$emit("close");
    },
  },
};
</script>

<style>
@media (min-width: 1440px) {
  #youtube {
    padding: 0px 17.5% !important;
  }
}

#back {
  background: rgba(0, 0, 0, 0.450);
  height: 100%;
}
#video-stop {
  background-color: white;
}
#myButton {
  color: white;
  background-color: black;
  right: 0%;
}
#parent {
    position: relative;
    padding-top: 56%;
    width: 100%;
    height: 0;
}

/* iframe */
#parent > iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}



</style>
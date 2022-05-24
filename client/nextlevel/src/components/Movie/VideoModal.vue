<template>
  <div id="back" @click="alterClose">
    <div id="youtube-box">
      <div id="youtube">
        <div id="parent">
          <iframe :src="video"></iframe>
        </div>
        <button
          id="video-stop"
          class="btn btn-warning mybutton"
          @click="alterClose"
        >
          X
        </button>
      </div>
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
    /* padding: 0px 17.5% !important; */
    width: 100% !important;
  }
}

#back {
  background: rgba(0, 0, 0, 0.45);
  height: 100%;
}
#video-stop {
  position: fixed;
  top: 0%;
  left: 100%;
  background-color: white;
}
#myButton {
  background-color: black;
  right: 0%;
}
/* #parent {
  position: relative;
  padding-top: 56%;
  width: 100%;
  height: 0;
} */
#parent {
  position: relative;
  padding-top: 46%;
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
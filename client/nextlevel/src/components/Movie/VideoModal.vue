<template>
  <div id="back" @click="alterClose">
    <div id="youtube">
      <p align="middle" style="margin:0px"><iframe
      width="100%"
      height="500rem"
      :src="video"
      ></iframe></p>
      <button id="video-stop" @click="alterClose">그만보기</button>
      </div>
  </div>
</template>

<script>
export default {
  name : 'video-modal',
  props : {
    video : {
      type : String,
    }
  },
  methods : {
    alterClose(){
      this.$emit('close',)
    }
  }
}
</script>

<style>
@media (max-width : 1339) {
  #youtube {
    padding : 10px 0% !important;
  }
}


@media (min-width : 1440px){
  #youtube {
    padding: 50px 15% !important; 
  }
}


#back {
  position: fixed;
  top : 225px;
}
#youtube {
  position: fixed;
  margin: 0 auto;
  left: 0;
  right: 0;
  height: 800px;
  background: rgba(0, 0, 0, 0.85);
}
#video-stop {
  background-color: white;
}
</style>
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// import $ from "./assets/js/zepto.min.js";
// import sm from "./assets/js/sm.min.js";
export default {
  name: "App",
  mounted: function() {
    console.log(this);
    console.log(this.url1);
  }
};
</script>

<style lang="less">
@import "./assets/css/sm.min.css";
@color: green;
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: @color;
  margin-top: 60px;
}
.footer {
  position: absolute;
  bottom: 0;
  height: 45px;
  right: 0;
  left: 0;
  background: @color;
  color: #fff;
  display: flex;
  line-height: 45px;
}
.footer > div {
  flex: 1;
}
.body {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 45px;
  background: #ddd;
}
a {
  color: #fff !important;
  text-decoration: none;
}
a:hover,
a:active {
  color: #fff !important;
  text-decoration: none;
}
</style>

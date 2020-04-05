<template>
  <!-- <div class="header bar bar-nav">
       <div class="pull-left"></div>
       <h1>{{title}}</h1>
     </div> -->
  <header class="bar bar-nav header">
    <div class="back icon icon-left pull-left" v-if="show"><span></span></div>
    <h1 class="title">{{ title }}</h1>
  </header>
</template>

<script>
export default {
  name: "myheader",
  data() {
    return {
      msg: "这是一个全局组件demo"
    };
  },
  props: ["title", "show"]
};
</script>
<style scroped lang="less">
@color: green;
.header {
  width: 100%;
  height: 45px;
  line-height: 45px;
  color: #fff !important;
  text-align: center;
  background: @color;
}
</style>

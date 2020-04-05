<template>
  <div class="hello body">
    <myHeader title="HelloWorld"></myHeader>
    <div class="body  content">
      <h1 @click="fu1">{{ msg }}</h1>
      <h2>Essential Links {{ $route.query.id }}</h2>
      <ul>
        <li>
          <a href="https://vuejs.org" target="_blank">
            Core Docs
          </a>
        </li>
        <li>
          <a href="https://forum.vuejs.org" target="_blank">
            Forum
          </a>
        </li>
        <li>
          <a href="https://chat.vuejs.org" target="_blank">
            Community Chat
          </a>
        </li>
        <li>
          <a href="https://twitter.com/vuejs" target="_blank">
            Twitter
          </a>
        </li>
        <br />
        <li>
          <a href="http://vuejs-templates.github.io/webpack/" target="_blank">
            Docs for This Template
          </a>
        </li>
      </ul>
      <h2>Ecosystem</h2>
      <ul>
        <li>
          <a href="http://router.vuejs.org/" target="_blank">
            vue-router
          </a>
        </li>
        <li>
          <a href="http://vuex.vuejs.org/" target="_blank">
            vuex
          </a>
        </li>
        <li>
          <a href="http://vue-loader.vuejs.org/" target="_blank">
            vue-loader
          </a>
        </li>
        <li>
          <a href="https://github.com/vuejs/awesome-vue" target="_blank">
            awesome-vue
          </a>
        </li>
      </ul>
    </div>
    <myfooter></myfooter>
  </div>
</template>

<script>
import Vue from "vue";
import myfooter from "@/components/myfooter";
Vue.component("myfooter", myfooter);
//export default foot
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    fu1: function() {
      console.log("我来料！！");
    }
  },
  mounted: function() {
    console.log("你被渲染了，小姐");
    console.log(this.$store.state.count);
    //console.log($('.hello'));
  },
  updated: function() {
    console.log("被更新了");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>

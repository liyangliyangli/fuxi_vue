<template>
  <div class="footer" id="footer">
    <div>
      <router-link to="/">hello</router-link>
    </div>
    <div>
      <router-link :to="{name:'Home',params:{id:123 }}">home</router-link>
    </div>
    <div>
      <router-link to="/Home/1234">demo1</router-link>
    </div>
    <div>
      <router-link :to="{name:'HelloWorld',query:{id:123 }}">demo2</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "myfooter",
  data() {
    return {
      title: ["1", "2", "3", "4"]
    };
  }
};
</script>
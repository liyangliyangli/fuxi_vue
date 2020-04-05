<template>
  <div class="hello body">
    <myHeader title="Home" :show="tshow"></myHeader>
    <div class="body content" @click="back()">
      我是home{{ $route.params.id }}
    </div>
    <myfooter></myfooter>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      msg: "my home,holley",
      tshow: false
    };
  },
  methods: {
    back: function() {
      // console.log(this.$router.go(-1));
      //this.$router.push("http://www.baidu.com");  ip+/http://www.baidu.com
      //this.$router.replace("http://www.baidu.com"); ip+/http://www.baidu.com
      //this.$router.go(-1);等价于window.history.go(-1);
      this.$router.go(-1);
    }
  },
  componemts: {},
  mounted: function() {
    console.log(this.$store.state.count);
    console.log(this.$store.getters.add);
    console.log(this.$store.getters.getTodoById(2));
    this.$store.commit("increment");
    console.log(this.$store.state.count);
    //dispatch
    console.log("action");
    this.$store.dispatch("increment");
    console.log(this.$store.state.count);
  }
};
</script>

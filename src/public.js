// exports.install = function(Vue, options) {
//   Vue.prototype.url1 = function() {
//     //全局函数1
//     return "http://www.baidu.com";
//   };
//   Vue.prototype.url2 = function() {
//     //全局函数2
//     return "http://localhosr:8080";
//   };
// };
export default {
  install(Vue) {
    Vue.prototype.url1 = function() {
      //全局函数1
      return "http://www.baidu.com";
    };
    Vue.prototype.url2 = function() {
      //全局函数2
      return "http://localhosr:8080";
    };
  }
};

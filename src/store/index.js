import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: 0,
    list: [
      { id: 1, name: "123" },
      { id: 2, name: "7" }
    ]
  },
  getters: {
    add: function(state) {
      return state.count + 1;
    },
    getTodoById: (state, getters) => id => {
      return state.list.find(todo => todo.id === id);
      // yield getters.todos.add;
      // return hello;
    }
  },
  mutations: {
    increment(state) {
      // 变更状态
      state.count++; //同步执行
    }
  },
  actions: {
    //Action 提交的是 mutation，而不是直接变更状态
    increment(context) {
      window.setTimeout(function() {
        context.commit("increment"); //可以异步执行
      }, 2000);

      //window.setTimeout()
    }
  }
});
export default store;

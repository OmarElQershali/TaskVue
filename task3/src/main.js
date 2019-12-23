import Vue from "vue";
import App from "./App.vue";
import "./component";
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
  // beforeCreate() {
  //   alert("beforecreate");
  // },
  // created() {
  //   alert("created");
  // },
  // beforeMount() {
  //   alert("beforemount");
  // },
  // mounted() {
  //   alert("mounted");
  // }
}).$mount("#app");

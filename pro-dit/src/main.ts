import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import HomePage from "./components/HomePage.vue";
import DetailPage from "./components/DetailPage.vue";
import RandomCat from "./components/RandomCat.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);

export const routes = [
  { path: "/", name: "home", component: HomePage },
  { path: "/details", name: "detail", component: DetailPage },
  { path: "/randomcat", name: "rando", component: RandomCat },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

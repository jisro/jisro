import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Soma from "../views/SOMA";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/SOMA",
    name: "Soma",
    component: Soma,
  },
];

const router = new VueRouter({
  routes,
});

export default router;

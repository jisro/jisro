import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Pom from "../views/Pom";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Pom",
    name: "Pom",
    component: Pom,
  },
];

const router = new VueRouter({
  routes,
});

export default router;

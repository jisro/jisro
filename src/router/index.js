import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Soma from "../views/SOMA";
import Pom from "../views/POM";
import Skatemap from "../views/Skatemap";

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
  {
    path: "/Pom",
    name: "Pom",
    component: Pom,
  },
  {
    path: "/Skatemap",
    name: "Skatemap",
    component: Skatemap,
  },
];



const router = new VueRouter({
  routes,
});

router.beforeEach(function (to, from, next) { 
  setTimeout(() => {
      window.scrollTo(0, 0);
  }, 100);
  next();
});

export default router;

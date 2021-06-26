import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Soma from "../views/SOMA";
import Pom from "../views/POM";
import Skatemap from "../views/Skatemap";
import Divers from "../views/Divers";

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
  {
    path: "/Divers",
    name: "Divers",
    component: Divers,
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

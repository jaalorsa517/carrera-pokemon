import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/juego",
    name: "Juego",
    component: () => import("../views/Juego.vue")
  },
  {
    path: "/podio",
    name: "Podio",
    component: () => import("../views/Podio.vue")
  }
];

const router = new VueRouter({
  mode: "hash",
  routes
});

export default router;

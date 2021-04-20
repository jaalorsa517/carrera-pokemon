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
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Juego.vue")
  }
];

const router = new VueRouter({
  mode: "hash",
  routes
});

export default router;

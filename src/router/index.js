import Vue from "vue";
import VueRouter from "vue-router";
import UserList from "../views/UserList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "userList",
    component: UserList,
  },
  {
    path: "/user/:userName",
    name: "user",
    component: () =>
      import("../views/UserView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

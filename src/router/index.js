import { createRouter, createWebHistory } from "vue-router";

const lazyLoad = (view) => () => import(`../pages/${view}.vue`);

const routes = [
  {
    path: "/",
    name: "Home",
    component: lazyLoad("Home"),
  },
  {
    path: "/team",
    name: "Team",
    component: lazyLoad("Team"),
  },
  {
    path: "/team/:id",
    name: "Employee",
    component: lazyLoad("Employee"),
  },
  {
    path: "/:pathMatch(.*)",
    name: "NotFound",
    component: lazyLoad("NotFound"),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;

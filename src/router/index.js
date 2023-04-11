const router = [
  {
    path: "/pageOne",
    name: "home",
    component: () => import("@/pages/pageOne.vue")
  },
  {
    path: "/pageTwo",
    name: "pageTwo",
    component: () => import("@/pages/pageTwo.vue")
  }
]

export default router
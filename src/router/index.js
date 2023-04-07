const router = [
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/pageOne.vue")
  }
]

export default router
const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/HomeView.vue") },
      { path: "music", component: () => import("src/pages/MusicView.vue") },
      { path: "podcast", component: () => import("src/pages/PodcastView.vue") },
      {
        path: "playlist/:id",
        component: () => import("src/pages/PlaylistView.vue"),
      },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("src/ErrorNotFound.vue"),
  },
];

export default routes;

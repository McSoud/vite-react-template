const ROUTES = {
  login: "/login",
  home: "/",
  dashboard: "/dashboard",
  posts: Object.assign("/posts", {
    single: Object.assign("/posts/:id", {
      id: (id: string) => `/posts/${id}`,
    }),
  }),
  notFound: "*",
} as const;

export default ROUTES;

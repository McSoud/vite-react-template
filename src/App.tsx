import { Main } from "@mcsoud/react-ui";
import "./App.css";
import Footer from "./components/template/Footer";
import Header from "./components/template/Header";
import PageNotFound from "./pages/NotFound";
import PageHome from "./pages/home/_index";
import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  RouterProvider,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

const rootRoute = createRootRoute({
  component: function () {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
        <TanStackRouterDevtools />
      </>
    );
  },
});

const home = createRoute({
  getParentRoute: function () {
    return rootRoute;
  },
  path: "/",
  component: PageHome,
});

const login = createRoute({
  getParentRoute: function () {
    return rootRoute;
  },
  path: "/login",
  component: function () {
    return (
      <Main id="login">
        <h1 hidden>Login</h1>
        <p>Login page</p>
      </Main>
    );
  },
});

const routeTree = rootRoute.addChildren([home, login]);

export const router = createRouter({
  routeTree,
  defaultNotFoundComponent: PageNotFound,
  defaultErrorComponent: (e) => {
    if (e.error.message === "Page not found") {
      return <PageNotFound />;
    }
  },
});
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}

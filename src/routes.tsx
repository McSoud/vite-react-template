import "./App.css";
import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
} from "@tanstack/react-router";
import { lazy } from "react";
import PageNotFound from "./pages/NotFound";
import LayoutPage from "./components/template/Layout";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
const PageHome = lazy(() => import("./pages/home/_index"));
const PageLogin = lazy(() => import("./pages/auth/login/_index"));

const sidebarLayout = createRoute({
  getParentRoute: function () {
    return rootRoute;
  },
  id: "sidebar-layout",
  component: LayoutPage,
});

const home = createRoute({
  getParentRoute: function () {
    return sidebarLayout;
  },
  path: "/",
  component: PageHome,
});

const login = createRoute({
  getParentRoute: function () {
    return rootRoute;
  },
  path: "/login",
  component: PageLogin,
});

const rootRoute = createRootRoute({
  component: function () {
    return (
      <>
        <Outlet />
        <TanStackRouterDevtools />
      </>
    );
  },
});

const routeTree = rootRoute.addChildren([sidebarLayout, home, login]);

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

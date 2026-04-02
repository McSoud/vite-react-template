import { Outlet } from "@tanstack/react-router";
import Header from "./Header";
import Footer from "./Footer";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export default function LayoutPage() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <TanStackRouterDevtools />
    </>
  );
}

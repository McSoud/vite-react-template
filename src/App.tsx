import "./App.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import ROUTES from "./constants/utils/routes";
import RequiresAuthentication from "./components/utils/RequiresAuthentication";
import PageNotFound from "./pages/NotFound";
import Header from "./components/template/Header";
import Footer from "./components/template/Footer";
import PageHome from "./pages/home/_index";
import PageDashboard from "./pages/dashboard/_index";
import PagePostSingle from "./pages/posts/single/_index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Authentication */}
        <Route path={ROUTES.login} element={"Login"} />
        {/* Pages Layout */}
        <Route
          element={
            <>
              <Header />
              <Outlet />
              <Footer />
            </>
          }
        >
          {/* Unauthenticated */}
          <Route path={ROUTES.home} element={<PageHome />} />
          <Route path={ROUTES.posts.single} element={<PagePostSingle />} />
          {/* Requires Authentication */}
          <Route element={<RequiresAuthentication />}>
            <Route path={ROUTES.dashboard} element={<PageDashboard />} />
          </Route>
        </Route>
        <Route path={ROUTES.notFound} element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

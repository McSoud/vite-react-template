import "./App.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import RequiresAuthentication from "./components/utils/RequiresAuthentication";
import PageNotFound from "./pages/NotFound";
import Header from "./components/template/Header";
import Footer from "./components/template/Footer";
import PageHome from "./pages/home/_index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Authentication */}
        <Route path="login" element="{<PageLogin />}" />
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
          <Route path="/" element={<PageHome />} />
          {/* Requires Authentication */}
          <Route element={<RequiresAuthentication />}></Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

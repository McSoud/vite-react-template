import "./App.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import RequiresAuthentication from "./components/utils/RequiresAuthentication";
import PageNotFound from "./pages/NotFound";
import Header from "./components/template/Header";
import Footer from "./components/template/Footer";
import Main from "./components/template/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Authentication */}
        <Route path="401" element="{<Unauthorized />}" />
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
          <Route path="/" element={<Main id="home">Home</Main>} />
        </Route>
        {/* Requires Authentication */}
        <Route element={<RequiresAuthentication />}></Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

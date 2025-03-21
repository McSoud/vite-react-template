import Main from "@/components/template/Main";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <Main
      id="page-not-found"
      className="min-h-screen min-w-screen content-center bg-black text-white"
    >
      <section id="not-found-section" className="container text-center">
        <h1 className="mb-4 text-6xl">404</h1>
        <h2 className="mb-4 text-4xl">This page is not available.</h2>
        <p>
          Click&nbsp;
          <Link className="hover-pop" to="/">
            Here
          </Link>
          &nbsp;to be redirected to the homepage.
        </p>
      </section>
    </Main>
  );
}

import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <main
      id="page-not-found"
      className="bg-green-primary grid min-h-screen min-w-screen place-items-center bg-[url(/assets/images/blobs/blob-giant-white.webp)] bg-right bg-no-repeat text-white"
    >
      <section className="container text-center" id="not-found-section">
        <h1 className="mb-4 text-6xl">404</h1>
        <h2 className="mb-4 text-4xl">This page is not available.</h2>
        <p>
          Click&nbsp;
          <Link className="text-yellow-primary hover-pop" to="/">
            Here
          </Link>
          &nbsp;to be redirected to the homepage.
        </p>
      </section>
    </main>
  );
}

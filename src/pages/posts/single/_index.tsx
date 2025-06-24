import { Main } from "@mcsoud/react-ui";
import ROUTES from "@/constants/utils/routes";
import { Link, useParams } from "react-router-dom";

export default function PagePostSingle() {
  const { id } = useParams();
  return (
    <Main id="single-post">
      <h1 hidden>Single Post</h1>
      <p>ID: {id}</p>
      <Link to={ROUTES.posts.single.id((Math.random() * 100).toFixed(0))}>
        Go Random
      </Link>
    </Main>
  );
}

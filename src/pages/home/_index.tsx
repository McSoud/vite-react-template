import { Main } from "@mcsoud/react-ui";
import { LaravelObject } from "@mcsoud/types";

export interface FAQ extends LaravelObject {
  question: string;
  answer: string;
}

export default function PageHome() {
  return (
    <Main id="home">
      <h1 hidden>Home</h1>
      <section id="home-faqs" className="container"></section>
    </Main>
  );
}

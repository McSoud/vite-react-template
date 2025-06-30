import { Main, Modal, toggleModal } from "@mcsoud/react-ui";
import useQueryFaqs from "@/hooks/queries/faqs";
import { useLaravelQuery } from "@mcsoud/react-ui";
import { LaravelObject } from "@mcsoud/types";

export interface FAQ extends LaravelObject {
  question: string;
  answer: string;
}

export default function PageHome() {
  const faqs = useQueryFaqs();
  const Display = useLaravelQuery({
    query: faqs,
  });
  return (
    <Main id="home">
      <h1 hidden>Home</h1>
      <section id="home-faqs" className="container">
        <Display success={(data) => data[0].question} />
        <button type="button" onClick={() => toggleModal("test")}>
          Button
        </button>
        <Modal id="test">Testings</Modal>
      </section>
    </Main>
  );
}

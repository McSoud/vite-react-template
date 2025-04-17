import Main from "@/components/template/Main";
import Modal from "@/components/template/Modal";
import { toggleModal } from "@/utils/functions";

export default function PageHome() {
  return (
    <Main id="home">
      <h1 hidden>Home</h1>
      <section
        id="home-section"
        className="my-section-margin container min-h-1000"
      >
        <button type="button" onClick={() => toggleModal("example")}>
          test
        </button>
      </section>
      <Modal id="example">Testing</Modal>
    </Main>
  );
}

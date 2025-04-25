import ButtonPrimary from "@/components/interactive/Button";
import Main from "@/components/template/Main";
import { LaravelObject } from "@/types/utils/laravel";
export interface FAQ extends LaravelObject {
  questions: string;
  answer: string;
}

export default function PageHome() {
  return (
    <Main id="home">
      <h1 hidden>Home</h1>
      <section id="home-section" className="my-section-margin container">
        <ButtonPrimary title="button">Button</ButtonPrimary>
      </section>
    </Main>
  );
}

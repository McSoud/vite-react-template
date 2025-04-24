import Main from "@/components/template/Main";
import useLaravelQuery from "@/components/utils/Laravel";
import useQueryFaqs from "@/hooks/queries/faqs";
import { LaravelObject } from "@/types/utils/laravel";

export interface FAQ extends LaravelObject {
  questions: string;
  answer: string;
}

export default function PageHome() {
  const query = useQueryFaqs();
  const Display = useLaravelQuery({ query });
  return (
    <Main id="home">
      <h1 hidden>Home</h1>
      <section id="home-section" className="my-section-margin container">
        <Display
          success={function (data) {
            return <>{data[0].answer}</>;
          }}
          error={function (err) {
            return <>{err.code}</>;
          }}
        />
      </section>
    </Main>
  );
}

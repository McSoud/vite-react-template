import ButtonPrimary from "@/components/interactive/Button";
import Main from "@/components/template/Main";
import { LaravelObject, useLaravelQuery } from "@mcsoud/laravel";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export interface FAQ extends LaravelObject {
  question: string;
  answer: string;
}

export default function PageHome() {
  const Display = useLaravelQuery<FAQ[]>({
    query: useQuery({
      queryKey: ["faq"],
      queryFn: async () => (await axios.get("/faqs")).data,
    }),
  });
  return (
    <Main id="home">
      <h1 hidden>Home</h1>
      <section id="home-section" className="my-section-margin container">
        <ButtonPrimary title="button">Button</ButtonPrimary>
        <Display success={(data) => <p>{data[0].question}</p>} />
      </section>
    </Main>
  );
}

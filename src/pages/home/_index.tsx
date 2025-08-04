import { Main, Modal } from "@mcsoud/react-ui";
import useQueryFaqs from "@/hooks/queries/faqs";
import { useLaravelQuery } from "@mcsoud/react-ui";
import { LaravelObject, LaravelResponse } from "@mcsoud/types";
import { useQueryClient } from "@tanstack/react-query";
import QUERY_KEYS from "@/constants/utils/queryKeys";

export interface FAQ extends LaravelObject {
  question: string;
  answer: string;
}

export default function PageHome() {
  const faqs = useQueryFaqs();
  const Display = useLaravelQuery({
    query: faqs,
  });
  const { data } = faqs;
  const queryClient = useQueryClient();
  function change() {
    queryClient.setQueryData(QUERY_KEYS.faqs, {
      success: true,
      data: [{ question: "test" }],
    });
  }
  const res = queryClient.getQueryData<LaravelResponse<FAQ[]>>(QUERY_KEYS.faqs);
  const test = res?.success && res.data[0].question;
  return (
    <Main id="home">
      <h1 hidden>Home</h1>
      <section id="home-faqs" className="container">
        <Display success={(data) => data[0].question} />
        <button type="button" onClick={change} className="block">
          {data && data.success && data.data[0].question}
        </button>
        <p>{test}</p>
        <Modal id="example">Testings</Modal>
      </section>
    </Main>
  );
}

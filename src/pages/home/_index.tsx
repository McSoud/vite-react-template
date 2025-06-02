import Loading from "@/components/common/Loading";
import Main from "@/components/template/Main";
import useQueryFaqs from "@/hooks/queries/faqs";
import { LaravelObject, useLaravelQuery } from "@mcsoud/laravel";
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
      <div className="grid h-120 grid-cols-2">
        <Display
          loading={<Loading className="bg-red-500" />}
          success={(data) => (
            <p className="animate-fade-in content-center text-center">
              {data[0].question}
            </p>
          )}
        />
      </div>
    </Main>
  );
}

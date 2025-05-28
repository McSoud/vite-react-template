import Loading from "@/components/common/Loading";
import ButtonPrimary from "@/components/interactive/Button";
import Main from "@/components/template/Main";
import { useUser } from "@/hooks/queries/auth";
import { LaravelObject } from "@mcsoud/laravel";
import { useQueryClient } from "@tanstack/react-query";
export interface FAQ extends LaravelObject {
  question: string;
  answer: string;
}

export default function PageHome() {
  const { data, isLoading } = useUser();
  const queryClient = useQueryClient();
  return (
    <Main id="home">
      <h1 hidden>Home</h1>
      <Loading finished={!isLoading} />
      <section id="home-section" className="my-section-margin container">
        <ButtonPrimary
          title="button"
          className="hover-pop"
          onClick={() => queryClient.setQueryData(["user"], { id: "null" })}
        >
          Button
        </ButtonPrimary>
        <p> {data ? data.id : "Please login"}</p>
      </section>
    </Main>
  );
}

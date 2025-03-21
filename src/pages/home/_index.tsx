import CustomInput from "@/components/inputs/Input";
import CustomSelect from "@/components/inputs/Select";
import Main from "@/components/template/Main";
import useLaravelQuery from "@/components/utils/Laravel";
import { TLaravelObject } from "@/types/utils/laravel";
import del from "@/constants/utils/queryKeys";
import { useQueryClient } from "@tanstack/react-query";
import ButtonPrimary from "@/components/interactive/Button";

export default function PageHome() {
  const { Display } = useLaravelQuery<
    {
      team: ({
        full_name: string;
        image: string;
        job_title: string;
        order: number;
        small_description: string;
      } & TLaravelObject)[];
    },
    unknown
  >({
    queryKey: del.team,
    endPoint: "/team_members",
  });
  const queryClient = useQueryClient();

  return (
    <Main id="home">
      <section id="home-section" className="my-section-margin container">
        <ButtonPrimary
          className="hover-pop"
          onClick={() => queryClient.invalidateQueries({ queryKey: del.team })}
        >
          About
        </ButtonPrimary>
        <CustomInput />
        <CustomSelect
          isMulti
          options={[
            {
              label: "Option 1",
              value: "option-1",
            },
            {
              label: "Option 2",
              value: "option-2",
            },
          ]}
        />
        <Display success={(data) => <h1>{data.team[0].full_name}</h1>} />
      </section>
    </Main>
  );
}

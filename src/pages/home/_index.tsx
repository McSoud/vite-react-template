import Checkbox from "@/components/inputs/Checkbox";
import Input from "@/components/inputs/Input";
import Select from "@/components/inputs/Select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(3),
  select: z.object({ id: z.string(), label: z.string() }),
});
type test = z.infer<typeof schema>;

export default function PageHome() {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<test>({
    resolver: zodResolver(schema),
  });
  function onSubmit(data: test) {
    console.log(data);
  }
  return (
    <main id="home-content">
      <h1 hidden>Home</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="my-section-margin container"
      >
        <Input
          {...register("name")}
          name="name"
          title="Name"
          type="password"
          error={errors.name?.message}
        />
        <Checkbox
          choices={[
            {
              name: "test",
              value: "test",
              label: "Test",
              children: <p>Test</p>,
            },
            {
              name: "test2",
              value: "test2",
              label: "Test2",
            },
          ]}
        />
        <Select
          name="select"
          value={getValues("select") ?? { id: 1, label: "1232" }}
          onChange={(e) =>
            setValue("select", e as { id: string; label: string })
          }
          options={[
            {
              id: 1,
              label: "1232",
            },
            {
              id: 2,
              label: "2342",
            },
          ]}
          error={errors.select?.message}
        />
        <button type="submit" title="Submit">
          Submit
        </button>
      </form>
    </main>
  );
}

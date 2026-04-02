import Checkbox from "@/components/inputs/Checkbox";
import Select from "@/components/inputs/Select";
import SelectFilter from "@/components/inputs/SelectFilter";
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
        onSubmit={(e) => {
          void handleSubmit(onSubmit)(e);
        }}
        className="my-section-margin container"
      >
        <Select name="select" title="Select">
          <optgroup label="Group 1">
            <option value="1">1</option>
            <option value="2">2</option>
          </optgroup>
        </Select>
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
        <SelectFilter
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

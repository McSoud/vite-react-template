import CustomInput from "@/components/inputs/Input";
import CustomSelect from "@/components/inputs/Select";
import ButtonPrimary from "@/components/interactive/Button";
import Main from "@/components/template/Main";

export default function PageHome() {
  return (
    <Main id="home">
      <section id="home-section" className="my-section-margin container">
        <CustomInput
          title="Name"
          label
          type="text"
          name="name"
          autoComplete="email"
          required
        />
        <CustomSelect
          required
          name="Address"
          label="Test"
          options={[
            { value: "1", label: "Option 1" },
            { value: "2", label: "Option 2" },
          ]}
        />
        <ButtonPrimary className="hover-pop" type="button" title="Submit" />
      </section>
    </Main>
  );
}

import Main from "@/components/template/Main";
import { useUser } from "@/hooks/auth";

export default function PageDashboard() {
  useUser(true);
  return (
    <Main id="dashboard">
      <h1 hidden>Dashboard</h1>
    </Main>
  );
}

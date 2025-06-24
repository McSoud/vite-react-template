import {Main} from "@mcsoud/react-ui";
import { useUser } from "@/hooks/auth";

export default function PageDashboard() {
  useUser(true);
  return (
    <Main id="dashboard">
      <h1 hidden>Dashboard</h1>
    </Main>
  );
}

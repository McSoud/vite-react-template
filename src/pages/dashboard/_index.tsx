import { useUser } from "@/hooks/auth";

export default function PageDashboard() {
  useUser(true);
  return (
    <main id="dashboard-content">
      <h1 hidden>Dashboard</h1>
    </main>
  );
}

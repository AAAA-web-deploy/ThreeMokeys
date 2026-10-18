import Dashboard from "./dashboard-client";

export const metadata = {
  title: "Three Wise Monkeys visitor dashboard",
  robots: { index: false, follow: false },
};

export default function DashboardPage() {
  return <Dashboard />;
}

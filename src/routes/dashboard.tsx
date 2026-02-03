import { createFileRoute } from "@tanstack/solid-router";

export const Route = createFileRoute("/dashboard")({
	component: Dashboard,
});

function Dashboard() {
  return <div class="flex flex-1 justify-center items-center text-2xl font-bold">Dashboard</div>;
}

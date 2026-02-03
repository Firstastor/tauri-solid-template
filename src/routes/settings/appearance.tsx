import { createFileRoute } from "@tanstack/solid-router";

export const Route = createFileRoute("/settings/appearance")({
	component: AppearanceSettings,
});

function AppearanceSettings() {
  return <div class="flex flex-1 justify-center items-center text-2xl font-bold">Appearance</div>;
}

import { createFileRoute } from "@tanstack/solid-router";

export const Route = createFileRoute("/explore")({
	component: Explore,
});

function Explore() {
  return <div class="flex flex-1 justify-center items-center text-2xl font-bold">Explore</div>;
}

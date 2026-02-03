import { createFileRoute } from "@tanstack/solid-router";

export const Route = createFileRoute("/about")({
	component: About,
});

function About() {
  return <div class="flex flex-1 justify-center items-center text-2xl font-bold">About</div>;
}

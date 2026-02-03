import { createFileRoute } from "@tanstack/solid-router";

export const Route = createFileRoute("/home")({
	component: Home,
});

function Home() {
	return <div class="flex flex-1 justify-center items-center text-2xl font-bold">Home</div>;
}

import { createRootRoute, Outlet } from "@tanstack/solid-router";
import TitleBar from "@/components/layouts/TitleBar";

export const Route = createRootRoute({
	component: () => (
		<>
			<div class="flex flex-col">
				<TitleBar />
				<Outlet />
			</div>
		</>
	),
});

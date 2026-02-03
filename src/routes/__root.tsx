import { createRootRoute, Outlet } from "@tanstack/solid-router";
import Sidebar from "@/components/layouts/Sidebar";
import Titlebar from "@/components/layouts/Titlebar";

export const Route = createRootRoute({
	component: () => (
		<>
			<div class="flex flex-col w-screen h-screen">
				<Titlebar />
				<div class="flex flex-1">
					<Sidebar />
					<Outlet />
				</div>
			</div>
		</>
	),
});

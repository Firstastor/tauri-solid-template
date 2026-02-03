import { createFileRoute, Link, Outlet } from "@tanstack/solid-router";
import { Smartphone, User } from "lucide-solid";
import { For } from "solid-js";

export const Route = createFileRoute("/settings")({
	component: SettingsLayout,
});

const settingsLinks = [
	{ title: "Account", href: "/settings/account", icon: User },
	{ title: "Appearance", href: "/settings/appearance", icon: Smartphone },
];

function SettingsLayout() {
	return (
		<div class="flex flex-col flex-1 h-full animate-fade-in overflow-hidden">
			<div class="flex flex-1 overflow-hidden">
				<aside class="w-64 bg-sidebar/40 border-r border-border/10 p-4 space-y-1.5 overflow-y-auto no-scrollbar">
					<For each={settingsLinks}>
						{(link) => (
							<Link
								to={link.href}
								activeProps={{
									class:
										"bg-sidebar-primary text-sidebar-primary-foreground shadow-sm",
								}}
								inactiveProps={{
									class:
										"text-muted-foreground hover:bg-sidebar-accent/50 hover:text-foreground",
								}}
								class="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
							>
								<link.icon size={18} />
								{link.title}
							</Link>
						)}
					</For>
				</aside>

				<main class="flex flex-1 overflow-y-auto relative bg-surface/5">
					<Outlet />
				</main>
			</div>
		</div>
	);
}

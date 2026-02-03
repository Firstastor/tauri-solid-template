import { Link } from "@tanstack/solid-router";
import { House, Info, LayoutGrid, Search, Settings } from "lucide-solid";
import { For } from "solid-js";

const navItems = [
	{ href: "/home", label: "Home", icon: House },
	{ href: "/dashboard", label: "Dashboard", icon: LayoutGrid },
	{ href: "/explore", label: "Explore", icon: Search },
	{ href: "/about", label: "About", icon: Info },
];

const Sidebar = () => {
	return (
		<aside class="group/sidebar flex flex-col w-20 hover:w-60 h-full bg-sidebar/40 backdrop-blur-xl border-r border-sidebar-border select-none animate-fade-in overflow-hidden transition-all duration-500 ease-in-out z-10">
			<nav class="flex-1 px-3 py-6 overflow-y-auto no-scrollbar">
				<ul class="space-y-3">
					<For each={navItems}>
						{(item, index) => (
							<li
								class="animate-fade-in-left"
								style={{ "animation-delay": `${index() * 70}ms` }}
							>
								<Link
									to={item.href}
									activeProps={{
										class:
											"bg-sidebar-primary text-sidebar-primary-foreground shadow-lg shadow-sidebar-primary/20 active-link",
									}}
									inactiveProps={{
										class:
											"text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground",
									}}
									class="flex items-center gap-4 px-3.5 py-3 rounded-2xl text-sm font-medium transition-all duration-300 group relative overflow-hidden"
								>
									<div class="min-w-6 flex justify-center items-center">
										<item.icon
											size={22}
											class="transition-all duration-300 group-hover:scale-110 group-active:scale-90"
										/>
									</div>
									<span class="font-semibold whitespace-nowrap opacity-0 group-hover/sidebar:opacity-100 transition-all duration-300 group-hover/sidebar:translate-x-0 -translate-x-4">
										{item.label}
									</span>

									<div class="absolute left-0 w-1.5 h-6 bg-sidebar-primary-foreground rounded-r-full scale-y-0 group-[.active-link]:scale-y-100 transition-transform duration-300" />
								</Link>
							</li>
						)}
					</For>
				</ul>
			</nav>

			<div class="p-3 mt-auto border-t border-sidebar-border">
				<Link
					to="/settings"
					activeProps={{
						class:
							"bg-sidebar-primary text-sidebar-primary-foreground active-link",
					}}
					inactiveProps={{
						class:
							"text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground",
					}}
					class="flex items-center gap-4 px-3.5 py-3 rounded-2xl text-sm font-medium transition-all duration-300 group relative overflow-hidden"
				>
					<div class="min-w-6 flex justify-center items-center">
						<Settings
							size={20}
							class="transition-transform duration-1000 group-hover:rotate-180"
						/>
					</div>
					<span class="font-semibold whitespace-nowrap opacity-0 group-hover/sidebar:opacity-100 transition-all duration-300 group-hover/sidebar:translate-x-0 -translate-x-4">
						Settings
					</span>
				</Link>
			</div>
		</aside>
	);
};

export default Sidebar;

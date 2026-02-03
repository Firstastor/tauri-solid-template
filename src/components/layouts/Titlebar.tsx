import { Effect, EffectState, getCurrentWindow } from "@tauri-apps/api/window";
import { platform } from "@tauri-apps/plugin-os";
import { Minus, Scan, Square, X } from "lucide-solid";
import { createSignal, onCleanup, onMount } from "solid-js";

const Titlebar = () => {
	const currentPlatform = platform();
	const window = getCurrentWindow();

	const minimizeWindow = async (): Promise<void> => {
		await window.minimize();
	};

	const toggleMaximizeWindow = async (): Promise<void> => {
		await window.toggleMaximize();
	};

	const closeWindow = async (): Promise<void> => {
		await window.close();
	};

	const [isMaximized, setIsMaximized] = createSignal(false);
	const unlistenList: (() => void)[] = [];

	const applySystemTheme = (theme: string | null) => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	};

	onMount(async () => {
		// Set window effects based on platform
		if (currentPlatform === "windows") {
			const effects: Effect[] = [Effect.Acrylic];
			await window.setEffects({
				effects,
			});
		} else if (currentPlatform === "macos") {
			const effects: Effect[] = [
				Effect.Popover,
				Effect.Tooltip,
				Effect.WindowBackground,
			];
			await window.setEffects({
				effects,
				state: EffectState.FollowsWindowActiveState,
			});
		}

		applySystemTheme(await window.theme());
		setIsMaximized(await window.isMaximized());

		unlistenList.push(
			await window.onThemeChanged(({ payload: theme }) => {
				applySystemTheme(theme);
			}),
		);

		unlistenList.push(
			await window.onResized(async () => {
				setIsMaximized(await window.isMaximized());
			}),
		);
	});

	onCleanup(() => {
		for (const unlisten of unlistenList) {
			unlisten();
		}
	});

	return (
		<div
			class="flex justify-between items-center w-full h-10 border-b border-border/10 bg-surface/10 backdrop-blur-md pl-4 transition-colors"
			data-tauri-drag-region
		>
			<div class="flex items-center gap-2 pointer-events-none">
				<div class="w-3 h-3 rounded-full bg-primary/20 flex items-center justify-center">
					<div class="w-1 h-1 rounded-full bg-primary animate-pulse" />
				</div>
				<h1 class="font-bold uppercase select-none">Tauri Solid Template</h1>
			</div>

			<div class="flex items-center h-10 m-0 p-0 gap-0.5">
				<button
					type="button"
					class="w-10 h-10 flex items-center justify-center hover:bg-primary/10 rounded-lg transition-all duration-300 group"
					onClick={minimizeWindow}
				>
					<Minus size={18} class="group-hover:scale-110" />
				</button>
				<button
					type="button"
					class="w-10 h-10 flex items-center justify-center hover:bg-primary/10 rounded-lg transition-all duration-300 group"
					onClick={toggleMaximizeWindow}
				>
					{isMaximized() ? (
						<Scan size={18} class="group-hover:scale-110" />
					) : (
						<Square size={16} class="group-hover:scale-110" />
					)}
				</button>
				<button
					type="button"
					class="w-10 h-10 flex items-center justify-center hover:bg-destructive/20 hover:text-destructive rounded-lg transition-all duration-300 group"
					onClick={closeWindow}
				>
					<X
						size={20}
						class="group-hover:rotate-90 transition-transform duration-300"
					/>
				</button>
			</div>
		</div>
	);
};

export default Titlebar;

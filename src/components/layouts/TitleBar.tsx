import { Effect, getCurrentWindow } from "@tauri-apps/api/window";
import { Minus, Scan, Square, X } from "lucide-solid";
import { createSignal, onCleanup, onMount } from "solid-js";

function TitleBar() {
	const window = getCurrentWindow();
	window.setEffects({
		effects: [Effect.Acrylic],
	});

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
	let unlisten: (() => void) | undefined;

	onMount(async () => {
		unlisten = await window.onResized(async () => {
			setIsMaximized(await window.isMaximized());
		});
	});

	onCleanup(() => {
		unlisten?.();
	});

	return (
		<div
			role="none"
			onDblClick={toggleMaximizeWindow}
			class="flex justify-between items-center shadow-xs w-full h-8"
			data-tauri-drag-region
		>
			<h1 class="m-2 font-semibold select-none">Template</h1>
			<div></div>
			<div class="flex h-8 m-0 p-0 gap-0">
				<button
					type="button"
					class="w-10 h-8 flex items-center justify-center hover:bg-accent/50  hover:text-accent-foreground transition-colors"
					onClick={minimizeWindow}
				>
					<Minus size={16} />
				</button>
				<button
					type="button"
					class="w-10 h-8 flex items-center justify-center hover:bg-accent/50 hover:text-accent-foreground transition-colors"
					onClick={toggleMaximizeWindow}
				>
					{isMaximized() ? (
						<div class="relative w-4 h-4 ">
							<Scan size={16} />
						</div>
					) : (
						<Square size={14} />
					)}
				</button>
				<button
					type="button"
					class="w-10 h-8 flex items-center justify-center hover:bg-destructive/75  hover:text-accent-foreground transition-colors"
					onClick={closeWindow}
				>
					<X size={16} />
				</button>
			</div>
		</div>
	);
}

export default TitleBar;

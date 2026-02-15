import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

const host = process.env.TAURI_DEV_HOST;

export default defineConfig({
	build: {
		cssMinify: "lightningcss",
		target: "esnext",
	},

	css: {
		transformer: "lightningcss",
	},

	plugins: [
		tailwindcss(),
		tanstackRouter({
			autoCodeSplitting: true,
			target: "solid",
		}),
		solidPlugin(),
	],

	resolve: {
		alias: {
			"@": import.meta.dirname + "/src",
		},
	},

	server: {
		hmr: host
			? {
					host,
					port: 1421,
					protocol: "ws",
				}
			: undefined,
		host: host || false,
		port: 5173,
		strictPort: true,
		watch: {
			ignored: ["**/src-tauri/**"],
		},
	},
});

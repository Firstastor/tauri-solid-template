import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

const host = process.env.TAURI_DEV_HOST;

export default defineConfig(({
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
			target: "solid",
			autoCodeSplitting: true,
		}),
		solid(),
	],

	resolve: {
		alias: {
			"@": import.meta.dirname + "/src",
		},
	},

	server: {
		port: 5173,
		strictPort: true,
		host: host || false,
		hmr: host
			? {
					protocol: "ws",
					host,
					port: 1421,
				}
			: undefined,
		watch: {
			ignored: ["**/src-tauri/**"],
		},
	},
}));

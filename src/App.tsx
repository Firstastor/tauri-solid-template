import { createRouter, RouterProvider } from "@tanstack/solid-router";
import { render } from "solid-js/web";
import "./App.css";
import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree });
declare module "@tanstack/solid-router" {
	interface Register {
		router: typeof router;
	}
}

render(
	() => <RouterProvider router={router} />,
	document.getElementById("root") as HTMLElement,
);

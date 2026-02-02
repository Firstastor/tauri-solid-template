# Tauri + Solid Template

Biome + Bun + Rust + Solid + Tanstack + Tauri + Tailwind + TS + Vite

## Introduction

We aim to use the least tools to achieve a modern fast application.

### Biome
Biome is a modern linter and formatter for JS, JSON, TS

### Bun
Bun is a modern package manager and TS runtime.

### Rust
Rust is a zero-cost abstractions and memory-safe programming language.

### Solid
Solid is a fine-grained reactivity and declarative TypeScript-First library.

### Tanstack
Tanstack is a set of libraries for building powerful web applications.

### Tauri
Tauri is a framework for building memory-save and lightweight binaries.

### Tailwind
Tailwind is an atomic utility-first CSS framework.

### TypeScript
TypeScript is a statically typed superset of JavaScript.

### Vite
Vite is a modern frontend dev and build tool.

## Installation

1. Install [Bun](https://bun.sh/).
2. Clone this repository:
   ```bash
   git clone https://github.com/Firstastor/tauri-solid-template.git
   cd tauri-solid-template
   bun install
    ```
3. Start:
   ```bash
   bun tauri dev
   ```
Minimalist but Max-Fast!
## Template Structure
- `src/` - Solid (TypeScript) source code.
- `src-tauri/` - Tauri (Rust) source code.

### Tanstack Route
- `src/routeTree.gen.ts` - Auto-generated route tree (Don't edit **!**).
- `src/routes/__root.tsx` - The root layout component.
- `src/routes/index.tsx` - The index page component.

If you want to add a route, for example named `/about`, create a file `src/routes/about.tsx`:
```TypeScript
import { createFileRoute } from "@tanstack/solid-router";

// Must name the export "Route" and the value in createFileRoute is the path.
export const Route = createFileRoute("/about")({
	component: About,
});

function About() {
	return <div></div>;
}
```

### UI/UX
`App.css` - Global styles using Tailwind CSS, designed for shadcn/ui compatibility.

`src/components/layouts/TitleBar.tsx` - Title bar component also setting Acrylic effect for Windows.
> #### Pay attention  
> if you want to use Acrylic effect, you must ensure the background color has a degree of opacity.  
> e.g., use `bg-background/30` instead of `bg-background`.



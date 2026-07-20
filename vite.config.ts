import adapter from "@sveltejs/adapter-vercel";
import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import { assertSupportedNodeVersion } from "./src/lib/build-runtime";

// adapter-vercel creates route symlinks that require Windows Developer Mode.
// Local Windows builds still compile and prerender fully; CI and Vercel run the adapter.
assertSupportedNodeVersion(process.versions.node);

const skipAdapter =
  process.platform === "win32" && !process.env.CI && !process.env.VERCEL;

const adapterForEnvironment = skipAdapter ? undefined : adapter();

export default defineConfig({
  plugins: [
    tailwindcss(),
    sveltekit({
      compilerOptions: {
        // Force runes mode for the project, except for libraries. Can be removed in svelte 6.
        runes: ({ filename }) =>
          filename.split(/[/\\]/).includes("node_modules") ? undefined : true,
      },
      adapter: adapterForEnvironment,
    }),
  ],
});

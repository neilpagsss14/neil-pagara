import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";

const LOCAL_FALLBACK_BASE = "/neil-pagara/";

function getGithubPagesBase() {
  const repository = process.env.GITHUB_REPOSITORY;
  if (!repository) return null;

  const [owner, repo] = repository.split("/");
  if (!owner || !repo) return null;

  const isUserOrOrgPagesRepo =
    repo.toLowerCase() === `${owner.toLowerCase()}.github.io`;
  return isUserOrOrgPagesRepo ? "/" : `/${repo}/`;
}

// https://vite.dev/config/
export default defineConfig(() => {
  const base = getGithubPagesBase() ?? LOCAL_FALLBACK_BASE;

  return {
    plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
    base,
  };
});

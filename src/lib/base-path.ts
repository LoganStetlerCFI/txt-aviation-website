// Set to the repo name only when deploying to a GitHub Pages project
// subpath (via NEXT_PUBLIC_BASE_PATH in CI). Empty for local dev and for
// the eventual custom-domain deploy, where the site serves from the root.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

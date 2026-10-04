import { readFile, writeFile } from "node:fs/promises";
import { createServer } from "vite";
import { createElement } from "react";
import { renderToString } from "react-dom/server";

// Static HTML lets search engines and no-JS clients read the full portfolio.
// React hydrates it in production; Vite still uses normal client rendering in dev.
const server = await createServer({
  server: { middlewareMode: true },
  appType: "custom",
  mode: "production",
});
try {
  const { App } = await server.ssrLoadModule("/src/App.jsx");
  const markup = renderToString(createElement(App));
  const path = new URL("../dist/index.html", import.meta.url);
  const html = await readFile(path, "utf8");
  if (!html.includes('<div id="root"></div>'))
    throw new Error("Prerender root marker missing");
  await writeFile(
    path,
    html.replace('<div id="root"></div>', `<div id="root">${markup}</div>`),
  );
  console.log("Prerendered complete portfolio content into dist/index.html");
} finally {
  await server.close();
}

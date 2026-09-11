// Idiomas del sitio. Fuente única compartida por el Worker y el build.
//
// Duplica deliberadamente los valores de src/lib/locale.ts: el Worker se
// empaqueta con esbuild sin el resolvedor de TypeScript de Astro, así que
// no puede importar el .ts. Son cuatro literales; el test
// worker/index.test.ts verifica que ambas listas coinciden.
export const SUPPORTED_LOCALES = ["es", "en"];
export const DEFAULT_LOCALE = "es";

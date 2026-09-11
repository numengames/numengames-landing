import { isLegacyPath } from "./legacy-routes.js";
import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from "./locales.js";

/**
 * Elige idioma a partir de Accept-Language.
 *
 * Devuelve el idioma soportado de mayor q-value. Si la cabecera falta,
 * está vacía o no cita ninguno de los soportados, cae a DEFAULT_LOCALE.
 * Deliberadamente tolerante: una cabecera mal formada nunca debe dejar
 * a nadie sin home.
 */
export function pickLocale(acceptLanguage) {
	if (!acceptLanguage) return DEFAULT_LOCALE;

	const ranked = acceptLanguage
		.split(",")
		.map((part) => {
			const [tag, ...params] = part.trim().split(";");
			const qParam = params.find((p) => p.trim().startsWith("q="));
			const q = qParam ? Number.parseFloat(qParam.trim().slice(2)) : 1;
			return {
				// "es-ES" -> "es"; el subtag de región no nos interesa.
				base: tag.trim().toLowerCase().split("-")[0],
				q: Number.isFinite(q) ? q : 0,
			};
		})
		// q=0 significa "explícitamente no quiero este idioma".
		.filter((entry) => entry.q > 0 && SUPPORTED_LOCALES.includes(entry.base))
		.sort((a, b) => b.q - a.q);

	return ranked.length > 0 ? ranked[0].base : DEFAULT_LOCALE;
}

export default {
	async fetch(request, env) {
		const url = new URL(request.url);

		if (url.hostname === "www.numen.games") {
			url.hostname = "numen.games";
			return Response.redirect(url.toString(), 301);
		}

		// La raíz no tiene contenido propio: el sitio vive bajo /es/ y /en/.
		// 302 (no 301) porque la elección depende del visitante — cachear
		// esto de forma permanente serviría el idioma equivocado al
		// siguiente. Vary avisa a las cachés intermedias por la misma razón.
		if (url.pathname === "/") {
			const locale = pickLocale(request.headers.get("Accept-Language"));
			return new Response(null, {
				status: 302,
				headers: {
					Location: new URL(`/${locale}/`, url).toString(),
					Vary: "Accept-Language",
					"Cache-Control": "no-store",
				},
			});
		}

		if (isLegacyPath(url.pathname)) {
			return Response.redirect(new URL("/", url).toString(), 301);
		}

		return env.ASSETS.fetch(request);
	},
};

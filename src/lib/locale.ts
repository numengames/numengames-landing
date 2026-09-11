export type SupportedLocale = "es" | "en";
export const DEFAULT_LOCALE: SupportedLocale = "es";
export const SUPPORTED_LOCALES: SupportedLocale[] = ["es", "en"];

export function getLocaleFromURL(pathname: string): SupportedLocale {
	const first = pathname.split("/")[1];
	return first === "en" ? "en" : "es";
}

/** Quita el prefijo de idioma; "/en/experiencias" -> "/experiencias" */
export function stripLocale(pathname: string): string {
	const parts = pathname.split("/");
	if (parts[1] === "es" || parts[1] === "en") {
		const rest = "/" + parts.slice(2).join("/");
		return rest === "/" ? "/" : rest.replace(/\/$/, "") || "/";
	}
	return pathname;
}

export function localizedPath(path: string, locale: SupportedLocale): string {
	const clean = path === "/" ? "" : path;
	return `/${locale}${clean}`;
}

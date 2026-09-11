// Explicit list of legacy routes from the pre-pivot metaverse/3D-worlds
// catalog (pricing, team, portfolio, numinia lore, manifesto, help center,
// services + subpages, and the old Terms page). Deprecated 2026-09-11 as
// part of the pivot to live-event gamification experiences (see plan
// "Numen Games | Plan profesional de web revisado").
//
// NOTE: "/es" and "/en" (the localized home) were on this list originally,
// when the only content behind them was the old metaverse messaging. They
// were removed once the rebuilt live-event home replaced them (see
// src/pages/[locale]/index.astro) — do not re-add them here once real
// content exists at a path; add/remove entries as pages are rebuilt.
//
// This is an explicit allow-list, not a catch-all on /es/ or /en/, so the
// rebuilt site can freely reuse those locale prefixes with new routes
// without this list getting in the way. Remove entries here once the
// corresponding path is reused/replaced by the new site.
const LEGACY_REDIRECT_PATHS = new Set([
	"/es/pricing",
	"/en/pricing",
	"/es/team",
	"/en/team",
	"/es/portfolio",
	"/en/portfolio",
	"/es/numinia",
	"/en/numinia",
	"/es/manifesto",
	"/en/manifesto",
	"/es/help-center",
	"/en/help-center",
	"/es/services",
	"/en/services",
	"/es/services/training",
	"/en/services/training",
	"/es/services/experience",
	"/en/services/experience",
	"/es/services/engage",
	"/en/services/engage",
	"/Term/terms",
]);

function isLegacyPath(pathname) {
	// Normalize by stripping a single trailing slash (but keep root "/").
	const normalized =
		pathname.length > 1 && pathname.endsWith("/")
			? pathname.slice(0, -1)
			: pathname;
	return LEGACY_REDIRECT_PATHS.has(normalized);
}

export default {
	async fetch(request, env) {
		const url = new URL(request.url);

		if (url.hostname === "www.numen.games") {
			url.hostname = "numen.games";
			return Response.redirect(url.toString(), 301);
		}

		if (isLegacyPath(url.pathname)) {
			return Response.redirect(new URL("/", url).toString(), 301);
		}

		return env.ASSETS.fetch(request);
	},
};

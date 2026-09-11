import { describe, expect, it, vi } from "vitest";
import worker from "./index.js";

const makeEnv = (assetsResponse = new Response("asset")) => ({
	ASSETS: { fetch: vi.fn(async () => assetsResponse) },
});

describe("worker fetch handler", () => {
	it("redirects www.numen.games to the apex domain with a 301", async () => {
		const env = makeEnv();
		const res = await worker.fetch(new Request("https://www.numen.games/"), env);

		expect(res.status).toBe(301);
		expect(res.headers.get("location")).toBe("https://numen.games/");
		expect(env.ASSETS.fetch).not.toHaveBeenCalled();
	});

	it("preserves path and query string on the www redirect", async () => {
		const env = makeEnv();
		const res = await worker.fetch(
			new Request("https://www.numen.games/es/contact?ref=x"),
			env,
		);

		expect(res.status).toBe(301);
		expect(res.headers.get("location")).toBe("https://numen.games/es/contact?ref=x");
	});

	it("serves static assets for the apex domain", async () => {
		const assetsResponse = new Response("hello");
		const env = makeEnv(assetsResponse);
		const request = new Request("https://numen.games/");
		const res = await worker.fetch(request, env);

		expect(res).toBe(assetsResponse);
		expect(env.ASSETS.fetch).toHaveBeenCalledWith(request);
	});

	it("serves static assets for any non-www hostname (workers.dev previews)", async () => {
		const env = makeEnv();
		await worker.fetch(new Request("https://numengames-web.example.workers.dev/"), env);

		expect(env.ASSETS.fetch).toHaveBeenCalledOnce();
	});

	describe("legacy catalog deprecation (2026-09-11)", () => {
		const legacyPaths = [
			"/es",
			"/es/",
			"/en",
			"/en/",
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
			"/Term/terms/",
		];

		it.each(legacyPaths)("redirects legacy path %s to the apex with a 301", async (path) => {
			const env = makeEnv();
			const res = await worker.fetch(new Request(`https://numen.games${path}`), env);

			expect(res.status).toBe(301);
			expect(res.headers.get("location")).toBe("https://numen.games/");
			expect(env.ASSETS.fetch).not.toHaveBeenCalled();
		});

		it("does not redirect unrelated paths that merely share a prefix", async () => {
			const env = makeEnv();
			await worker.fetch(new Request("https://numen.games/es/experiencias"), env);

			expect(env.ASSETS.fetch).toHaveBeenCalledOnce();
		});

		it("still serves the apex Coming Soon page itself", async () => {
			const env = makeEnv();
			await worker.fetch(new Request("https://numen.games/"), env);

			expect(env.ASSETS.fetch).toHaveBeenCalledOnce();
		});
	});
});

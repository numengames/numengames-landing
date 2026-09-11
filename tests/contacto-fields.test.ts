// SPDX-FileCopyrightText: 2026 Numen Games S.L.
// SPDX-License-Identifier: AGPL-3.0-only
//
// Las claves del formulario de contacto viajan como claves JSON a
// Web3Forms y de ahí a donde se conecte después (CRM, hoja de cálculo,
// automatización). Con `ñ` o acentos funcionan hoy, pero cualquier
// integración posterior obliga a una migración con datos ya dentro.
//
// Este test las fija en ASCII. Si alguien vuelve a poner
// name="organización_o_evento", falla aquí y no seis meses después
// conectando un CRM.
import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const FORM = "src/pages/[locale]/contacto/index.astro";

/** Extrae los name="..." de los campos del formulario. */
function formFieldNames(): string[] {
	const html = readFileSync(FORM, "utf8");
	return [...html.matchAll(/<(?:input|textarea|select)[^>]*\sname="([^"]+)"/g)].map(
		(m) => m[1],
	);
}

describe("claves del formulario de contacto", () => {
	it("encuentra los campos (si no, el test se ha quedado ciego)", () => {
		expect(formFieldNames().length).toBeGreaterThanOrEqual(9);
	});

	it("son todas ASCII: sin ñ ni acentos", () => {
		const noAscii = formFieldNames().filter((n) => /[^\x20-\x7E]/.test(n));
		expect(noAscii).toEqual([]);
	});

	it("son minúsculas con guión bajo, sin espacios", () => {
		const malformed = formFieldNames().filter((n) => !/^[a-z][a-z0-9_]*$/.test(n));
		expect(malformed).toEqual([]);
	});

	it("incluye los campos que Web3Forms necesita", () => {
		const names = formFieldNames();
		for (const required of ["access_key", "name", "email"]) {
			expect(names).toContain(required);
		}
	});
});

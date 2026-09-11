// SPDX-FileCopyrightText: 2026 Numen Games S.L.
// SPDX-License-Identifier: AGPL-3.0-only
import { describe, expect, it } from "vitest";
import {
	AA_NORMAL_TEXT,
	checkAll,
	contrastRatio,
	readTokens,
} from "./check-contrast.mjs";

describe("contraste de los tokens de color", () => {
	// Valores de referencia de la propia especificación: si estos se
	// desvían, el cálculo está mal, no la paleta.
	it("calcula los ratios de referencia de WCAG 2.1", () => {
		expect(contrastRatio("#ffffff", "#000000")).toBeCloseTo(21, 5);
		expect(contrastRatio("#ffffff", "#ffffff")).toBeCloseTo(1, 5);
		// Simétrico: el orden de los argumentos no debe importar.
		expect(contrastRatio("#767676", "#ffffff")).toBeCloseTo(
			contrastRatio("#ffffff", "#767676"),
			10,
		);
	});

	it("lee los tokens del tokens.css real", () => {
		const tokens = readTokens();
		expect(tokens["color-carbon"]).toBe("#14110f");
		expect(tokens["color-marfil"]).toBe("#f9ebdc");
	});

	const results = checkAll();

	it.each(results)(
		"$fgName sobre $bgName cumple AA — $usage",
		({ error, ratio, passes }) => {
			expect(error).toBeUndefined();
			expect(ratio).toBeGreaterThanOrEqual(AA_NORMAL_TEXT);
			expect(passes).toBe(true);
		},
	);

	// La regresión concreta que originó este test: --color-alerta es el
	// color del mensaje de error del formulario de contacto y estaba en
	// 3.17:1 sobre tarjeta. Si alguien lo devuelve al rojo original, esto
	// falla antes de llegar a producción.
	it("mantiene legible el error del formulario sobre la superficie más clara", () => {
		const tokens = readTokens();
		expect(
			contrastRatio(tokens["color-alerta"], tokens["color-carbon-elevated"]),
		).toBeGreaterThanOrEqual(AA_NORMAL_TEXT);
	});
});

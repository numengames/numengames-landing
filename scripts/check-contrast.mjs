// SPDX-FileCopyrightText: 2026 Numen Games S.L.
// SPDX-License-Identifier: AGPL-3.0-only
//
// check-contrast — verifica WCAG 2.1 AA sobre los tokens de color.
//
// POR QUÉ EXISTE. La cabecera de src/styles/tokens.css afirmaba
// "contraste AA ya verificado" sin que nadie lo hubiera medido. Al
// medirlo fallaban tres pares en uso, incluido el color del mensaje de
// error del formulario de contacto: el texto peor legible del sitio era
// el que ve quien falla al enviar una consulta. Una afirmación de
// accesibilidad sin comprobación automática vuelve a desviarse en el
// siguiente cambio de paleta.
//
// Lee los valores del propio tokens.css — no una copia — para que
// cambiar un color y no actualizar el test sea imposible.

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const tokensPath = join(here, "..", "src", "styles", "tokens.css");

/** Luminancia relativa, WCAG 2.1 §dfn-relative-luminance. */
export function relativeLuminance(hex) {
	const h = hex.replace("#", "");
	const channels = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
	const [r, g, b] = channels.map((c) =>
		c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4,
	);
	return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/** Ratio de contraste, WCAG 2.1 §dfn-contrast-ratio. */
export function contrastRatio(a, b) {
	const la = relativeLuminance(a);
	const lb = relativeLuminance(b);
	return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
}

/** Extrae `--nombre: #rrggbb;` de tokens.css. */
export function readTokens(css = readFileSync(tokensPath, "utf8")) {
	const tokens = {};
	for (const match of css.matchAll(/--([a-z0-9-]+):\s*(#[0-9a-fA-F]{6})\s*;/g)) {
		tokens[match[1]] = match[2].toLowerCase();
	}
	return tokens;
}

// Pares texto/superficie que existen de verdad en el sitio. Cada uno
// nombra dónde se usa: si un par deja de usarse, se quita de aquí; si
// aparece uno nuevo, se añade. No es una matriz exhaustiva, es el
// inventario de lo que un visitante puede llegar a ver.
export const PAIRS = [
	// Tema oscuro (por defecto).
	["color-marfil", "color-carbon", "texto principal sobre fondo"],
	["color-marfil", "color-carbon-raised", "texto principal sobre sección elevada"],
	["color-marfil", "color-carbon-elevated", "texto principal sobre tarjeta"],
	["color-marfil-velada", "color-carbon", "texto secundario sobre fondo"],
	["color-marfil-velada", "color-carbon-raised", "texto secundario sobre sección elevada"],
	["color-marfil-velada", "color-carbon-elevated", "texto secundario sobre tarjeta"],
	["color-ceniza", "color-carbon", "texto tenue sobre fondo (pie, notas)"],
	["color-ceniza", "color-carbon-raised", "texto tenue sobre sección elevada"],
	["color-ceniza", "color-carbon-elevated", "texto tenue sobre tarjeta"],
	["color-turquesa-texto-oscuro", "color-carbon", "enlaces sobre fondo"],
	["color-turquesa-texto-oscuro", "color-carbon-raised", "enlaces sobre sección elevada"],
	["color-dorado", "color-carbon", "acento sobre fondo"],
	["color-alerta", "color-carbon", "error de formulario sobre fondo"],
	["color-alerta", "color-carbon-raised", "error de formulario sobre sección elevada"],
	["color-alerta", "color-carbon-elevated", "error de formulario sobre tarjeta"],
	// Tema claro.
	["color-carbon", "color-marfil", "texto principal, tema claro"],
	["color-dorado-texto-claro", "color-marfil", "acento, tema claro"],
	["color-turquesa-texto-claro", "color-marfil", "enlaces, tema claro"],
	["color-alerta-claro", "color-marfil", "error de formulario, tema claro"],
];

export const AA_NORMAL_TEXT = 4.5;

export function checkAll(tokens = readTokens()) {
	return PAIRS.map(([fgName, bgName, usage]) => {
		const fg = tokens[fgName];
		const bg = tokens[bgName];
		if (!fg || !bg) {
			return { fgName, bgName, usage, error: `token no encontrado: ${!fg ? fgName : bgName}` };
		}
		const ratio = contrastRatio(fg, bg);
		return { fgName, bgName, usage, fg, bg, ratio, passes: ratio >= AA_NORMAL_TEXT };
	});
}

// Ejecutable directo: `node scripts/check-contrast.mjs`
if (process.argv[1] === fileURLToPath(import.meta.url)) {
	const results = checkAll();
	let failed = 0;
	for (const r of results) {
		if (r.error) {
			console.error(`ERROR  ${r.error}`);
			failed++;
			continue;
		}
		const mark = r.passes ? "OK   " : "FALLA";
		console.log(
			`${mark}  ${r.ratio.toFixed(2).padStart(5)}:1  ${r.fgName} sobre ${r.bgName}  — ${r.usage}`,
		);
		if (!r.passes) failed++;
	}
	console.log(
		failed === 0
			? `\n${results.length} pares, todos cumplen AA (>= ${AA_NORMAL_TEXT}:1).`
			: `\n${failed} de ${results.length} pares NO cumplen AA.`,
	);
	process.exit(failed === 0 ? 0 : 1);
}

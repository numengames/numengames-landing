import mdx from "@astrojs/mdx";
import react from '@astrojs/react';
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import cookieConsent from "@jop-software/astro-cookieconsent";


// https://astro.build/config
export default defineConfig({
    site: "https://numen.games",
    integrations: [
        react(),
        tailwind(),
        mdx(),
        sitemap(),
        cookieConsent({
            categories: {
                necessary: {
                    enabled: true,  // this category is enabled by default
                    readOnly: true  // this category cannot be disabled
                },
                analytics: {}
            },
            guiOptions: {
                consentModal: {
                    layout: "box",
                    position: "bottom right",
                    equalWeightButtons: true,
                    flipButtons: false
                },
                preferencesModal: {
                    layout: "box",
                    position: "right",
                    equalWeightButtons: true,
                    flipButtons: true
                }
            },
            categories: {
                necessary: {
                    readOnly: true
                },
                analytics: {}
            },
            language: {
                default: "en",
                autoDetect: "browser",
                translations: {
                    en: {
                        consentModal: {
                            title: "We use cookies!",
                            description: "Our website uses cookies and similar technologies to enable essential services and functionalities on our site and to collect data on how visitors interact with our site, products, and services. By clicking 'Accept all cookies', you agree that we can use these tools for advertising, analytical, and support purposes, and you consent to their use. Please see our Cookie Policy and Privacy Policy for more information.",
                            acceptAllBtn: "Accept all",
                            acceptNecessaryBtn: "Reject all",
                            // showPreferencesBtn: "Manage preferences",
                            footer: "<a href=\"https://statics.numinia.xyz/cookies-policy-2024-05-09.pdf\">Privacy Policy</a>\n<a href=\"https://statics.numinia.xyz/terms_and_conditions_2024_05_09.pdf\">Terms and conditions</a>"
                        },
                        preferencesModal: {
                            title: "Consent Preferences Center",
                            acceptAllBtn: "Accept all",
                            acceptNecessaryBtn: "Reject all",
                            savePreferencesBtn: "Save preferences",
                            closeIconLabel: "Close modal",
                            serviceCounterLabel: "Service|Services",
                            sections: [
                                {
                                    title: "Cookie Usage",
                                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                },
                                {
                                    title: "Strictly Necessary Cookies <span class=\"pm__badge\">Always Enabled</span>",
                                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                                    linkedCategory: "necessary"
                                },
                                {
                                    title: "Analytics Cookies",
                                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                                    linkedCategory: "analytics"
                                },
                                {
                                    title: "More information",
                                    description: "For any query in relation to my policy on cookies and your choices, please <a class=\"cc__link\" href=\"#yourdomain.com\">contact me</a>."
                                }
                            ]
                        }
                    },
                    es: {
                        consentModal: {
                            title: "Utilizamos cookies",
                            description: "Nuestro sitio web utiliza cookies y tecnologías similares para permitir servicios y funcionalidades esenciales en nuestro sitio y para recopilar datos sobre cómo interactúan los visitantes con nuestro sitio, productos y servicios. Al hacer clic en aceptar todas las cookies, acepta que utilicemos estas herramientas con fines publicitarios, analíticos y de asistencia, y da su consentimiento para que las utilicemos.",
                            acceptAllBtn: "Aceptar todo",
                            acceptNecessaryBtn: "Rechazar todo",
                            // showPreferencesBtn: "Administrar cookies",
                            footer: "<a href=\"https://statics.numinia.xyz/cookies-policy-2024-05-09.pdf\">Política de cookies</a>\n<a href=\"https://statics.numinia.xyz/terms_and_conditions_2024_05_09.pdf\">Términos y condiciones</a>"
                        },
                        preferencesModal: {
                            title: "Preferencias de Consentimiento",
                            acceptAllBtn: "Aceptar todo",
                            acceptNecessaryBtn: "Rechazar todo",
                            savePreferencesBtn: "Guardar preferencias",
                            closeIconLabel: "Cerrar modal",
                            serviceCounterLabel: "Servicios",
                            sections: [
                                {
                                    title: "Uso de Cookies",
                                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                },
                                {
                                    title: "Cookies Estrictamente Necesarias <span class=\"pm__badge\">Siempre Habilitado</span>",
                                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                                    linkedCategory: "necessary"
                                },
                                {
                                    title: "Cookies Analíticas",
                                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                                    linkedCategory: "analytics"
                                },
                                {
                                    title: "Más información",
                                    description: "For any query in relation to my policy on cookies and your choices, please <a class=\"cc__link\" href=\"#yourdomain.com\">contact me</a>."
                                }
                            ]
                        }
                    }
                }
            }
        }),
    ]
});
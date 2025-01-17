import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_Dm1mf4HU.mjs';
import { manifest } from './manifest_uwX0cG7k.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/2024/final.astro.mjs');
const _page2 = () => import('./pages/2024/rankings/icons/assist.astro.mjs');
const _page3 = () => import('./pages/2024/rankings/icons/goal.astro.mjs');
const _page4 = () => import('./pages/2024/rankings/icons/mvp.astro.mjs');
const _page5 = () => import('./pages/2024/rankings/icons/redcard.astro.mjs');
const _page6 = () => import('./pages/2024/rankings/icons/yellowcard.astro.mjs');
const _page7 = () => import('./pages/2024/rankings/_id_.astro.mjs');
const _page8 = () => import('./pages/2024/rankings.astro.mjs');
const _page9 = () => import('./pages/2024/regulations.astro.mjs');
const _page10 = () => import('./pages/2024/results.astro.mjs');
const _page11 = () => import('./pages/2024/teams/_id_.astro.mjs');
const _page12 = () => import('./pages/2024/teams.astro.mjs');
const _page13 = () => import('./pages/2024/teamsandresults.astro.mjs');
const _page14 = () => import('./pages/2024.astro.mjs');
const _page15 = () => import('./pages/2025/final.astro.mjs');
const _page16 = () => import('./pages/2025/rankings/icons/assist.astro.mjs');
const _page17 = () => import('./pages/2025/rankings/icons/goal.astro.mjs');
const _page18 = () => import('./pages/2025/rankings/icons/mvp.astro.mjs');
const _page19 = () => import('./pages/2025/rankings/icons/redcard.astro.mjs');
const _page20 = () => import('./pages/2025/rankings/icons/yellowcard.astro.mjs');
const _page21 = () => import('./pages/2025/rankings/_id_.astro.mjs');
const _page22 = () => import('./pages/2025/rankings.astro.mjs');
const _page23 = () => import('./pages/2025/regulations.astro.mjs');
const _page24 = () => import('./pages/2025/results.astro.mjs');
const _page25 = () => import('./pages/2025/teams/_id_.astro.mjs');
const _page26 = () => import('./pages/2025/teams.astro.mjs');
const _page27 = () => import('./pages/2025/teamsandresults.astro.mjs');
const _page28 = () => import('./pages/2025.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/2024/final.astro", _page1],
    ["src/pages/2024/rankings/icons/Assist.astro", _page2],
    ["src/pages/2024/rankings/icons/Goal.astro", _page3],
    ["src/pages/2024/rankings/icons/Mvp.astro", _page4],
    ["src/pages/2024/rankings/icons/RedCard.astro", _page5],
    ["src/pages/2024/rankings/icons/YellowCard.astro", _page6],
    ["src/pages/2024/rankings/[id].astro", _page7],
    ["src/pages/2024/rankings/index.astro", _page8],
    ["src/pages/2024/regulations.astro", _page9],
    ["src/pages/2024/results.astro", _page10],
    ["src/pages/2024/teams/[id].astro", _page11],
    ["src/pages/2024/teams/index.astro", _page12],
    ["src/pages/2024/teamsandresults.astro", _page13],
    ["src/pages/2024/index.astro", _page14],
    ["src/pages/2025/final.astro", _page15],
    ["src/pages/2025/rankings/icons/Assist.astro", _page16],
    ["src/pages/2025/rankings/icons/Goal.astro", _page17],
    ["src/pages/2025/rankings/icons/Mvp.astro", _page18],
    ["src/pages/2025/rankings/icons/RedCard.astro", _page19],
    ["src/pages/2025/rankings/icons/YellowCard.astro", _page20],
    ["src/pages/2025/rankings/[id].astro", _page21],
    ["src/pages/2025/rankings/index.astro", _page22],
    ["src/pages/2025/regulations.astro", _page23],
    ["src/pages/2025/results.astro", _page24],
    ["src/pages/2025/teams/[id].astro", _page25],
    ["src/pages/2025/teams/index.astro", _page26],
    ["src/pages/2025/teamsandresults.astro", _page27],
    ["src/pages/2025/index.astro", _page28]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "a8eaa5b7-2be0-4c14-83fc-ccd90a234807",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };

import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, e as renderScript, d as createAstro, b as renderComponent, h as renderHead, g as renderSlot } from './astro/server_jVjvX_Kb.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$FooterContent = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-4 text-center md:flex-row lg:gap-6">
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Cangas Cup Futsal 2024 <span aria-hidden="true" class="hidden md:inline">|</span><br aria-hidden="true" class="block md:hidden">
Todos los derechos reservados.</div>`;
}, "C:/Users/VicSDNDW/Desktop/Cangas-Cup-Maraton/src/components/FooterContent.astro", undefined);

const MOBILE_MENU_CONTENT_ID = "menuMobileContent";

const $$Astro$7 = createAstro();
const $$HamburgerButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$HamburgerButton;
  const width = "w-6";
  const genericHamburgerLine = `h-[2px] ${width} bg-gray-300 transition ease transform duration-300`;
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(Astro2.props.id, "id")} aria-expanded="false"${addAttribute(MOBILE_MENU_CONTENT_ID, "aria-controls")}${addAttribute([
    "hamburgerButton group relative flex h-[20px] flex-col items-center justify-between lg:hidden",
    width
  ], "class:list")} aria-label="Abrir menú de navegación"> <span${addAttribute([
    "group-[.open]:translate-y-2 group-[.open]:rotate-45",
    genericHamburgerLine
  ], "class:list")}></span> <span${addAttribute(["group-[.open]:opacity-0", genericHamburgerLine], "class:list")}></span> <span${addAttribute(["group-[.open]:opacity-0", genericHamburgerLine], "class:list")}></span> <span${addAttribute([
    "group-[.open]:-translate-y-[0.6rem] group-[.open]:-rotate-45",
    genericHamburgerLine
  ], "class:list")}></span> </button> ${renderScript($$result, "C:/Users/VicSDNDW/Desktop/Cangas-Cup-Maraton/src/components/HamburgerButton.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/VicSDNDW/Desktop/Cangas-Cup-Maraton/src/components/HamburgerButton.astro", undefined);

const $$Astro$6 = createAstro();
const $$Instagram = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Instagram;
  return renderTemplate`${maybeRenderHead()}<svg width="48" height="48" fill="none" viewBox="0 0 48 48"${addAttribute(Astro2.props.class, "class:list")} role="img" aria-label="Logotipo de Instagram"> <path fill="currentColor" d="M24.016 9.242c4.8 0 5.392.03 7.262.093 1.745.094 2.712.374 3.335.623.842.312 1.434.717 2.057 1.34.623.624 1.029 1.216 1.34 2.058.25.623.53 1.59.624 3.335.093 1.901.093 2.462.093 7.262 0 4.8-.03 5.393-.093 7.263-.094 1.745-.374 2.711-.624 3.335-.311.841-.716 1.433-1.34 2.057-.623.623-1.215 1.028-2.057 1.34-.623.25-1.59.53-3.335.623-1.901.094-2.462.094-7.262.094-4.8 0-5.393-.031-7.263-.094-1.745-.093-2.711-.374-3.335-.623-.841-.312-1.434-.717-2.057-1.34-.623-.624-1.029-1.216-1.34-2.057-.25-.624-.53-1.59-.624-3.335-.093-1.902-.093-2.463-.093-7.263s.031-5.392.093-7.262c.094-1.745.374-2.712.624-3.335.311-.842.717-1.434 1.34-2.057.623-.624 1.216-1.029 2.057-1.34.624-.25 1.59-.53 3.335-.624 1.87-.062 2.463-.093 7.263-.093Zm0-3.242c-4.894 0-5.517.031-7.419.094-1.9.093-3.21.405-4.363.841a8.936 8.936 0 0 0-3.18 2.088 8.629 8.629 0 0 0-2.119 3.18c-.436 1.153-.748 2.462-.841 4.363C6.03 18.5 6 19.122 6 24.016c0 4.893.031 5.517.094 7.418.093 1.901.405 3.21.841 4.363a8.936 8.936 0 0 0 2.088 3.18 8.936 8.936 0 0 0 3.18 2.088c1.153.436 2.462.748 4.363.842C18.5 42 19.091 42 23.984 42c4.894 0 5.517-.031 7.419-.093 1.9-.094 3.21-.406 4.363-.842a8.936 8.936 0 0 0 3.18-2.088 8.938 8.938 0 0 0 2.088-3.18c.436-1.153.748-2.462.841-4.363.094-1.933.094-2.525.094-7.418 0-4.894-.031-5.517-.094-7.419-.093-1.9-.405-3.21-.841-4.363a8.937 8.937 0 0 0-2.088-3.18 8.936 8.936 0 0 0-3.18-2.088c-1.153-.436-2.462-.748-4.363-.841C29.5 6.03 28.909 6 24.016 6Z"></path><path fill="currentColor" d="M24.015 14.758a9.258 9.258 0 0 0 0 18.515 9.258 9.258 0 0 0 0-18.515Zm0 15.242A6.02 6.02 0 0 1 18 23.984a6.02 6.02 0 0 1 6.015-6.015c3.335 0 5.985 2.711 5.985 6.046A5.986 5.986 0 0 1 24.015 30ZM33.615 16.535a2.15 2.15 0 1 0 0-4.301 2.15 2.15 0 0 0 0 4.3Z"></path> </svg>`;
}, "C:/Users/VicSDNDW/Desktop/Cangas-Cup-Maraton/src/icons/Instagram.astro", undefined);

const $$Astro$5 = createAstro();
const $$PositionMap = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$PositionMap;
  return renderTemplate`${maybeRenderHead()}<svg width="48" height="48" viewBox="0 0 24 24" fill="none" class="{Astro.props.class}" role="img" aria-label="Icono de localizacion"> <path fill="currentColor" fill-rule="evenodd" d="M11.291 21.706 12 21l-.709.706zM12 21l.708.706a1 1 0 0 1-1.417 0l-.006-.007-.017-.017-.062-.063a47.708 47.708 0 0 1-1.04-1.106 49.562 49.562 0 0 1-2.456-2.908c-.892-1.15-1.804-2.45-2.497-3.734C4.535 12.612 4 11.248 4 10c0-4.539 3.592-8 8-8 4.408 0 8 3.461 8 8 0 1.248-.535 2.612-1.213 3.87-.693 1.286-1.604 2.585-2.497 3.735a49.583 49.583 0 0 1-3.496 4.014l-.062.063-.017.017-.006.006L12 21zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" clip-rule="evenodd"></path> </svg>`;
}, "C:/Users/VicSDNDW/Desktop/Cangas-Cup-Maraton/src/icons/PositionMap.astro", undefined);

const $$Astro$4 = createAstro();
const $$SocialButtons = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SocialButtons;
  return renderTemplate`${maybeRenderHead()}<nav${addAttribute(`${Astro2.props.class}`, "class:list")}> <ul class="flex flex-row items-center gap-x-6" aria-label="redes sociales y botón para alternar tema"> <li> <a target="_blank" rel="noopener" aria-label="Instagram de la Cangas Cup, se abrirá en una nueva pestaña" href="https://www.instagram.com/cangascup?igsh=N2UwZ3E2OGRuaWsy" class="inline-block any-hover:scale-125 any-hover:opacity-70 motion-safe:transition motion-reduce:any-hover:scale-100"> ${renderComponent($$result, "Instagram", $$Instagram, { "class": "text-primary transition-colors duration-300 hover:text-accent motion-reduce:duration-0" })} </a> </li> <li> <a target="_blank" rel="noopener" aria-label="Lugar donde se disputará la maratón" href="https://maps.app.goo.gl/E84wujARYwQBV2nZA" class="inline-block any-hover:scale-125 any-hover:opacity-70 motion-safe:transition motion-reduce:any-hover:scale-100"> ${renderComponent($$result, "PositionMap", $$PositionMap, { "class": "text-primary transition-colors duration-300 hover:text-accent motion-reduce:duration-0" })} </a> </li> </ul> </nav>`;
}, "C:/Users/VicSDNDW/Desktop/Cangas-Cup-Maraton/src/sections/SocialButtons.astro", undefined);

const $$Astro$3 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Header;
  const currentYear = Astro2.url.pathname.split("/")[1] || "2025";
  const years = ["2024", "2025"];
  const pages = [
    { name: "Equipos y Resultados", href: `/${currentYear}/teamsandresults` },
    {
      name: "Age",
      href: "/",
      disabled: true,
      soonDate: "Pr\xF3ximamente"
    },
    {
      name: "Reglamento",
      href: `/${currentYear}/regulations`
    },
    {
      name: "Rankings",
      href: `/${currentYear}/rankings`
    }
  ].map((page) => ({
    ...page,
    active: Astro2.url.pathname === page.href
  }));
  return renderTemplate`${maybeRenderHead()}<header class="mb-20 h-16 max-w-[100vw] lg:h-24" data-astro-cid-3ef6ksr2> <nav class="group flex h-full w-full items-center justify-between px-12 lg:justify-between gap-36" data-astro-cid-3ef6ksr2> <div class="relative flex flex-col items-center justify-center gap-1 text-center text-xl uppercase lg:flex lg:px-7 xl:px-10" data-astro-cid-3ef6ksr2> <label for="year-selector" class="text-white" data-astro-cid-3ef6ksr2>Año</label> <select id="year-selector" class="bg-transparent border-b-2 border-grey text-white text-xl"${addAttribute(currentYear, "value")} onchange="window.location.href = '/' + this.value" data-astro-cid-3ef6ksr2> ${years.map((year) => renderTemplate`<option${addAttribute(year, "value")}${addAttribute(currentYear === year, "selected")} data-astro-cid-3ef6ksr2> ${year} </option>`)} </select> </div> ${pages.map(
    ({ disabled, name, href, active, soonDate }, key) => name !== "Age" && renderTemplate`<a${addAttribute(href, "href")}${addAttribute([
      "nav-item relative hidden h-full select-none flex-col items-center justify-center gap-1 text-center text-xl uppercase lg:flex lg:px-7 xl:px-10",
      { "pointer-events-none": disabled },
      { "current-page text-accent": active },
      { "text-white": !active }
    ], "class:list")}${addAttribute(`nav-link-${key}`, "id")} data-astro-cid-3ef6ksr2> <span class="z-10" data-astro-cid-3ef6ksr2>${name}</span> ${disabled ? renderTemplate`<span class="absolute mt-10 -skew-x-6 text-xs text-accent" data-astro-cid-3ef6ksr2> ${soonDate} </span>` : renderTemplate`<div class="background absolute -z-10 h-full w-full" data-astro-cid-3ef6ksr2></div>`} </a>`
  )} ${renderComponent($$result, "HamburgerButton", $$HamburgerButton, { "class:list": "block lg:hidden", "id": "menuButton", "data-astro-cid-3ef6ksr2": true })} <div class="fixed inset-0 z-[888] flex w-screen flex-col items-center overflow-x-auto bg-[var(--background-color)] px-10 lg:hidden"${addAttribute(MOBILE_MENU_CONTENT_ID, "id")} data-astro-cid-3ef6ksr2> <aside class="flex min-h-16 w-full items-center justify-between" data-astro-cid-3ef6ksr2> <span class="text-xl font-semibold uppercase text-primary" data-astro-cid-3ef6ksr2>Menú</span> ${renderComponent($$result, "HamburgerButton", $$HamburgerButton, { "id": "innerMenuButton", "data-astro-cid-3ef6ksr2": true })} </aside> <div class="flex min-h-2 w-full items-center" data-astro-cid-3ef6ksr2> <hr class="h-[2px] w-full border-t-0" style="background:linear-gradient(to right, transparent 0%, white 50%, transparent 100%)" data-astro-cid-3ef6ksr2> </div> <nav class="flex w-full flex-col items-center gap-5" data-astro-cid-3ef6ksr2> <a href="/" data-astro-cid-3ef6ksr2> <img src="/CANGASCUPLOGO.png" alt="logo" class="accent-drop-shadow my-4 max-w-60 drop-shadow-lg" loading="lazy" data-astro-cid-3ef6ksr2> </a> ${pages.filter(({ name }) => name !== "Age").map(({ disabled, name, href, active, soonDate }, key) => renderTemplate`<a${addAttribute(href, "href")}${addAttribute([
    "relative flex flex-col items-center justify-center gap-2 text-xl capitalize",
    { "pointer-events-none": disabled },
    { "current-page-mob": active }
  ], "class:list")}${addAttribute(`navmob-link-${key}`, "id")} data-astro-cid-3ef6ksr2> <span class="z-10 uppercase text-primary" data-astro-cid-3ef6ksr2>${name}</span> ${disabled && renderTemplate`<span class="text-accent" data-astro-cid-3ef6ksr2>${soonDate}</span>`} </a>`)} <nav class="my-4 flex flex-col gap-10" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "FooterContent", $$FooterContent, { "data-astro-cid-3ef6ksr2": true })} ${renderComponent($$result, "SocialButtons", $$SocialButtons, { "class": "flex items-center justify-center", "data-astro-cid-3ef6ksr2": true })} </nav> </nav> </div> </nav> <div class="relative flex h-2 w-full flex-col items-center" data-astro-cid-3ef6ksr2> <div class="gridBottomBarContainer absolute grid w-full items-center justify-between" data-astro-cid-3ef6ksr2> <div class="h-[2px] w-full rounded-l-[30%] border-t-0" style="background:linear-gradient(to right, transparent 3%, white 35%, white 100%)" data-astro-cid-3ef6ksr2></div> <div class="focus-within-ring -mt-6 -mb-5 -ml-[8px] -mr-[4px]" data-astro-cid-3ef6ksr2> <a href="/" class="focus-visible:!ring-0" data-astro-cid-3ef6ksr2> <img src="/CANGASCUPLOGO.png" alt="Logo" class="h-auto w-[100%] z-2 mb-4" data-astro-cid-3ef6ksr2> </a> </div> <div class="h-[2px] w-full rounded-r-[30%] border-t-0 bg-white" style="background:linear-gradient(to left, transparent 3%, white 35%, white 100%);" data-astro-cid-3ef6ksr2></div> </div> </div> </header>  ${renderScript($$result, "C:/Users/VicSDNDW/Desktop/Cangas-Cup-Maraton/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/VicSDNDW/Desktop/Cangas-Cup-Maraton/src/components/Header.astro", undefined);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="relative mt-4 mb-2 mx-3 px-4 md:px-0 flex flex-col place-items-center pb-2 pt-14 md:flex-row md:justify-between md:pt-16"> <hr class="absolute top-0 w-full h-[2px] min-w-[18rem] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent bg-center md:my-9"> ${renderComponent($$result, "FooterContent", $$FooterContent, { "class": "mb-4 md:mb-0" })} <hr aria-hidden="true" class="my-12 w-full h-[2px] min-w-[18rem] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent bg-center md:hidden"> ${renderComponent($$result, "SocialButtons", $$SocialButtons, { "class": "flex items-center justify-center" })} </footer>`;
}, "C:/Users/VicSDNDW/Desktop/Cangas-Cup-Maraton/src/components/Footer.astro", undefined);

const $$ButtonUp = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="button-up" class="fixed m-3 bottom-28 right-2 opacity-0 transition-opacity"> <button id="scroll-to-top" aria-label="Volver al inicio de la página" class="group flex size-12 cursor-default items-center justify-center rounded-lg border-2 border-primary bg-black/10 text-primary backdrop-blur hover:scale-105 hover:border-accent motion-safe:transition"> <svg aria-label="Subir al inicio de la página" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" fill="none" class="h-6 w-6 -rotate-45 group-hover:-rotate-90 group-hover:text-accent motion-safe:transition" width="20px"> <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linejoin="round" stroke-linecap="round"></path> </svg> </button> </div> ${renderScript($$result, "C:/Users/VicSDNDW/Desktop/Cangas-Cup-Maraton/src/components/ButtonUp.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/VicSDNDW/Desktop/Cangas-Cup-Maraton/src/components/ButtonUp.astro", undefined);

const $$Astro$2 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/VicSDNDW/Desktop/Cangas-Cup-Maraton/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/VicSDNDW/Desktop/Cangas-Cup-Maraton/node_modules/astro/components/ClientRouter.astro", undefined);

const $$Astro$1 = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-speed-insights", "vercel-speed-insights", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "C:/Users/VicSDNDW/Desktop/Cangas-Cup-Maraton/node_modules/@vercel/speed-insights/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/VicSDNDW/Desktop/Cangas-Cup-Maraton/node_modules/@vercel/speed-insights/dist/astro/index.astro", undefined);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta name="google-site-verification" content="AetL81-l7UsM4ebliZMB-ToHBXsmjGtvkqahgho87gI"><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="icon" href="/CANGASCUPLOGO.png"><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ClientRouter, {})}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, { "class": "mb-4" })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} ${renderComponent($$result, "SpeedInsights", $$Index, {})} ${renderComponent($$result, "ButtonUp", $$ButtonUp, {})}  </body> </html>`;
}, "C:/Users/VicSDNDW/Desktop/Cangas-Cup-Maraton/src/layouts/Layout.astro", undefined);

export { $$Layout as $, $$Instagram as a };

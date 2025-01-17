/* empty css                                    */
import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_jVjvX_Kb.mjs';
import 'kleur/colors';
import { $ as $$ButtonBack } from '../../chunks/ButtonBack_Gj9W-5Rr.mjs';
import { $ as $$Layout } from '../../chunks/Layout_4RdLMj4x.mjs';
export { renderers } from '../../renderers.mjs';

const $$Teamsandresults = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "Reglamento Cangas Cup 2024 ", "title": "Reglamento - Cangas Cup Futsal 2024" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section>${renderComponent($$result2, "ButtonBack", $$ButtonBack, {})}</section> <section class="flex justify-center items-start h-3/4 pt-24 mb-40 pb-20 "> <div class="grid grid-cols-1 md:grid-cols-3 gap-6"> <a class="group relative inline-block focus:outline-none focus:ring" href="teams"> <span class="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-blue-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span> <span class="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-sky-800 group-active:text-opacity-75">
&nbsp; EQUIPOS&nbsp;&nbsp;
</span> </a> <a class="group relative inline-block focus:outline-none focus:ring" href="results"> <span class="absolute inset-0 translate-x-0 translate-y-0 bg-sky-600 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5"></span> <span class="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest">
RESULTADOS
</span> </a> <a class="group relative inline-block focus:outline-none focus:ring" href="/final"> <span class="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-sky-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span> <span class="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-white group-active:text-opacity-75">
FASE FINAL
</span> </a> </div> </section> ` })}`;
}, "C:/Users/VicSDNDW/Desktop/Cangas-Cup-Maraton/src/pages/2025/teamsandresults.astro", undefined);

const $$file = "C:/Users/VicSDNDW/Desktop/Cangas-Cup-Maraton/src/pages/2025/teamsandresults.astro";
const $$url = "/2025/teamsandresults";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Teamsandresults,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

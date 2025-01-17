/* empty css                                    */
import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_jVjvX_Kb.mjs';
import 'kleur/colors';
import { $ as $$ButtonBack } from '../../chunks/ButtonBack_Gj9W-5Rr.mjs';
import { $ as $$Layout } from '../../chunks/Layout_4RdLMj4x.mjs';
import { $ as $$BoxResults } from '../../chunks/BoxResults_DnXAVph3.mjs';
export { renderers } from '../../renderers.mjs';

const $$Results = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "Resultados Cangas Cup 2024", "title": "Resultados - Cangas Cup Futsal 2024" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-auto h-auto mt-20"> <h1 class="text-3xl font-semibold mt-5 text-amber-400 uppercase text-primary text-center tracking-wider">
Resultados
</h1> <section>${renderComponent($$result2, "ButtonBack", $$ButtonBack, {})}</section> </section> ${renderComponent($$result2, "BoxResults", $$BoxResults, {})} ` })}`;
}, "C:/Users/VicSDNDW/Desktop/Cangas-Cup-Maraton/src/pages/2024/results.astro", undefined);

const $$file = "C:/Users/VicSDNDW/Desktop/Cangas-Cup-Maraton/src/pages/2024/results.astro";
const $$url = "/2024/results";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Results,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

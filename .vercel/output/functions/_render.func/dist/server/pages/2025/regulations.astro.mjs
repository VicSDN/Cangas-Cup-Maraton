/* empty css                                    */
import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_jVjvX_Kb.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_4RdLMj4x.mjs';
import { C as Content } from '../../chunks/Reglamento_B3vwtm_5.mjs';
export { renderers } from '../../renderers.mjs';

const $$Regulations = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "Reglamento Cangas Cup 2024 ", "title": "Reglamento - Cangas Cup Futsal 2024" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <section class="text-gray-400 bg-gray-900 body-font mt-20"> <div class="container mx-auto flex px-5 py-4 md:flex-col flex-col items-center mt-24"> <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"></div> <div class="text-center"> <h1 class="text-4xl font-bold mb-4 text-center text-white">
REGLAMENTO I CANGAS CUP MANIN FÚTBOL SALA 2024
</h1> ${renderComponent($$result2, "Reglamento", Content, {})} </div> </div> </section> </main> ` })}`;
}, "C:/Users/VicSDNDW/Desktop/Cangas-Cup-Maraton/src/pages/2025/regulations.astro", undefined);

const $$file = "C:/Users/VicSDNDW/Desktop/Cangas-Cup-Maraton/src/pages/2025/regulations.astro";
const $$url = "/2025/regulations";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Regulations,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

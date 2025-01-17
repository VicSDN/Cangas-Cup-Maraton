/* empty css                                    */
import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, a as addAttribute } from '../../chunks/astro/server_jVjvX_Kb.mjs';
import 'kleur/colors';
import { $ as $$ButtonBack } from '../../chunks/ButtonBack_Gj9W-5Rr.mjs';
import { s as supabase } from '../../chunks/supabase_DGuu650d.mjs';
import { $ as $$Layout } from '../../chunks/Layout_4RdLMj4x.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  let { data: team, error } = await supabase.from("team").select("*");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "Reglamento Cangas Cup 2024 ", "title": "Reglamento - Cangas Cup Futsal 2024" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section>${renderComponent($$result2, "ButtonBack", $$ButtonBack, {})}</section> <div class="flex justify-center mt-20 p-8"> <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 m-10"> ${team.map((team2) => renderTemplate`<div class="w-full max-w-sm bg-gray-300 bg-opacity-20 bg-blend-luminosity duration-1000 bg-cover border border-gray-400 rounded-lg shadow-md"> <div class="flex flex-col items-center pb-10"> <h2 class="w-full text-center text-wrap m-10 mb-3 text-xl font-bold text-gray-100 shadow-lg"> ${team2.name} </h2> <h5 class="mb-1 text-l font-medium text-gray-200"> ${team2.location} </h5> <span class="italic text-sm text-gray-400">
GRUPO ${team2.groupId} </span> <div class="flex mt-4 md:mt-6"> <a${addAttribute(`/teams/${team2.id}`, "href")} class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-200 bg-gray-400 bg-opacity-50 rounded-lg hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-300">
Mas detalles
</a> </div> </div> </div>`)} </div> </div> ` })}`;
}, "C:/Users/VicSDNDW/Desktop/Cangas-Cup-Maraton/src/pages/2025/teams/index.astro", undefined);

const $$file = "C:/Users/VicSDNDW/Desktop/Cangas-Cup-Maraton/src/pages/2025/teams/index.astro";
const $$url = "/2025/teams";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

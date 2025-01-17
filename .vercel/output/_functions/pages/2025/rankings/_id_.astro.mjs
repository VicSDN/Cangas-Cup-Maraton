/* empty css                                       */
import { c as createComponent, r as renderTemplate, b as renderComponent, d as createAstro, m as maybeRenderHead, a as addAttribute } from '../../../chunks/astro/server_jVjvX_Kb.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../../chunks/Layout_4RdLMj4x.mjs';
import { $ as $$ButtonBack } from '../../../chunks/ButtonBack_Gj9W-5Rr.mjs';
import { g as getPlayerById, a as getTeamById } from '../../../chunks/teams_C-B6JrFm.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  let { id } = Astro2.params;
  const player = await getPlayerById(id);
  const team = await getTeamById(player.teamId);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "Detalle de jugador", "title": "Detalle jugador" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ButtonBack", $$ButtonBack, {})} ${player && team && renderTemplate`${maybeRenderHead()}<section class="bg-sky-100 mt-20 sm:mt-32 md:mt-32 lg:mt-28"> <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8"> <div class="mx-auto max-w-3xl text-center"> <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl"> ${player.name} ${player.secondName} </h2> <p class="mt-4 text-gray-500 sm:text-xl">
Todos los datos del jugador
</p> </div> <div class="mt-8 sm:mt-12"> <dl class="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:divide-x sm:divide-gray-100"> <div class="flex flex-col px-4 py-8 text-center"> <dt class="order-last text-lg font-medium text-gray-500">
Goles totales
</dt> <dd${addAttribute(`text-4xl font-extrabold ${player.goal === 0 ? "text-gray-800" : "text-blue-600"} md:text-5xl`, "class")}> ${player.goal} </dd> </div> <div class="flex flex-col px-4 py-8 text-center"> <dt class="order-last text-lg font-medium text-gray-500">
Tarjetas Rojas
</dt> <dd${addAttribute(`text-4xl font-extrabold ${player.redCard === 0 ? "text-gray-800" : "text-blue-600"} md:text-5xl`, "class")}> ${player.redCard} </dd> </div> <div class="flex flex-col px-4 py-8 text-center"> <dt class="order-last text-lg font-medium text-gray-500">
Tarjetas Amarillas
</dt> <dd${addAttribute(`text-4xl font-extrabold ${player.yellowCard === 0 ? "text-gray-800" : "text-blue-600"} md:text-5xl`, "class")}> ${player.yellowCard} </dd> </div> <a${addAttribute(`/teams/${player.teamId}`, "href")} class="flex flex-col bg-blue-300 bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-50 text-white dark:text-white rounded-lg shadow-md p-4 transition transform hover:scale-105"> <div class="flex flex-col px-4 py-8 text-center"> <dt class="order-last text-lg font-medium text-gray-500">
Equipo
</dt> <dd class="text-3xl font-extrabold text-blue-600 md:text-2xl"> ${team.name} </dd> </div> </a> </dl> </div> </div> </section>`}` })}`;
}, "C:/Users/VicSDNDW/Desktop/Cangas-Cup-Maraton/src/pages/2025/rankings/[id].astro", undefined);

const $$file = "C:/Users/VicSDNDW/Desktop/Cangas-Cup-Maraton/src/pages/2025/rankings/[id].astro";
const $$url = "/2025/rankings/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

/* empty css                                    */
import { c as createComponent, r as renderTemplate, b as renderComponent, e as renderScript, m as maybeRenderHead, a as addAttribute, F as Fragment } from '../../chunks/astro/server_jVjvX_Kb.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_4RdLMj4x.mjs';
import { s as supabase } from '../../chunks/supabase_DGuu650d.mjs';
import { $ as $$Goal } from '../../chunks/Goal_DopTSOuR.mjs';
import { $ as $$YellowCard } from '../../chunks/YellowCard_DMiOetE3.mjs';
import { $ as $$RedCard } from '../../chunks/RedCard_KSCIw0w8.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  let { data: players, error } = await supabase.from("player").select("*");
  if (error) {
    console.error("Error fetching players:", error);
  } else {
    console.log("Players fetched successfully:", players);
  }
  function sortPlayers(category) {
    return [...players].sort((a, b) => b[category] - a[category]);
  }
  const playerStats = {
    goles: sortPlayers("goal"),
    amarillas: sortPlayers("yellowCard"),
    rojas: sortPlayers("redCard")
  };
  const cardColors = {
    goles: "bg-gray-500",
    amarillas: "bg-gray-800",
    rojas: "bg-gray-900"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "Ranking Marat\xF3n", "title": "Ranking Marat\xF3n" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-wrap gap-4 m-20 mt-32"> ${Object.entries(playerStats).map(([category, players2], index) => renderTemplate`<section class="border p-4 rounded-md flex-1 min-w-[200px] text-center"> <h1 class="text-2xl border-b-2">${`MAX ${category.toUpperCase()}`}</h1> ${players2.length === 0 ? renderTemplate`<div${addAttribute(`shadow-md w-full max-w-xs rounded-xl ${cardColors[category]} p-4 text-white`, "class")}> <p class="text-xl">Todavía no ha comenzado el torneo.</p> </div>` : players2.slice(0, 5).map((p, playerIndex) => renderTemplate`<a${addAttribute(`/rankings/${p.id}`, "href")} class="block my-4"> <div${addAttribute(`shadow-md w-full max-w-xs rounded-xl ${cardColors[category]}`, "class")}> <div class="p-4 flex flex-col items-center text-white"> <div class="flex flex-col items-center"> <p class="text-xl font-bold"> ${playerIndex + 1}. ${p.name} ${p.secondName} </p> </div> <div class="flex items-center gap-2 mt-2"> ${category === "goles" && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Goal", $$Goal, { "style": "font-size: 30px;" })} <p class="text-xl">${p.goal}</p> ` })}`} ${category === "amarillas" && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "YellowCard", $$YellowCard, { "style": "font-size: 30px;" })} <p class="text-xl">${p.yellowCard}</p> ` })}`} ${category === "rojas" && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "RedCard", $$RedCard, { "style": "font-size: 30px;" })} <p class="text-xl">${p.redCard}</p> ` })}`} </div> </div> </div> </a>`)} <button${addAttribute(`mt-4 ${cardColors[category]} text-white px-4 py-2 rounded`, "class")}${addAttribute(`${category}Modal`, "data-dialog-target")}>
Ver Todo
</button> </section>`)} </div> ${Object.entries(playerStats).map(([category, players2], index) => renderTemplate`<dialog${addAttribute(`${category}Modal`, "id")} class="p-6 border rounded-md text-center w-full h-full fixed inset-0 overflow-auto bg-gray-900 bg-opacity-90 z-50"> <h1 class="text-2xl mb-4 drop-shadow-lg ">${`Jugadores con m\xE1s ${category}`}</h1> <form method="dialog"> <button class="close-dialog-button bg-red-500 text-white px-2 py-1 text-sm rounded fixed top-6 left-6 sm:px-4 sm:py-2 sm:text-base sm:top-8 sm:left-8 md:px-6 md:py-3 md:text-lg md:top-12 md:left-12 lg:px-6 lg:py-4 lg:text-lg lg:top-16 lg:left-16" data-close-dialog>
Cerrar
</button> </form> ${players2.length === 0 ? renderTemplate`<div class="text-white text-xl">
Todavía no ha comenzado el torneo.
</div>` : players2.map((p, playerIndex) => renderTemplate`<div class="flex flex-col items-center justify-center mb-2"> <h1 class="text-white text-2xl font-bold"> ${playerIndex + 1}. ${p.name} ${p.secondName} </h1> ${category === "goles" && renderTemplate`<p class="text-white text-xl">Goles: ${p.goal}</p>`} ${category === "amarillas" && renderTemplate`<p class="text-white text-xl">
Tarjetas Amarillas: ${p.yellowCard} </p>`} ${category === "rojas" && renderTemplate`<p class="text-white text-xl">Tarjetas Rojas: ${p.redCard}</p>`} </div>`)} </dialog>`)}` })} ${renderScript($$result, "C:/Users/VicSDNDW/Desktop/Cangas-Cup-Maraton/src/pages/2025/rankings/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/VicSDNDW/Desktop/Cangas-Cup-Maraton/src/pages/2025/rankings/index.astro", undefined);

const $$file = "C:/Users/VicSDNDW/Desktop/Cangas-Cup-Maraton/src/pages/2025/rankings/index.astro";
const $$url = "/2025/rankings";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

/* empty css                                       */
import { c as createComponent, r as renderTemplate, b as renderComponent, d as createAstro, m as maybeRenderHead, F as Fragment, a as addAttribute } from '../../../chunks/astro/server_jVjvX_Kb.mjs';
import 'kleur/colors';
import { $ as $$ButtonBack } from '../../../chunks/ButtonBack_Gj9W-5Rr.mjs';
import { s as supabase } from '../../../chunks/supabase_DGuu650d.mjs';
import { $ as $$Layout } from '../../../chunks/Layout_4RdLMj4x.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  let { id } = Astro2.params;
  let { data: team, error: teamError } = await supabase.from("team").select("*").eq("id", id).single();
  let { data: players, error: playerError } = await supabase.from("player").select("*").eq("teamId", id);
  let { data: allTeams, error: allTeamsError } = await supabase.from("team").select("*").eq("groupId", team?.groupId);
  const groupStandings = allTeams.sort((a, b) => b.points - a.points);
  let { data: matches, error: matchesError } = await supabase.from("match").select("*").or(`id_team1.eq.${id},id_team2.eq.${id}`);
  function findTeam(teamId) {
    if (!allTeams) return null;
    const teamAux = allTeams.find((t) => t.id === teamId);
    return teamAux || { name: "Equipo desconocido" };
  }
  function formatDateTime(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const monthNames = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre"
    ];
    const monthName = monthNames[monthIndex];
    const formattedDate = `${day} de ${monthName}`;
    const formattedTime = `${hours}:${minutes}`;
    return { formattedDate, formattedTime };
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "Team Details", "title": "Cangas Cup Team Details" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section>${renderComponent($$result2, "ButtonBack", $$ButtonBack, {})}</section> <div class="container mx-auto mt-20 pt-8 p-4 grid grid-cols-1 md:grid-cols-3 gap-4 md:p-10 px-8"> <!-- Team Info Section --> <div class="md:col-span-1 bg-white bg-opacity-20 p-6 rounded-lg shadow-md"> ${team && renderTemplate`<div class="text-center"> <h1 class="text-2xl font-bold mb-4 text-white">${team.name}</h1> <p class="text-gray-300"> <strong>Ubicación:</strong> ${team.location} </p> <p class="text-gray-300"> <strong>Grupo:</strong> ${team.groupId} </p> <p class="text-gray-300"> <strong>Puntos:</strong> ${team.points} </p> <div class="mt-4"> <h2 class="text-xl font-bold mb-2 text-white">Partidos:</h2> <div class="flex flex-col items-center"> ${matches && matches.map((match) => {
    const team1 = findTeam(match.id_team1);
    const team2 = findTeam(match.id_team2);
    return renderTemplate`<div class="w-full max-w-xs bg-gray-700 bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-50 text-white dark:text-white rounded-lg shadow-md p-4 my-2 transition transform hover:scale-105"> <div class="flex flex-col items-center"> <div> <span class="font-bold">${team1.name}</span> vs.${" "} <span class="font-bold">${team2.name}</span> </div> <div> ${match.finished ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <span>${match.goals_team1}</span> <span class="mx-2">-</span> <span>${match.goals_team2}</span> ` })}` : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <b>${formatDateTime(match.day).formattedTime}</b> <br> ${formatDateTime(match.day).formattedDate}` })}`} </div> </div> </div>`;
  })} </div> </div> </div>`} </div> <!-- Group Standings Section --> <div class="md:col-span-1 bg-white bg-opacity-20 p-6 rounded-lg shadow-md"> <h2 class="text-xl font-bold mb-4 text-center text-white">
Grupo ${team && team.groupId} </h2> <ul class="divide-y divide-gray-500"> ${groupStandings && groupStandings.map((team2, index) => renderTemplate`<li class="flex justify-between items-center py-2 text-gray-300"> <span class="text-3xl font-bold text-white mr-4"> ${index + 1}º
</span> <a${addAttribute(`/teams/${team2.id}`, "href")} class="flex-1 max-w-xs bg-gray-700 bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-50 text-white dark:text-white rounded-lg shadow-md p-4 my-2 transition transform hover:scale-105"> <div class="flex flex-col items-center"> <h3 class="text-lg font-bold">${team2.name}</h3> <p class="text-sm">${team2.points} pts</p> </div> </a> </li>`)} </ul> </div> <!-- Players List Section --> <div class="md:col-span-1 bg-white bg-opacity-20 p-6 rounded-lg shadow-md"> <h2 class="text-xl font-bold mb-4 text-center text-white">
Jugadores ${team && team.name} </h2> <div class="flex flex-col items-center"> ${players && players.map((player) => renderTemplate`<a${addAttribute(`/rankings/${player.id}`, "href")} class="w-full max-w-xs bg-gray-700 bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-50 text-white dark:text-white rounded-lg shadow-md p-4 my-2 transition transform hover:scale-105"> <div class="flex flex-col items-center"> <h3 class="text-lg font-bold">${player.name}</h3> <p class="text-sm">${player.secondName}</p> </div> </a>`)} </div> </div> </div> ` })}`;
}, "C:/Users/VicSDNDW/Desktop/Cangas-Cup-Maraton/src/pages/2025/teams/[id].astro", undefined);

const $$file = "C:/Users/VicSDNDW/Desktop/Cangas-Cup-Maraton/src/pages/2025/teams/[id].astro";
const $$url = "/2025/teams/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

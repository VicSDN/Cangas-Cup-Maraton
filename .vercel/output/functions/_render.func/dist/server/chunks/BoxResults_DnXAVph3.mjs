import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as renderComponent, d as createAstro, F as Fragment } from './astro/server_jVjvX_Kb.mjs';
import 'kleur/colors';
import { s as supabase } from './supabase_DGuu650d.mjs';

const $$Astro = createAstro();
const $$BoxResults = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BoxResults;
  const { data: matches } = await supabase.from("match").select("*");
  const { data: teams } = await supabase.from("team").select("*");
  const findTeam = (teamId) => {
    return teams.find((team) => team.id === teamId);
  };
  const formatDateTime = (dateString) => {
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
  };
  const matchesPerPage = 8;
  matches.sort((a, b) => {
    if (a.finished && !b.finished) return -1;
    if (!a.finished && b.finished) return 1;
    return new Date(a.day).getTime() - new Date(b.day).getTime();
  });
  const totalPages = Math.ceil(matches.length / matchesPerPage);
  const currentPage = parseInt(Astro2.url.searchParams.get("page") || "1", 8);
  const currentMatches = matches.slice(
    (currentPage - 1) * matchesPerPage,
    currentPage * matchesPerPage
  );
  return renderTemplate`${maybeRenderHead()}<section class="w-full max-w-[1400px] grid lg:grid-rows-10 auto-rows-[auto] gap-4 mx-auto items-center p-6 md:p-12 lg:p-20 text-lg"> ${currentMatches.length === 0 ? renderTemplate`<div class="w-fullrelative rounded-xl backdrop-blur-md border border-black/10 shadow-inner shadow-white/10 overflow-hidden bg-white bg-opacity-40 group p-6 text-center"> <span class="text-lg md:text-xl lg:text-2xl">Esperando el sorteo</span> </div>` : currentMatches.map(
    (match) => match.finished === true ? renderTemplate`<article class="w-full bg-whit relative rounded-xl backdrop-blur-md border border-black/10 shadow-inner shadow-white/10 overflow-hidden bg-white bg-opacity-40 group"> <div class="relative z-20 grid grid-cols-3 items-center justify-between p-4"> <a${addAttribute(`/teams/${match.id_team1}`, "href")} class="flex flex-col bg-gray-700 bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-50 text-white dark:text-white rounded-lg shadow-md p-4 transition transform hover:scale-105"> <span class="col-span-1 text-right pr-4 text-xs md:text-sm lg:text-base"> ${findTeam(match.id_team1).name} </span> </a> <div class="col-span-1 text-center"> <span>${match.goals_team1}</span> <span class="mx-2">-</span> <span>${match.goals_team2}</span> </div> <a${addAttribute(`/teams/${match.id_team2}`, "href")} class="flex flex-col bg-gray-700 bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-50 text-white dark:text-white rounded-lg shadow-md p-4 transition transform hover:scale-105"> <span class="col-span-1 text-left pl-4 text-xs md:text-sm lg:text-base"> ${findTeam(match.id_team2).name} </span> </a> </div> </article>` : renderTemplate`<article class="w-full bg-whit relative rounded-xl backdrop-blur-md border border-black/10 shadow-inner shadow-white/10 overflow-hidden bg-white bg-opacity-20 group"> <div class="relative z-20 grid grid-cols-3 items-center justify-between p-4"> <a${addAttribute(`/teams/${match.id_team1}`, "href")} class="flex flex-col bg-gray-700 bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-50 text-white dark:text-white rounded-lg shadow-md p-4 transition transform hover:scale-105"> <span class="col-span-1 text-right pr-4 text-xs md:text-sm lg:text-base"> ${findTeam(match.id_team1).name} </span> </a> <div class="col-span-1 text-center"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <b>${formatDateTime(match.day).formattedTime}</b> <br> ` })} ${formatDateTime(match.day).formattedDate} </div> <a${addAttribute(`/teams/${match.id_team2}`, "href")} class="flex flex-col bg-gray-700 bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-50 text-white dark:text-white rounded-lg shadow-md p-4 transition transform hover:scale-105"> <span class="col-span-1 text-left pl-4 text-xs md:text-sm lg:text-base"> ${findTeam(match.id_team2).name} </span> </a> </div> </article>`
  )} <div class="flex justify-center items-center gap-4 mt-4"> <a${addAttribute(`?page=${Math.max(currentPage - 1, 1)}`, "href")} class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none bg-gray-300 hover:bg-gray-400 active:bg-gray-500 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="w-4 h-4"> <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path> </svg>
Previous
</a> <div class="flex items-center gap-2"> ${Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => renderTemplate`<a${addAttribute(`?page=${page}`, "href")}${addAttribute(`relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg ${currentPage === page ? "bg-gray-500 text-white shadow-md" : "bg-gray-200 text-gray-900"} text-center align-middle font-sans text-xs font-medium uppercase transition-all hover:bg-gray-400 active:bg-gray-500`, "class")}> <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"> ${page} </span> </a>`)} </div> <a${addAttribute(`?page=${Math.min(currentPage + 1, totalPages)}`, "href")} class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none bg-gray-300 hover:bg-gray-400 active:bg-gray-500 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
Next
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="w-4 h-4"> <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path> </svg> </a> </div> </section>`;
}, "C:/Users/VicSDNDW/Desktop/Cangas-Cup-Maraton/src/sections/BoxResults.astro", undefined);

export { $$BoxResults as $ };

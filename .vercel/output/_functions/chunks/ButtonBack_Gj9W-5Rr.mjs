import { c as createComponent, r as renderTemplate, m as maybeRenderHead } from './astro/server_jVjvX_Kb.mjs';
import 'kleur/colors';
import 'clsx';

const $$ButtonBack = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="button-back" class="absolute m-3 top-28 left-4 transition-opacity"> <button id="go-back" aria-label="Volver a la página anterior" class="group flex size-12 cursor-pointer items-center justify-center rounded-lg border-2 border-primary bg-black/10 text-primary backdrop-blur hover:scale-105 hover:border-accent motion-safe:transition" onclick="history.back()"> <svg aria-label="Volver a la página anterior" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" fill="none" class="h-6 w-6 group-hover:text-white motion-safe:transition" width="20px"> <path d="M10 19l-7-7m0 0l7-7m-7 7h18" stroke-linejoin="round" stroke-linecap="round"></path> </svg> </button> </div>`;
}, "C:/Users/VicSDNDW/Desktop/Cangas-Cup-Maraton/src/components/ButtonBack.astro", undefined);

export { $$ButtonBack as $ };

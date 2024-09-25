

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.D81PtfjH.js","_app/immutable/chunks/disclose-version.BPWM5p8y.js","_app/immutable/chunks/runtime.BdQefmK-.js","_app/immutable/chunks/if.CbrjXHHM.js"];
export const stylesheets = ["_app/immutable/assets/0.n63t5xbL.css"];
export const fonts = [];

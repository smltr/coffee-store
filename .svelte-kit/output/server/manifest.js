export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["images/18-bravo-coffee.webp","images/18-echo-coffee.webp","images/18-charlie-coffee.webp","images/18-delta-coffee.webp","images/hero-image.webp","favicon.png"]),
	mimeTypes: {".webp":"image/webp",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.BeRS86ci.js","app":"_app/immutable/entry/app.Wy068qx2.js","imports":["_app/immutable/entry/start.BeRS86ci.js","_app/immutable/chunks/entry.z3YSt2D-.js","_app/immutable/chunks/runtime.BdQefmK-.js","_app/immutable/entry/app.Wy068qx2.js","_app/immutable/chunks/runtime.BdQefmK-.js","_app/immutable/chunks/render.DL3r0ZpU.js","_app/immutable/chunks/disclose-version.BPWM5p8y.js","_app/immutable/chunks/if.CbrjXHHM.js","_app/immutable/chunks/proxy.5gyrz3XY.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

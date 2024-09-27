export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["images/18-bravo-coffee.webp","images/horse.webp","images/18-echo-coffee.webp","images/18-charlie-coffee.webp","images/18-delta-coffee.webp","images/hero-image.webp","favicon.png"]),
	mimeTypes: {".webp":"image/webp",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.CUQBpGAO.js","app":"_app/immutable/entry/app.DjF6uhvu.js","imports":["_app/immutable/entry/start.CUQBpGAO.js","_app/immutable/chunks/entry.D4VjMgU4.js","_app/immutable/chunks/runtime.BeFyPUA4.js","_app/immutable/entry/app.DjF6uhvu.js","_app/immutable/chunks/runtime.BeFyPUA4.js","_app/immutable/chunks/render.D_jELRAU.js","_app/immutable/chunks/disclose-version.Clq7wtwH.js","_app/immutable/chunks/props.BSmy0Uvl.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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


// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const NVM_DIR: string;
	export const _: string;
	export const HOME: string;
	export const PATH: string;
	export const SHLVL: string;
	export const TERM_PROGRAM_VERSION: string;
	export const HOMEBREW_PREFIX: string;
	export const XPC_SERVICE_NAME: string;
	export const LC_ALL: string;
	export const SHELL: string;
	export const HOMEBREW_REPOSITORY: string;
	export const SSH_AUTH_SOCK: string;
	export const USER: string;
	export const DENO_INSTALL: string;
	export const COLORTERM: string;
	export const HERD_PHP_83_INI_SCAN_DIR: string;
	export const __CFBundleIdentifier: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const ALACRITTY_WINDOW_ID: string;
	export const INFOPATH: string;
	export const NVM_INC: string;
	export const NODE_ENV: string;
	export const PWD: string;
	export const ZED_TERM: string;
	export const OLDPWD: string;
	export const TERM_PROGRAM: string;
	export const WINDOWID: string;
	export const INIT_CWD: string;
	export const NVM_BIN: string;
	export const XPC_FLAGS: string;
	export const LOGNAME: string;
	export const TERM: string;
	export const NVM_CD_FLAGS: string;
	export const TMPDIR: string;
	export const HOMEBREW_CELLAR: string;
	export const COMMAND_MODE: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		NVM_DIR: string;
		_: string;
		HOME: string;
		PATH: string;
		SHLVL: string;
		TERM_PROGRAM_VERSION: string;
		HOMEBREW_PREFIX: string;
		XPC_SERVICE_NAME: string;
		LC_ALL: string;
		SHELL: string;
		HOMEBREW_REPOSITORY: string;
		SSH_AUTH_SOCK: string;
		USER: string;
		DENO_INSTALL: string;
		COLORTERM: string;
		HERD_PHP_83_INI_SCAN_DIR: string;
		__CFBundleIdentifier: string;
		__CF_USER_TEXT_ENCODING: string;
		ALACRITTY_WINDOW_ID: string;
		INFOPATH: string;
		NVM_INC: string;
		NODE_ENV: string;
		PWD: string;
		ZED_TERM: string;
		OLDPWD: string;
		TERM_PROGRAM: string;
		WINDOWID: string;
		INIT_CWD: string;
		NVM_BIN: string;
		XPC_FLAGS: string;
		LOGNAME: string;
		TERM: string;
		NVM_CD_FLAGS: string;
		TMPDIR: string;
		HOMEBREW_CELLAR: string;
		COMMAND_MODE: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}

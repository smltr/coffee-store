import { f as slot } from "../../chunks/index.js";
function default_slot($$props) {
  var children = $$props.$$slots?.default;
  if (children === true) {
    return $$props.children;
  } else {
    return children;
  }
}
function Nav($$payload) {
  $$payload.out += `<nav class="bg-white shadow-md"><div class="container mx-auto px-4"><div class="flex justify-between items-center py-4"><a href="/" class="text-2xl font-bold text-green-700">18 SERIES</a> <button class="md:hidden" aria-label="Toggle menu"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg></button> <div class="hidden md:flex space-x-4"><a href="/" class="text-gray-800 hover:text-green-700">Home</a> <a href="/shop" class="text-gray-800 hover:text-green-700">Shop</a> <a href="/about" class="text-gray-800 hover:text-green-700">About</a> <a href="/contact" class="text-gray-800 hover:text-green-700">Contact</a></div></div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></nav>`;
}
function _layout($$payload, $$props) {
  $$payload.out += `<div class="min-h-screen flex flex-col bg-gray-50">`;
  Nav($$payload);
  $$payload.out += `<!----> <main class="flex-grow container mx-auto px-4 py-8"><!---->`;
  slot($$payload, default_slot($$props), {});
  $$payload.out += `<!----></main> <footer class="bg-gray-800 text-white py-6"><div class="container mx-auto text-center text-sm"><p>© 2023 18 SERIES COFFEE COMPANY | Supporting Green Berets</p></div></footer></div>`;
}
export {
  _layout as default
};

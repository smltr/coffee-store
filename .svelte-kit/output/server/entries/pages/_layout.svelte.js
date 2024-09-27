import { h as slot } from "../../chunks/index.js";
function default_slot($$props) {
  var children = $$props.$$slots?.default;
  if (children === true) {
    return $$props.children;
  } else {
    return children;
  }
}
function Nav($$payload) {
  $$payload.out += `<div class="navbar bg-base-200"><div class="navbar-start"><div class="dropdown"><div tabindex="0" role="button" class="btn btn-ghost lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg></div> <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"><li><a>Item 1</a></li> <li><a>Parent</a> <ul class="p-2"><li><a>Submenu 1</a></li> <li><a>Submenu 2</a></li></ul></li> <li><a>Item 3</a></li></ul></div> <a href="/" class="btn btn-ghost text-2xl"><img src="images/horse.webp" alt="Horse" class="h-9 w-9 mr-2"> 18 Series Coffee</a></div> <div class="navbar-center hidden lg:flex"><ul class="menu menu-horizontal px-1"><li><a>Home</a></li> <li><a>About</a></li></ul></div> <div class="navbar-end"><a class="btn">Order Coffee</a></div></div>`;
}
function Footer($$payload) {
  $$payload.out += `<footer class="footer bg-base-200 text-base-content p-10"><aside><img src="images/horse.webp" alt="Horse logo" width="50" height="50" class="fill-current invert brightness-0"> <p class="mt-2">© 2024 18 Series Coffee Company <br> A 501(c)3 Charitable Organization</p></aside> <nav><h6 class="footer-title">Shop</h6> <a class="link link-hover">Coffee</a> <a class="link link-hover">Merch</a></nav> <nav><h6 class="footer-title">Links</h6> <a class="link link-hover">Our Story</a> <a class="link link-hover">Donate</a> <a class="link link-hover">My Account</a></nav></footer>`;
}
function _layout($$payload, $$props) {
  $$payload.out += `<div class="font-body">`;
  Nav($$payload);
  $$payload.out += `<!----> <!---->`;
  slot($$payload, default_slot($$props), {});
  $$payload.out += `<!----> `;
  Footer($$payload);
  $$payload.out += `<!----></div>`;
}
export {
  _layout as default
};

import { m as attr, k as escape_html, o as bind_props, q as rest_props, j as getContext, t as fallback, v as spread_attributes, f as pop, p as push, w as sanitize_props, x as await_block, y as ensure_array_like } from "../../chunks/index.js";
function Hero($$payload) {
  $$payload.out += `<div class="hero min-h-[50vh]" style="background-image: url(/images/hero-image.webp);"><div class="custom-hero-overlay svelte-kdisnt"></div> <div class="hero-content text-center"><div class="max-w-2xl mx-auto"><h1 class="mb-5 text-6xl font-bold font-body text-gray-200 tracking-tight">Buy Coffee, Support A Veteran</h1> <p class="mb-5 text-lg max-w-lg mx-auto">At 18 Series Coffee, we use a portion of every sale to help veterans in
                need.</p> <button class="btn btn-secondary">Shop Now</button></div></div></div> <div class="bg-secondary h-5"></div>`;
}
const getProducts = () => {
  return [
    {
      tag: "18 Echo",
      name: "Ethiopia Yirgacheffe",
      price: 24.99,
      imageLink: "images/18-echo-coffee.webp",
      description: "Soft, fragrant, exotic"
    },
    {
      tag: "18 Delta",
      name: "Organic Guatemala",
      price: 24.99,
      imageLink: "images/18-delta-coffee.webp",
      description: "Complex, pure, enchanting"
    },
    {
      tag: "18 Charlie",
      name: "Costa Rica Reserve",
      price: 24.99,
      imageLink: "images/18-charlie-coffee.webp",
      description: "Rich, winy, sharp"
    },
    {
      tag: "18 Bravo",
      name: "Marrakesh Blend",
      price: 23.99,
      imageLink: "images/18-bravo-coffee.webp",
      description: "Smoky, spicy, aromatic"
    }
  ];
};
function Product($$payload, $$props) {
  let image = $$props["image"];
  let name = $$props["name"];
  let description = $$props["description"];
  let price = $$props["price"];
  let tag = $$props["tag"];
  $$payload.out += `<div class="w-64 rounded-2xl p-4 flex flex-col items-center"><img${attr("src", image)}${attr("alt", name)} class="w-48 h-48 object-cover mx-auto"> <div class="px-4 pb-4"><div class="badge font-bold badge-secondary uppercase mb-1">${escape_html(tag)}</div> <h2 class="text-xl font-bold mb-0.25">${escape_html(name)}</h2> <p class="text-gray-600 mb-2">${escape_html(description)}</p> <div class="flex items-center"><p class="text-lg font-bold mr-5">$${escape_html(price)}</p> <a href="/buy" class="bg-primary btn-sm text-white rounded-md hover:bg-primary-dark flex items-center justify-center hover:brightness-110">Buy Now</a></div></div></div>`;
  bind_props($$props, { image, name, description, price, tag });
}
function ChevronDoubleDown($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "size",
    "role",
    "color",
    "variation",
    "viewBox",
    "ariaLabel"
  ]);
  push();
  const ctx = getContext("iconCtx") ?? {};
  let size = fallback($$props["size"], () => ctx.size || "24", true);
  let role = fallback($$props["role"], () => ctx.role || "img", true);
  let color = fallback($$props["color"], () => ctx.color || "currentColor", true);
  let variation = fallback($$props["variation"], () => ctx.variation || "outline", true);
  let viewBox = fallback($$props["viewBox"], () => ctx.viewBox || "0 0 24 24", true);
  let ariaLabel = fallback($$props["ariaLabel"], "chevron double down");
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      ...$$restProps,
      role,
      "aria-label": ariaLabel,
      fill: "none",
      viewBox,
      "stroke-width": "2"
    },
    void 0,
    void 0,
    3
  )}>`;
  if (variation === "outline") {
    $$payload.out += "<!--[-->";
    $$payload.out += `<path d="M19.5 5.25L12 12.75L4.5 5.25M19.5 11.25L12 18.75L4.5 11.25"${attr("stroke", color)} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<path fill-rule="evenodd" clip-rule="evenodd" d="M20.0303 4.71967C20.3232 5.01256 20.3232 5.48744 20.0303 5.78033L12.5303 13.2803C12.2374 13.5732 11.7626 13.5732 11.4697 13.2803L3.96967 5.78033C3.67678 5.48744 3.67678 5.01256 3.96967 4.71967C4.26256 4.42678 4.73744 4.42678 5.03033 4.71967L12 11.6893L18.9697 4.71967C19.2626 4.42678 19.7374 4.42678 20.0303 4.71967ZM20.0303 10.7197C20.3232 11.0126 20.3232 11.4874 20.0303 11.7803L12.5303 19.2803C12.2374 19.5732 11.7626 19.5732 11.4697 19.2803L3.96967 11.7803C3.67678 11.4874 3.67678 11.0126 3.96967 10.7197C4.26256 10.4268 4.73744 10.4268 5.03033 10.7197L12 17.6893L18.9697 10.7197C19.2626 10.4268 19.7374 10.4268 20.0303 10.7197Z"${attr("fill", color)}></path>`;
  }
  $$payload.out += `<!--]--></svg>`;
  bind_props($$props, {
    size,
    role,
    color,
    variation,
    viewBox,
    ariaLabel
  });
  pop();
}
function Star($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "size",
    "role",
    "color",
    "variation",
    "viewBox",
    "ariaLabel"
  ]);
  push();
  const ctx = getContext("iconCtx") ?? {};
  let size = fallback($$props["size"], () => ctx.size || "24", true);
  let role = fallback($$props["role"], () => ctx.role || "img", true);
  let color = fallback($$props["color"], () => ctx.color || "currentColor", true);
  let variation = fallback($$props["variation"], () => ctx.variation || "outline", true);
  let viewBox = fallback($$props["viewBox"], () => ctx.viewBox || "0 0 24 24", true);
  let ariaLabel = fallback($$props["ariaLabel"], "star");
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      ...$$restProps,
      role,
      "aria-label": ariaLabel,
      fill: "none",
      viewBox,
      "stroke-width": "2"
    },
    void 0,
    void 0,
    3
  )}>`;
  if (variation === "outline") {
    $$payload.out += "<!--[-->";
    $$payload.out += `<path d="M11.4806 3.49883C11.6728 3.03685 12.3272 3.03685 12.5193 3.49883L14.6453 8.61028C14.7263 8.80504 14.9095 8.93811 15.1197 8.95497L20.638 9.39736C21.1367 9.43735 21.339 10.0598 20.959 10.3853L16.7546 13.9867C16.5945 14.1239 16.5245 14.3392 16.5734 14.5444L17.8579 19.9293C17.974 20.416 17.4446 20.8007 17.0176 20.5398L12.2932 17.6542C12.1132 17.5443 11.8868 17.5443 11.7068 17.6542L6.98238 20.5398C6.55539 20.8007 6.02594 20.416 6.14203 19.9293L7.42652 14.5444C7.47546 14.3392 7.4055 14.1239 7.24531 13.9867L3.04099 10.3853C2.661 10.0598 2.86323 9.43735 3.36197 9.39736L8.88022 8.95497C9.09048 8.93811 9.27363 8.80504 9.35464 8.61028L11.4806 3.49883Z"${attr("stroke", color)} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<path fill-rule="evenodd" clip-rule="evenodd" d="M10.7881 3.2108C11.2364 2.13286 12.7635 2.13286 13.2118 3.2108L15.2938 8.21652L20.6979 8.64976C21.8616 8.74306 22.3335 10.1953 21.4469 10.9549L17.3295 14.4818L18.5874 19.7553C18.8583 20.8909 17.6229 21.7884 16.6266 21.1799L11.9999 18.354L7.37329 21.1799C6.37697 21.7884 5.14158 20.8909 5.41246 19.7553L6.67038 14.4818L2.55303 10.9549C1.66639 10.1953 2.13826 8.74306 3.302 8.64976L8.70609 8.21652L10.7881 3.2108Z"${attr("fill", color)}></path>`;
  }
  $$payload.out += `<!--]--></svg>`;
  bind_props($$props, {
    size,
    role,
    color,
    variation,
    viewBox,
    ariaLabel
  });
  pop();
}
function _page($$payload, $$props) {
  push();
  Hero($$payload);
  $$payload.out += `<!----> <div class="bg-accent-light text-primary py-20"><div class="container mx-auto max-w-2xl px-4 text-center mb-10"><h1 class="text-5xl font-bold mb-5 text-gray-200">`;
  ChevronDoubleDown($$payload, {
    class: "inline-block text-primary mb-1 w-9 h-9"
  });
  $$payload.out += `<!----> <span class="text-primary uppercase tracking-tighter">Shop Our Blends</span> `;
  ChevronDoubleDown($$payload, {
    class: "inline-block text-primary mb-1 w-9 h-9"
  });
  $$payload.out += `<!----></h1> <p class="font-body">Our premium roasts, inspired by Pineland's first star course, blends the
            finest beans from the Uwharie forest. We've expanded our horizons to bring you
            these eye-opening brews. Stay tuned for more exciting offerings!</p></div> <div class="container max-w-6xl mx-auto"><!---->`;
  await_block(
    getProducts(),
    () => {
      $$payload.out += `<p>Loading products...</p>`;
    },
    (products) => {
      const each_array = ensure_array_like(products);
      $$payload.out += `<div class="flex flex-wrap justify-center"><!--[-->`;
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let product = each_array[$$index];
        $$payload.out += `<div class="px-2 mb-4">`;
        Product($$payload, {
          tag: product.tag,
          image: product.imageLink,
          name: product.name,
          description: product.description,
          price: product.price
        });
        $$payload.out += `<!----></div>`;
      }
      $$payload.out += `<!--]--></div>`;
    }
  );
  $$payload.out += `<!----></div></div> <div class="mx-auto"><div class="flex justify-center space-x-2 my-4">`;
  Star($$payload, { class: "w-6 h-6 text-yellow-400" });
  $$payload.out += `<!----> `;
  Star($$payload, { class: "w-6 h-6 text-yellow-400" });
  $$payload.out += `<!----> `;
  Star($$payload, { class: "w-6 h-6 text-yellow-400" });
  $$payload.out += `<!----> `;
  Star($$payload, { class: "w-6 h-6 text-yellow-400" });
  $$payload.out += `<!----></div></div> <div class="bg-accent text-primary py-20"><div class="container mx-auto max-w-2xl px-4 text-center mb-10"><h1 class="text-5xl font-bold mb-5 text-gray-200">`;
  ChevronDoubleDown($$payload, {
    class: "inline-block text-primary mb-1 w-9 h-9"
  });
  $$payload.out += `<!----> <span class="text-primary uppercase tracking-tighter">Our Story</span> `;
  ChevronDoubleDown($$payload, {
    class: "inline-block text-primary mb-1 w-9 h-9"
  });
  $$payload.out += `<!----></h1> <p class="font-body">Story goes here</p></div></div>`;
  pop();
}
export {
  _page as default
};

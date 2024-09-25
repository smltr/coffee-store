import { l as ensure_array_like, m as head, o as attr, j as escape_html } from "../../chunks/index.js";
function _page($$payload) {
  let products = [
    {
      name: "18 Echo Ethiopia Yirgacheffe",
      price: 24.99,
      image: "/images/18-echo-coffee.webp"
    },
    {
      name: "18 Delta Organic Guatemala",
      price: 24.99,
      image: "/images/18-delta-coffee.webp"
    },
    {
      name: "18 Charlie Costa Rica Reserve",
      price: 24.99,
      image: "/images/18-charlie-coffee.webp"
    },
    {
      name: "18 Bravo Marrakesh Blend",
      price: 23.99,
      image: "/images/18-bravo-coffee.webp"
    }
  ];
  const each_array = ensure_array_like(products);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>18 Series Coffee</title>`;
  });
  $$payload.out += `<section class="relative h-screen"><img src="/images/hero-image.webp" alt="Hero" class="w-full h-full object-cover"> <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center"><div class="container mx-auto px-4"><div class="max-w-2xl"><h1 class="text-4xl md:text-6xl font-bold mb-4 text-white">18 SERIES COFFEE COMPANY</h1> <p class="text-xl mb-8 text-gray-200">Supporting Green Berets through exceptional coffee</p> <a href="#shop" class="bg-green-700 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-800 transition duration-300 inline-block">Shop Now</a></div></div></div></section> <section class="py-16 bg-gray-100"><div class="container mx-auto px-4"><h2 class="text-3xl font-bold text-center mb-12 text-green-800">Our Mission</h2> <div class="max-w-3xl mx-auto text-center"><p class="text-lg mb-6 text-gray-700">We are a 501(c)3 nonprofit dedicated to supporting the 18 Series Green
                Berets. Founded by Green Berets for Green Berets, we bring you exceptional
                coffee while giving back to those who've served.</p> <p class="text-lg text-gray-700">Every purchase helps us provide aid and support to Green Berets in
                transition and those who've assisted our operations worldwide.</p></div></div></section> <section id="shop" class="bg-white py-16"><div class="container mx-auto px-4"><h2 class="text-3xl font-bold text-center mb-12 text-green-800">Featured Products</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let product = each_array[$$index];
    $$payload.out += `<div class="bg-gray-100 rounded-lg overflow-hidden shadow-md transition duration-300 hover:shadow-xl"><img${attr("src", product.image)}${attr("alt", product.name)} class="w-full h-48 object-cover"> <div class="p-4"><h3 class="font-semibold text-lg mb-2 text-green-800">${escape_html(product.name)}</h3> <p class="text-gray-700 font-bold mb-4">$${escape_html(product.price)}</p> <button class="w-full bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition duration-300">Add to Cart</button></div></div>`;
  }
  $$payload.out += `<!--]--></div></div></section> <section class="bg-gray-900 text-white py-16"><div class="container mx-auto px-4"><h2 class="text-3xl font-bold text-center mb-12">Founded by Heroes</h2> <div class="max-w-3xl mx-auto text-center"><p class="text-lg mb-6">18 Series Coffee Company was founded by veterans of the U.S. Army Special
                Forces, including Green Berets with extensive combat experience and
                leadership roles in some of the world's most challenging environments.</p> <p class="text-lg mb-6">Our founders have served in Afghanistan, Iraq, and numerous other
                locations, bringing the same dedication and excellence to our coffee as
                they did to their military service.</p> <p class="text-lg">When you choose 18 Series Coffee, you're not just getting premium coffee –
                you're supporting a mission carried out by those who've dedicated their
                lives to serving others.</p></div></div></section> <section class="bg-gray-100 py-16"><div class="container mx-auto text-center"><h2 class="text-3xl font-bold mb-8">Join Our Mission</h2> <p class="text-xl mb-8">Help us continue supporting our veterans and their families.</p> <a href="/donate" class="bg-green-700 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-800 transition duration-300">Donate Now</a></div></section>`;
}
export {
  _page as default
};

<script lang="ts">
    import Hero from "$lib/components/Hero.svelte";
    import { getProducts } from "$lib/get-products";
    import Product from "$lib/components/Product.svelte";
    import { ChevronDoubleDown } from "svelte-heros";
    import { Star } from "svelte-heros";
</script>

<Hero />
<div id="shop" class="bg-gray-200 text-primary py-20">
    <div class="container mx-auto max-w-2xl px-4 text-center mb-10">
        <h1 class="text-4xl sm:text-5xl font-bold mb-5 text-gray-200">
            <ChevronDoubleDown class="inline-block text-primary mb-1 w-9 h-9" />
            <span class="text-primary uppercase tracking-tighter">Shop Our Blends </span>
            <ChevronDoubleDown class="inline-block text-primary mb-1 w-9 h-9" />
        </h1>
        <p class="font-body">
            Our premium roasts, inspired by Pineland's first star course, blends the
            finest beans from the Uwharie forest. We've expanded our horizons to bring you
            these eye-opening brews. Stay tuned for more exciting offerings!
        </p>
    </div>

    <div class="container max-w-6xl mx-auto">
        {#await getProducts()}
            <p>Loading products...</p>
        {:then products}
            <div class="flex flex-wrap justify-center">
                {#each products as product}
                    <div class="px-2 mb-4">
                        <Product
                            tag={product.tag}
                            image={product.imageLink}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                        />
                    </div>
                {/each}
            </div>
        {:catch error}
            <p>Error loading products: {error.message}</p>
        {/await}
    </div>
</div>
<div class="mx-auto">
    <div class="flex justify-center space-x-2 my-4">
        <Star class="w-6 h-6 text-yellow-400" />
        <Star class="w-6 h-6 text-yellow-400" />
        <Star class="w-6 h-6 text-yellow-400" />
        <Star class="w-6 h-6 text-yellow-400" />
    </div>
</div>
<div id="story" class="bg-accent text-primary py-20">
    <div class="container mx-auto max-w-2xl px-4 text-center mb-10">
        <h1 class="text-4xl sm:text-5xl font-bold mb-5 text-gray-200">
            <ChevronDoubleDown class="inline-block text-primary mb-1 w-9 h-9" />
            <span class="text-primary uppercase tracking-tighter">Our Story </span>
            <ChevronDoubleDown class="inline-block text-primary mb-1 w-9 h-9" />
        </h1>
        <div class="container mx-auto max-w-4xl px-4 text-center mb-10">
            <p class="font-body mb-8">
                18 Series Coffee Company was born from the bond of Green Berets. Founded
                by Chuck and Perry, veterans who've been through the trenches together
                since their ODA days. Our mission goes beyond great coffee - we're
                committed to supporting fellow Special Operating Forces veterans and
                allies who've had our backs in combat.
            </p>

            <div class="flex flex-wrap justify-center items-center gap-8 mb-8">
                <div class="text-center">
                    <div class="avatar mb-4">
                        <div
                            class="ring-primary ring-offset-base-100 w-32 sm:w-48 rounded-full ring ring-offset-2"
                        >
                            <img
                                src="https://18seriescoffeecompany.org/wp-content/uploads/2023/11/SEperry1991_auto_x2.jpg"
                                alt="Perry Blackburn portrait"
                            />
                        </div>
                    </div>
                    <p class="font-bold">Perry Blackburn</p>
                    <p class="text-sm">Co-Founder | SF LTC (R)</p>
                    <a
                        href="https://www.linkedin.com/in/perryblackburn/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-primary hover:text-primary-focus transition-colors duration-300"
                        aria-label="Perry Blackburn's LinkedIn profile"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 inline-block mr-1"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                            />
                        </svg>
                    </a>
                </div>
                <div class="text-center">
                    <div class="avatar mb-4">
                        <div
                            class="ring-primary ring-offset-base-100 w-32 sm:w-48 rounded-full ring ring-offset-2"
                        >
                            <img
                                src="https://18seriescoffeecompany.org/wp-content/uploads/2023/12/SR-25.jpg"
                                class="object-cover object-[50%_20%] w-full h-full scale-150"
                                alt="Chuck Pense portrait"
                            />
                        </div>
                    </div>

                    <p class="font-bold">Chuck Pense</p>
                    <p class="text-sm">Co-Founder | SF SSG</p>
                    <a
                        href="https://www.linkedin.com/in/perryblackburn/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-primary hover:text-primary-focus transition-colors duration-300"
                        aria-label="Chuck Pense's LinkedIn profile"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 inline-block mr-1"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                            />
                        </svg>
                    </a>
                </div>
            </div>

            <p class="font-body">
                Every cup of our coffee represents the camaraderie we've shared and the
                support we aim to provide. By choosing 18 Series, you're not just enjoying
                premium roasts - you're helping us give back to the Green Beret community
                and those in transition. Join us in this mission as we continue to serve,
                one cup at a time.
            </p>
        </div>
    </div>
</div>

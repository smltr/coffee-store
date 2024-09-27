<script lang="ts">
    import { Star } from "svelte-heros";

    function smoothScroll(node: HTMLElement) {
        const handleClick = (event: MouseEvent) => {
            event.preventDefault();
            const href = node.getAttribute("href");
            if (href) {
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: "smooth",
                    });
                }
            }
        };

        node.addEventListener("click", handleClick);

        return {
            destroy() {
                node.removeEventListener("click", handleClick);
            },
        };
    }
</script>

<div
    class="hero-custom min-h-[50vh] max-w-4xl mx-auto"
    style="background-image: url(/images/horse.webp);"
>
    <div class="custom-hero-overlay"></div>
    <div class="hero-content text-center">
        <div class="max-w-2xl mx-auto">
            <h2 class="mb-5 text-md font-bold font-body text-secondary">
                18 SERIES COFFEE COMPANY
            </h2>
            <h1
                class="mb-5 text-5xl sm:text-6xl font-bold font-body text-gray-200 tracking-tight"
            >
                Buy Coffee, Support A Veteran
            </h1>
            <p class="mb-5 text-lg max-w-lg mx-auto">
                At 18 Series Coffee, we use a portion of every sale to help veterans in
                need. Our mission is to make a difference in veterans' lives. <a
                    use:smoothScroll
                    href="#story"
                    class="text-secondary hover:underline">Read our story</a
                >.
            </p>
            <a href="#shop" use:smoothScroll class="btn btn-secondary">Shop Now</a>
        </div>
    </div>
</div>

<style>
    /* .custom-hero-overlay {
        grid-column-start: 1;
        grid-row-start: 1;
        height: 100%;
        width: 100%;
        background-image: linear-gradient(
                to right,
                rgba(62, 46, 33, 0.8),
                rgba(70, 80, 120, 0.6)
            ),
            repeating-linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.1) 0px,
                rgba(0, 0, 0, 0.1) 1px,
                transparent 1px,
                transparent 4px
            );
        opacity: 0.99;
    } */

    .custom-hero-overlay {
        grid-column-start: 1;
        grid-row-start: 1;
        height: 100%;
        width: 100%;
        background-color: theme("colors.primary");
        opacity: 0.94;
    }

    .hero-custom {
        display: grid;
        width: 100%;
        place-items: center;
        background-size: cover;
        background-position: center top;
        overflow: hidden;
    }
    .hero-custom > * {
        grid-column-start: 1;
        grid-row-start: 1;
    }
</style>

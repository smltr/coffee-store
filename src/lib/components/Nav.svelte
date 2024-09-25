<script>
    let isMenuOpen = $state(false);

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }
</script>

<nav class="bg-white shadow-md">
    <div class="container mx-auto px-4">
        <div class="flex justify-between items-center py-4">
            <a href="/" class="text-2xl font-bold text-green-700">18 SERIES</a>

            <!-- Mobile menu button -->
            <button class="md:hidden" onclick={toggleMenu} aria-label="Toggle menu">
                <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                </svg>
            </button>

            <!-- Desktop menu -->
            <div class="hidden md:flex space-x-4">
                <a href="/" class="text-gray-800 hover:text-green-700">Home</a>
                <a href="/shop" class="text-gray-800 hover:text-green-700">Shop</a>
                <a href="/about" class="text-gray-800 hover:text-green-700">About</a>
                <a href="/contact" class="text-gray-800 hover:text-green-700">Contact</a>
            </div>
        </div>

        <!-- Mobile menu -->
        {#if isMenuOpen}
            <div class="md:hidden">
                <a href="/" class="block py-2 px-4 text-sm hover:bg-gray-200">Home</a>
                <a href="/shop" class="block py-2 px-4 text-sm hover:bg-gray-200">Shop</a>
                <a href="/about" class="block py-2 px-4 text-sm hover:bg-gray-200"
                    >About</a
                >
                <a href="/contact" class="block py-2 px-4 text-sm hover:bg-gray-200"
                    >Contact</a
                >
            </div>
        {/if}
    </div>
</nav>

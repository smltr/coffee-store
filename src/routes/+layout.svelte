<script>
    import "../app.css";
    import Nav from "$lib/components/Nav.svelte";
</script>

<div class="min-h-screen flex flex-col bg-gray-50">
    <Nav />
    <main class="flex-grow container mx-auto px-4 py-8">
        <slot />
    </main>
    <footer class="bg-gray-800 text-white py-6">
        <div class="container mx-auto text-center text-sm">
            <p>&copy; 2023 18 SERIES COFFEE COMPANY | Supporting Green Berets</p>
        </div>
    </footer>
</div>

<script>
    import "../app.css";
    import Nav from "$lib/components/Nav.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

<div class="font-body">
    <Nav />
    <slot />
    <Footer />
</div>

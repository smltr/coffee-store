<script>
    export let image;
    export let name;
    export let description;
    export let price;
    export let tag;
</script>

<div class="w-92 rounded-2xl p-4 flex flex-row items-center">
    <img src={image} alt={name} class="w-24 h-24 object-cover mx-auto" />
    <div class="pr-4 pb-4">
        <div class="badge font-bold badge-secondary uppercase mb-1">{tag}</div>
        <h2 class="text-xl font-bold mb-0.25">{name}</h2>
        <p class="text-gray-600 mb-2">{description}</p>
        <div class="flex items-center">
            <p class="text-lg font-bold mr-5">${price}</p>
            <a
                href="/buy"
                class="bg-primary btn-sm text-white rounded-md hover:bg-primary-dark flex items-center justify-center hover:brightness-110"
                >Add to Cart</a
            >
        </div>
    </div>
</div>

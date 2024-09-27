<div class="navbar bg-base-200">
    <div class="navbar-start">
        <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                    />
                </svg>
            </div>
            <ul
                class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
                <li><a href="/item1">Item 1</a></li>
                <li>
                    <a href="/parent">Parent</a>
                    <ul class="p-2">
                        <li><a href="/submenu1">Submenu 1</a></li>
                        <li><a href="/submenu2">Submenu 2</a></li>
                    </ul>
                </li>
                <li><a href="/item3">Item 3</a></li>
            </ul>
        </div>
        <a href="/" class="btn btn-ghost text-2xl">
            <img src="images/horse.webp" alt="Horse" class="h-9 w-9 mr-2" />
            18 Series Coffee
        </a>
    </div>
    <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
        </ul>
    </div>
    <div class="navbar-end">
        <a class="btn">Order Coffee</a>
    </div>
</div>

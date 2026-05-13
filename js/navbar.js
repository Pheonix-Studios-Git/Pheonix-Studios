function loadNavbar() {
    const navbar = `
    <nav class="navbar">
        <div class="navbar-logo"><a href="../index">
            Pheonix Studios
        </a></div>
        
        <ul class="navbar-links">
            <li><a href="../">Home</a></li>
            <li><a href="cpu">CPU</a></li>
            <li><a href="os">OS</a></li>
            <li><a href="firmware">Firmware</a></li>
            <li><a href="docs">Docs</a></li>
        </ul>

        <div class="navbar-contact">
            <button><a href="contact">Contact</a></button>
        </div>

        <link rel="stylesheet" href="../css/navbar.css">
    </nav>
    `

    document.querySelector(".navbar-container").innerHTML = navbar;
}

loadNavbar();
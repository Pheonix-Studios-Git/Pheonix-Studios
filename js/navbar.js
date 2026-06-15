function loadNavbar() {
    const navbar = `
    <nav class="navbar">
        <div class="navbar-logo"><a href="../index">
            Pheonix Studios
        </a></div>
        
        <ul class="navbar-links">
            <li><a href="../index.html">Home</a></li>
            <li><a href="./cpu.html">CPU</a></li>
            <li><a href="./os.html">OS</a></li>
            <li><a href="./firmware.html">Firmware</a></li>
            <li><a href="./docs.html">Docs</a></li>
			<li><a href="./deadlock.html">Deadlock</a></li>
        </ul>

        <div class="navbar-contact">
            <button><a href="./contact.html">Contact</a></button>
        </div>

        <link rel="stylesheet" href="../css/navbar.css">
    </nav>
    `

    document.querySelector(".navbar-container").innerHTML = DOMPurify.sanitize(navbar);
}

loadNavbar();
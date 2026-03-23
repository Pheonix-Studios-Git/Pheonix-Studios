function loadFooter() {
    const footer = `
    <div class="footer-container">
        <p id="copyright">
            © 2026, Pheonix Studios / AkshuDev
        </p>
        <ul class="footer-links">
            <li><a href="../index.html">Home</a></li>
            <li><a href="cpu.html">CPU</a></li>
            <li><a href="os.html">OS</a></li>
            <li><a href="firmware.html">Firmware</a></li>
            <li><a href="docs.html">Docs</a></li>
        </ul>
        <div class="footer-socials">
            <a href="https://github.com/Pheonix-Studios-Git" target="_blank">GitHub - Pheonix Studios</a>
            <a href="https://github.com/AkshuDev" target="_blank">Github - AkshuDev</a>
        </div>
    </div>
    <link rel="stylesheet" href="../css/footer.css">
    `

    document.querySelector(".site-footer").innerHTML = footer;
}

loadFooter();
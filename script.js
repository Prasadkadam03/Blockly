document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".page-section");
    const navAnchors = document.querySelectorAll("nav a");
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const navLinksContainer = document.getElementById("nav-links"); 

    function showSection(id) {
        sections.forEach(section => section.classList.remove("active"));
        const target = document.querySelector(id);
        if (target) target.classList.add("active");
    }

    navAnchors.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href");
            showSection(targetId);
        });
    });

    showSection("#home");

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark-mode') {
        body.classList.add('dark-mode');
    } else {
        body.classList.add('light-mode');
    }

    themeToggleBtn.addEventListener('click', () => {
        const isDark = body.classList.contains('dark-mode');
        body.classList.toggle('dark-mode', !isDark);
        body.classList.toggle('light-mode', isDark);
        localStorage.setItem('theme', isDark ? 'light-mode' : 'dark-mode');
    });

    hamburgerBtn.addEventListener("click", () => {
        navLinksContainer.classList.toggle("open");
    });

    navLinksContainer.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinksContainer.classList.remove("open");
        });
    });
});

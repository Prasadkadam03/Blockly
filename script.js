document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".page-section");
    const navLinks = document.querySelectorAll("nav a");
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Show correct section on nav click
    function showSection(id) {
        sections.forEach(section => section.classList.remove("active"));
        const target = document.querySelector(id);
        if (target) target.classList.add("active");
    }

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href");
            showSection(targetId);
        });
    });

    // Initial section
    showSection("#home");

    // Load theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark-mode') {
        body.classList.add('dark-mode');
    } else {
        body.classList.add('light-mode');
    }

    // Theme toggle
    themeToggleBtn.addEventListener('click', () => {
        const isDark = body.classList.contains('dark-mode');
        body.classList.toggle('dark-mode', !isDark);
        body.classList.toggle('light-mode', isDark);
        localStorage.setItem('theme', isDark ? 'light-mode' : 'dark-mode');
    });
});
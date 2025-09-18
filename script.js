document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Dark Mode Toggle
    const toggleButton = document.createElement("button");
    toggleButton.innerText = "🌙";
    toggleButton.style.position = "fixed";
    toggleButton.style.top = "10px";
    toggleButton.style.right = "20px";
    toggleButton.style.padding = "8px 12px";
    toggleButton.style.border = "none";
    toggleButton.style.background = "#222";
    toggleButton.style.color = "#fff";
    toggleButton.style.fontSize = "1.2rem";
    toggleButton.style.cursor = "pointer";
    document.body.appendChild(toggleButton);

    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        toggleButton.innerText = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
    });

    // Typing Effect for Hero Section
    const text = "Hello, I am Sriragavi";
    let index = 0;
    function typeEffect() {
        if (index < text.length) {
            document.querySelector(".hero h2 span").textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        }
    }
    document.querySelector(".hero h2 span").textContent = "";
    typeEffect();

    // Project Hover Effect
    document.querySelectorAll(".project").forEach(project => {
        project.addEventListener("mouseenter", () => {
            project.style.transform = "scale(1.05)";
            project.style.transition = "transform 0.3s ease-in-out";
        });
        project.addEventListener("mouseleave", () => {
            project.style.transform = "scale(1)";
        });
    });
});

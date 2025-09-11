const menuIcon = document.getElementById("menuIcon");
const sidebar = document.getElementById("sidebar");
const links = document.querySelectorAll(".sidebar a");

menuIcon.addEventListener("click", () => {
    sidebar.classList.toggle("open");
});

function selectPage(event) {
    event.preventDefault();
    const targetUrl = event.target.getAttribute("href");

    sidebar.classList.remove("open");

    setTimeout(() => {
        window.location.href = targetUrl;
    }, 500); // Match CSS transition duration
}

links.forEach(link => {
    link.addEventListener("click", selectPage);
});
if (window.innerWidth <= 768) {
    // Optional mobile-specific behavior
}

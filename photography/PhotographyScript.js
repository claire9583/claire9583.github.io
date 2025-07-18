document.querySelectorAll(".img-link").forEach(link => {
    const src = link.getAttribute("data-src");
    link.href = src;

    const img = link.querySelector("img");
    img.src = src;
});
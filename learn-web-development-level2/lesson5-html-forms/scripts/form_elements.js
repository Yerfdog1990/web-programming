document.addEventListener("mousemove", (e) => {
    const img = document.createElement("img");
    img.src = "../assets/kenya-flag.png";
    img.className = "trail";

    img.style.left = e.clientX + "px";
    img.style.top = e.clientY + "px";

    document.body.appendChild(img);

    setTimeout(() => img.remove(), 100);
});

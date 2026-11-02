if (header) {
    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

        let currentSection = "";

        sections.forEach(function (section) {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(function (link) {
            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + currentSection) {
                link.classList.add("active");
            }
        });

    });
}
// ===============================
// GALERI
// ===============================

const galleryImages = document.querySelectorAll(".galeri-item img");

galleryImages.forEach(function (image) {

    image.addEventListener("click", function () {

        const overlay = document.createElement("div");

        overlay.className = "image-overlay";

        overlay.innerHTML = `
            <div class="image-popup">
                <button type="button" class="close-popup">&times;</button>
                <img src="${this.src}" alt="${this.alt}">
            </div>
        `;

        document.body.appendChild(overlay);

        // Tombol close
        const closeButton = overlay.querySelector(".close-popup");

        if (closeButton) {
            closeButton.addEventListener("click", function () {
                overlay.remove();
            });
        }

        // Tutup ketika klik area di luar gambar
        overlay.addEventListener("click", function (event) {
            if (event.target === overlay) {
                overlay.remove();
            }
        });

        // Tutup dengan tombol ESC
        document.addEventListener("keydown", function escHandler(event) {
            if (event.key === "Escape") {
                overlay.remove();
                document.removeEventListener("keydown", escHandler);
            }
        });

    });

});

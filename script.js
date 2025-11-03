// JavaScript untuk Smooth Scrolling

document.addEventListener("DOMContentLoaded", () => {
    // Pilih semua link navigasi yang mengarah ke '#'
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            // Hentikan aksi default (lompat langsung)
            e.preventDefault();

            // Dapatkan ID tujuan (misal: "#kontak")
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Gunakan scrollIntoView untuk animasi halus
                targetElement.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
});

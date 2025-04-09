// --- Menú móvil ---
const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => menuOpenButton.click());

navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click());
});

// --- Swiper (slider de contenido) ---
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
});


// --- Acordeón de Preguntas Frecuentes ---
document.addEventListener("DOMContentLoaded", () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const isOpen = content.style.maxHeight;

            // Cerrar todos los acordeones
            document.querySelectorAll('.accordion-content').forEach(c => c.style.maxHeight = null);

            // Abrir solo el seleccionado si estaba cerrado
            if (!isOpen) {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});


// --- Submenús en móviles (activar con tap) ---
document.querySelectorAll(".nav-item").forEach(item => {
    const submenu = item.querySelector(".submenu");

    if (submenu) {
        item.addEventListener("click", (e) => {
            // Si está en vista móvil
            if (window.innerWidth <= 768) {
                e.preventDefault();
                item.classList.toggle("show-submenu");
            }
        });
    }
});


// --- Swiper para la sección Hero ---
const heroSwiper = new Swiper('.hero-image-wrapper', {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.hero-image-wrapper .swiper-pagination',
      clickable: true,
    },
  });
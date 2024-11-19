const words = [
    "el diseño web",
    "la programación",
    "trabajar en equipo",
    "desafiarme"
]; // Palabras dinámicas

const dynamicText = document.getElementById("dynamicText");

let wordIndex = 0; // Índice de las palabras
let charIndex = 0; // Índice de las letras

function typeEffect() {
    if (charIndex < words[wordIndex].length) {
        // Escribir letra por letra
        dynamicText.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 150); // Velocidad de escritura (150ms entre letras)
    } else {
        // Pausa al final de la palabra antes de borrar o pasar a la siguiente
        setTimeout(deleteEffect, 1000);
    }
}

function deleteEffect() {
    if (charIndex > 0) {
        // Borrar letra por letra
        dynamicText.textContent = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteEffect, 100); // Velocidad de borrado (100ms entre letras)
    } else {
        // Pasar a la siguiente palabra
        wordIndex = (wordIndex + 1) % words.length; // Ciclo infinito
        setTimeout(typeEffect, 500); // Pausa antes de escribir la nueva palabra
    }
}

// Iniciar el efecto de escritura
typeEffect();

// Selecciona todos los enlaces de navegación
const navLinks = document.querySelectorAll('.nav-link');

// Añade un evento de clic a cada enlace
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Elimina la clase 'active' de todos los enlaces
        navLinks.forEach(link => link.classList.remove('active'));

        // Agrega la clase 'active' al enlace clicado
        link.classList.add('active');
    });
});

tsParticles.load("tsparticles", {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
            }
        },
        links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out"
        }
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            }
        }
    }
});

window.addEventListener('scroll', function () {
    let body = document.querySelector('body');
    if (window.scrollY > 50) {  // Cuando el scroll es mayor a 50px
        body.classList.add('scrolled'); // Cambia el fondo
    } else {
        body.classList.remove('scrolled'); // Restaura el fondo
    }
});

// Detecta el desplazamiento del usuario y verifica si la imagen está en el viewport
window.addEventListener('scroll', function () {
    const image = document.getElementById('aboutImage');

    // Verifica si la imagen está visible en el viewport
    const imagePosition = image.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Si la imagen está dentro del viewport, reinicia la animación
    if (imagePosition.top >= 0 && imagePosition.top <= windowHeight) {
        image.style.animation = 'none'; // Resetea la animación
        image.offsetHeight; // Forzamos a que el navegador vuelva a aplicar el estilo
        image.style.animation = 'fadeInAndMove 1s ease-out forwards'; // Reinicia la animación
    }
});


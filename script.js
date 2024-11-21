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
document.addEventListener("DOMContentLoaded", () => {
    const aboutImage = document.querySelector(".about-img");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            aboutImage.classList.add("animate"); // Activa la clase que aplica el efecto
          } else {
            aboutImage.classList.remove("animate"); // Quita la animación si sales de la sección
          }
        });
      },
      {
        threshold: 0.5, // El efecto se activa cuando el 50% de la sección está visible
      }
    );
  
    const aboutSection = document.querySelector(".about");
    observer.observe(aboutSection);
  });
  
//  // Function to check if an element is visible in the viewport
// function isElementVisible(el) {
//     const rect = el.getBoundingClientRect();
//     return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
//   }
  
//   // Add event listener for window scroll
//   window.addEventListener("scroll", function() {
//     const sections = ["inicio", "about", "projects", "skills", "contacto"];
//     const navLinks = document.querySelectorAll(".navbar-nav a");
  
//     sections.forEach((sectionId, index) => {
//       const section = document.getElementById(sectionId);
//       if (isElementVisible(section)) {
//         navLinks[index].classList.add("active"); // Add "active" class for active link
//       } else {
//         navLinks[index].classList.remove("active"); // Remove "active" class
//       }
//     });
//   });
  
  const cards = document.querySelectorAll('.project-card');

cards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(50px)';

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
        observer.unobserve(card);
      }
    });
  });

  observer.observe(card);
});
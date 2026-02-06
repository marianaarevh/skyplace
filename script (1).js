// Configuración del carrusel
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar el carrusel con opciones personalizadas
    const carousel = document.querySelector('#heroCarousel');
    
    if (carousel) {
        const bsCarousel = new bootstrap.Carousel(carousel, {
            interval: 4000, // Cambia de slide cada 4 segundos
            wrap: true,     // Vuelve al inicio después del último slide
            pause: 'hover'  // Pausa cuando el mouse está sobre el carrusel
        });
    }

    // Smooth scroll para los enlaces del menú
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Cerrar el menú en móvil después de hacer clic
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }
            }
        });
    });

    // Actualizar el item activo del menú según el scroll
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section[id]');
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navbarHeight - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.pageYOffset >= sectionTop && 
                window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Añadir sombra al navbar cuando se hace scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            navbar.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
        }
    });
});

// Función para cambiar el texto de la sucursal (por si lo necesitas más adelante)
function cambiarSucursal(nombreSucursal) {
    const sucursalText = document.querySelector('.sucursal-text');
    if (sucursalText) {
        sucursalText.textContent = nombreSucursal;
    }
}

// Función para pausar/reanudar el carrusel (útil si quieres añadir un botón para esto)
function toggleCarousel() {
    const carousel = document.querySelector('#heroCarousel');
    const bsCarousel = bootstrap.Carousel.getInstance(carousel);
    
    if (bsCarousel) {
        if (bsCarousel._isPaused) {
            bsCarousel.cycle();
        } else {
            bsCarousel.pause();
        }
    }
}

// Configuración del carrusel de atracciones
document.addEventListener('DOMContentLoaded', function() {
    const atraccionesCarousel = document.querySelector('#atraccionesCarousel');
    
    if (atraccionesCarousel) {
        new bootstrap.Carousel(atraccionesCarousel, {
            interval: 5000,  // Cambia cada 5 segundos
            wrap: true,
            pause: 'hover'
        });
    }
});

// Funcionalidad para los botones de servicios
document.addEventListener('DOMContentLoaded', function() {
    const botonesServicio = document.querySelectorAll('.btn-servicio');
    
    botonesServicio.forEach(boton => {
        boton.addEventListener('click', function() {
            const servicio = this.getAttribute('data-servicio');
            
            // Aquí puedes cambiar la funcionalidad según necesites:
            // Opción 1: Mostrar modal con más información
            // Opción 2: Redirigir a otra página
            // Opción 3: Abrir formulario de contacto
            
            // Por ahora, mostramos un mensaje de ejemplo
            alert(`Más información sobre: ${servicio}\n\nAquí puedes implementar:\n- Un modal con detalles\n- Redirección a página específica\n- Formulario de contacto\n- Enlaces a WhatsApp`);
            
            // Ejemplo para WhatsApp:
            // window.open(`https://wa.me/521234567890?text=Hola, necesito información sobre ${servicio}`, '_blank');
        });
    });
});

// Función auxiliar para abrir modal de información (ejemplo)
function mostrarInfoServicio(servicio) {
    const infoServicios = {
        cumpleanos: {
            titulo: 'Paquetes de Cumpleaños',
            descripcion: 'Información detallada sobre nuestros paquetes de cumpleaños...',
            telefono: '662-123-4567',
            email: 'cumpleanos@tuparque.com'
        },
        empresarial: {
            titulo: 'Programas Empresariales',
            descripcion: 'Información detallada sobre nuestros programas empresariales...',
            telefono: '662-123-4567',
            email: 'empresas@tuparque.com'
        },
        escolar: {
            titulo: 'Programas Escolares',
            descripcion: 'Información detallada sobre nuestros programas escolares...',
            telefono: '662-123-4567',
            email: 'escuelas@tuparque.com'
        }
    };
    
    const info = infoServicios[servicio];
    console.log(info); // Aquí puedes usar esta info para mostrar un modal o lo que necesites
}

// ===== FUNCIONALIDAD DEL BOTÓN VOLVER ARRIBA =====
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('backToTop');
    
    // Mostrar/ocultar botón según el scroll
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });
    
    // Funcionalidad del botón
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

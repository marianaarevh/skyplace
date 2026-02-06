// ===== EFECTO DE RASTRO DE MASCOTA =====
// DESCOMENTAR ESTA SECCIÓN PARA ACTIVAR EL EFECTO DE RASTRO
/*
document.addEventListener('DOMContentLoaded', function() {
    const trailsContainer = document.getElementById('mascot-trails');
    let lastTrailTime = 0;
    const trailInterval = 100; // milisegundos entre cada mascota
    
    // Emojis de mascota que pueden aparecer (puedes cambiarlos)
    const mascots = ['🦘', '🦘', '🦘']; // Repito el canguro para que salga más
    
    document.addEventListener('mousemove', function(e) {
        const currentTime = Date.now();
        
        // Solo crear rastro si ha pasado el intervalo
        if (currentTime - lastTrailTime < trailInterval) {
            return;
        }
        
        // No crear rastros sobre elementos interactivos
        const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);
        if (elementUnderCursor && (
            elementUnderCursor.closest('.sucursal-card') ||
            elementUnderCursor.closest('button') ||
            elementUnderCursor.closest('a') ||
            elementUnderCursor.closest('.btn-ver-mas')
        )) {
            return;
        }
        
        lastTrailTime = currentTime;
        
        // Crear elemento de rastro
        const trail = document.createElement('div');
        trail.className = 'mascot-trail';
        trail.textContent = mascots[Math.floor(Math.random() * mascots.length)];
        trail.style.left = e.pageX + 'px';
        trail.style.top = e.pageY + 'px';
        
        // Variación aleatoria de posición
        const randomOffsetX = (Math.random() - 0.5) * 20;
        const randomOffsetY = (Math.random() - 0.5) * 20;
        trail.style.transform = `translate(${randomOffsetX}px, ${randomOffsetY}px)`;
        
        trailsContainer.appendChild(trail);
        
        // Eliminar después de la animación
        setTimeout(() => {
            trail.remove();
        }, 2000);
        
        // Limitar el número de rastros en pantalla
        const trails = trailsContainer.querySelectorAll('.mascot-trail');
        if (trails.length > 30) {
            trails[0].remove();
        }
    });
});
*/

// ===== ANIMACIONES ADICIONALES =====
document.addEventListener('DOMContentLoaded', function() {
    // Animación de entrada para las tarjetas
    const cards = document.querySelectorAll('.sucursal-card');
    
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 200 * index);
    });
    
    // Efecto de scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// ===== EFECTO PARALLAX EN SCROLL (OPCIONAL) =====
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const header = document.querySelector('.main-header');
    
    if (header) {
        header.style.transform = `translateY(${scrolled * 0.3}px)`;
        header.style.opacity = 1 - (scrolled / 500);
    }
});
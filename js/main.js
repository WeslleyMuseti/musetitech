document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll Reveals (Intersection Observer)
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                if (entry.target.classList.contains('services-grid')) {
                    entry.target.querySelectorAll('.service-card').forEach((card, i) => {
                        setTimeout(() => card.classList.add('visible'), i * 150);
                    });
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll(".reveal, .services-grid").forEach(el => observer.observe(el));

    // 2. Typing Effect (Robust Version)
    const typingElement = document.getElementById('typing-hero');
    if (typingElement) {
        const fullHTML = typingElement.innerHTML;
        const textToType = typingElement.innerText;
        
        // Prepare: Save content and hide
        typingElement.setAttribute('data-full-text', fullHTML);
        typingElement.style.visibility = 'hidden'; 
        
        let i = 0;
        typingElement.innerText = '';
        typingElement.style.visibility = 'visible';

        function type() {
            if (i < textToType.length) {
                typingElement.textContent += textToType.charAt(i);
                i++;
                setTimeout(type, 40);
            } else {
                // Restore original HTML (with colored spans)
                typingElement.innerHTML = fullHTML;
            }
        }
        
        // Short delay before starting
        setTimeout(type, 1000);
    }

    // 3. Mouse-tracking Parallax (Code Card)
    const glassCard = document.querySelector('.glass-card');
    if (glassCard) {
        window.addEventListener('mousemove', (e) => {
            const moveX = (e.clientX - window.innerWidth / 2) / 50;
            const moveY = (e.clientY - window.innerHeight / 2) / 50;
            glassCard.style.transform = `rotateY(${moveX}deg) rotateX(${-moveY}deg)`;
        });
    }

    // 4. Magnetic Buttons
    document.querySelectorAll('.btn-primary, .btn-outline').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const box = btn.getBoundingClientRect();
            const x = e.clientX - box.left - box.width / 2;
            const y = e.clientY - box.top - box.height / 2;
            btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });
        btn.addEventListener('mouseleave', () => btn.style.transform = 'translate(0,0)');
    });

    // 5. Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(a.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

console.log("%cMUSETI TECH %cUI Restored", "color:#0076FF;font-weight:bold;font-size:18px;", "color:#00F2FF;");

// ==================== SMOOTH SCROLLING ==================== 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ==================== NAVBAR ACTIVE LINK ==================== 
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            const activeLink = document.querySelector(`a[href="#${section.id}"]`);
            if (activeLink) activeLink.classList.add('active');
        }
    });
});

// ==================== HAMBURGER MENU ==================== 
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// ==================== INTERSECTION OBSERVER FOR ANIMATIONS ==================== 
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = getComputedStyle(entry.target).animation;
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-category, .project-card, .contact-card, .timeline-content').forEach(el => {
    observer.observe(el);
});

// ==================== PROGRESS BAR ANIMATION ==================== 
const progressBars = document.querySelectorAll('.progress-fill');

const progressObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const width = entry.target.style.width;
            entry.target.style.width = '0';
            setTimeout(() => {
                entry.target.style.width = width;
            }, 100);
            progressObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

progressBars.forEach(bar => {
    progressObserver.observe(bar);
});

// ==================== STATS COUNTER ==================== 
const stats = document.querySelectorAll('.stat-item h3');

const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            const finalValue = parseInt(target.textContent);
            const duration = 2000;
            const steps = 60;
            const increment = finalValue / steps;
            let current = 0;
            
            const counter = setInterval(() => {
                current += increment;
                if (current >= finalValue) {
                    target.textContent = finalValue + (target.textContent.includes('+') ? '+' : '');
                    clearInterval(counter);
                } else {
                    target.textContent = Math.floor(current) + (target.textContent.includes('+') ? '+' : '');
                }
            }, duration / steps);
            
            counterObserver.unobserve(target);
        }
    });
}, { threshold: 0.5 });

stats.forEach(stat => {
    counterObserver.observe(stat);
});

// ==================== KEYBOARD NAVIGATION ==================== 
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const menu = document.querySelector('.nav-menu');
        if (menu && menu.classList.contains('active')) {
            menu.classList.remove('active');
            document.querySelector('.hamburger').classList.remove('active');
        }
    }
});

// ==================== SCROLL TO TOP BUTTON ==================== 
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    
    if (scrollTop > 300) {
        if (!document.querySelector('.scroll-to-top')) {
            const btn = document.createElement('button');
            btn.className = 'scroll-to-top';
            btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
            btn.style.cssText = `
                position: fixed;
                bottom: 2rem;
                right: 2rem;
                width: 50px;
                height: 50px;
                background: linear-gradient(135deg, #00d4ff, #0066cc);
                border: none;
                border-radius: 50%;
                color: white;
                cursor: pointer;
                font-size: 1.2rem;
                z-index: 999;
                transition: all 0.3s ease;
                box-shadow: 0 0 30px rgba(0, 212, 255, 0.3);
            `;
            btn.addEventListener('mouseenter', () => {
                btn.style.transform = 'translateY(-5px)';
                btn.style.boxShadow = '0 0 50px rgba(0, 212, 255, 0.5)';
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translateY(0)';
                btn.style.boxShadow = '0 0 30px rgba(0, 212, 255, 0.3)';
            });
            btn.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            document.body.appendChild(btn);
        }
    } else {
        const btn = document.querySelector('.scroll-to-top');
        if (btn) btn.remove();
    }
});

// ==================== PAGE LOAD ANIMATION ==================== 
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

console.log('Portfolio loaded successfully!');

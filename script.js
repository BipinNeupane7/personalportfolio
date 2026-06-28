// ==================== SMOOTH SCROLLING & NAVBAR ==================== 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Navbar active link highlighting
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

// ==================== PARALLAX EFFECT ==================== 
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero) {
        hero.style.backgroundPosition = `0 ${scrolled * 0.5}px`;
    }
});

// ==================== SKILL ITEMS INTERACTION ==================== 
const skillItems = document.querySelectorAll('.skill-item');

skillItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        // Remove active from all
        skillItems.forEach(s => s.classList.remove('active'));
        // Add active to current
        this.classList.add('active');
        
        // Animate icon
        const icon = this.querySelector('.skill-icon');
        if (icon) {
            icon.style.animation = 'none';
            setTimeout(() => {
                icon.style.animation = '';
            }, 10);
        }
    });
});

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

// Observe all animated elements
document.querySelectorAll('[class*="fade"], [class*="slide"], .skill-category, .achievement-card, .contact-card').forEach(el => {
    observer.observe(el);
});

// ==================== PROGRESS BAR ANIMATION ==================== 
const progressBars = document.querySelectorAll('.progress');

const progressObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'progressFill 1.5s ease-out forwards';
            progressObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

progressBars.forEach(bar => {
    progressObserver.observe(bar);
});

// ==================== HAMBURGER MENU ==================== 
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// ==================== TYPING EFFECT FOR TERMINAL ==================== 
const terminalContent = document.querySelector('.terminal-content');

if (terminalContent) {
    const lines = terminalContent.querySelectorAll('p');
    
    lines.forEach((line, index) => {
        line.style.opacity = '0';
        line.style.animation = `slideInUp 0.5s ease-out ${0.1 * (index + 1)}s both`;
    });
}

// ==================== CURSOR EFFECTS ==================== 
document.addEventListener('mousemove', (e) => {
    // Optional: Add mouse tracking effects
});

// ==================== BUTTON RIPPLE EFFECT ==================== 
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// ==================== STAR ANIMATION ==================== 
function createStars() {
    const starsContainer = document.querySelector('.stars');
    if (!starsContainer) return;
    
    const starCount = 50;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.style.position = 'absolute';
        star.style.width = Math.random() * 2 + 'px';
        star.style.height = star.style.width;
        star.style.background = 'rgba(255, 255, 255, ' + Math.random() * 0.7 + ')';
        star.style.borderRadius = '50%';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animation = `twinkle ${Math.random() * 3 + 2}s infinite`;
        
        starsContainer.appendChild(star);
    }
}

// Add twinkle animation to stylesheet
const style = document.createElement('style');
style.textContent = `
    @keyframes twinkle {
        0%, 100% { opacity: 0.3; }
        50% { opacity: 1; }
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        animation: rippleEffect 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes rippleEffect {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(1);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Create stars on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createStars);
} else {
    createStars();
}

// ==================== ACTIVE NAV LINK STYLING ==================== 
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// ==================== SCROLL PROGRESS BAR ==================== 
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    // Optional: Create a progress bar if needed
    let progressBar = document.querySelector('.scroll-progress');
    if (!progressBar && scrollPercent > 0) {
        progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            height: 3px;
            background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
            z-index: 999;
            transition: width 0.1s ease-out;
        `;
        document.body.appendChild(progressBar);
    }
    
    if (progressBar) {
        progressBar.style.width = scrollPercent + '%';
    }
});

// ==================== TIMELINE ACTIVATION ==================== 
const timelineItems = document.querySelectorAll('.timeline-item');

const timelineObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.5 });

timelineItems.forEach(item => {
    timelineObserver.observe(item);
});

// ==================== SMOOTH PAGE LOAD ==================== 
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// ==================== CONTACT CARD HOVER EFFECTS ==================== 
const contactCards = document.querySelectorAll('.contact-card');

contactCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ==================== SKILL CATEGORY HOVER ==================== 
const skillCategories = document.querySelectorAll('.skill-category');

skillCategories.forEach(category => {
    category.addEventListener('mouseenter', function() {
        skillCategories.forEach(c => {
            c.style.opacity = '0.6';
        });
        this.style.opacity = '1';
    });
    
    category.addEventListener('mouseleave', function() {
        skillCategories.forEach(c => {
            c.style.opacity = '1';
        });
    });
});

// ==================== THEME DETECTION ==================== 
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.style.colorScheme = 'dark';
}

// ==================== DEBOUNCE FUNCTION FOR SCROLL ==================== 
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// ==================== ACCESSIBILITY ==================== 
// Enhance keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const menu = document.querySelector('.nav-menu');
        if (menu && menu.classList.contains('active')) {
            menu.classList.remove('active');
        }
    }
});

// ==================== INITIAL PAGE ANIMATION ==================== 
document.addEventListener('DOMContentLoaded', () => {
    // Fade in body
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
    
    // Animate terminal lines
    const terminalLines = document.querySelectorAll('.terminal-content p');
    terminalLines.forEach((line, index) => {
        line.style.opacity = '0';
        line.style.animation = `slideInUp 0.3s ease-out ${0.05 * (index + 1)}s both`;
    });
});

// ==================== PERFORMANCE OPTIMIZATION ==================== 
// Use requestAnimationFrame for smooth animations
let scrollTimeout;
window.addEventListener('scroll', debounce(() => {
    // Perform scroll-based operations
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 30px rgba(0, 212, 255, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
}, 100));

// ==================== STATISTICS COUNTER ==================== 
const stats = document.querySelectorAll('.stat-number');

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

// ==================== FORM/CONTACT HANDLING ==================== 
// Add email click handlers
const emailLink = document.querySelector('a[href^="mailto:"]');
const phoneLink = document.querySelector('a[href^="tel:"]');

if (emailLink) {
    emailLink.addEventListener('click', (e) => {
        // Allow default behavior for email links
    });
}

if (phoneLink) {
    phoneLink.addEventListener('click', (e) => {
        // Allow default behavior for phone links
    });
}

console.log('Portfolio website loaded successfully!');

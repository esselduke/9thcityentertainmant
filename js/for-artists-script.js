// ============================================
// 9TH CITY ENTERTAINMENT - For Artists Page JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initializeMenu();
    initializeScrollEffects();
    initializeScrollAnimations();
    initializeSmoothScroll();
});

// ============================================
// MENU FUNCTIONALITY
// ============================================
function initializeMenu() {
    const menuBtn = document.getElementById('menuBtn');
    const sideMenu = document.getElementById('sideMenu');
    const closeBtn = document.getElementById('closeBtn');
    const menuItems = document.querySelectorAll('.menu-items a');

    // Toggle menu
    menuBtn.addEventListener('click', () => {
        sideMenu.classList.toggle('active');
        menuBtn.classList.toggle('active');
    });

    // Close menu button
    closeBtn.addEventListener('click', () => {
        sideMenu.classList.remove('active');
        menuBtn.classList.remove('active');
    });

    // Close menu when clicking menu items
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            sideMenu.classList.remove('active');
            menuBtn.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!sideMenu.contains(e.target) && !menuBtn.contains(e.target) && sideMenu.classList.contains('active')) {
            sideMenu.classList.remove('active');
            menuBtn.classList.remove('active');
        }
    });

    // Close menu on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sideMenu.classList.contains('active')) {
            sideMenu.classList.remove('active');
            menuBtn.classList.remove('active');
        }
    });
}

// ============================================
// SCROLL EFFECTS
// ============================================
function initializeScrollEffects() {
    const heroSection = document.querySelector('.hero-section');
    const heroImage = document.querySelector('.hero-image');

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const heroHeight = heroSection.offsetHeight;

        // Add scrolled class to body
        if (scrollTop > heroHeight * 0.3) {
            document.body.classList.add('scrolled');
        } else {
            document.body.classList.remove('scrolled');
        }

        // Parallax effect on hero image
        if (heroImage && scrollTop < heroHeight) {
            heroImage.style.transform = `translateY(${scrollTop * 0.5}px)`;
        }
    });
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // For sections with child elements to animate
                if (entry.target.classList.contains('approach-section')) {
                    animateApproachCards();
                }
                
                if (entry.target.classList.contains('guidelines-section')) {
                    animateGuidelineItems();
                }
                
                // Don't unobserve so animations can repeat if needed
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe sections
    const sections = document.querySelectorAll('.philosophy-section, .approach-section, .guidelines-section, .warning-section, .opportunities-section');
    sections.forEach(section => observer.observe(section));
}

// ============================================
// ANIMATE APPROACH CARDS
// ============================================
function animateApproachCards() {
    const cards = document.querySelectorAll('.approach-card');
    cards.forEach(card => {
        if (!card.classList.contains('visible')) {
            card.classList.add('visible');
        }
    });
}

// ============================================
// ANIMATE GUIDELINE ITEMS
// ============================================
function animateGuidelineItems() {
    const items = document.querySelectorAll('.guideline-item');
    items.forEach(item => {
        if (!item.classList.contains('visible')) {
            item.classList.add('visible');
        }
    });
}

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#" or empty
            if (href === '#' || href === '') {
                e.preventDefault();
                return;
            }

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============================================
// CTA BUTTON RIPPLE EFFECT
// ============================================
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('mouseenter', function(e) {
        this.style.setProperty('--mouse-x', e.offsetX + 'px');
        this.style.setProperty('--mouse-y', e.offsetY + 'px');
    });
}

// ============================================
// APPROACH CARD HOVER TRACKING
// ============================================
const approachCards = document.querySelectorAll('.approach-card');
approachCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        // Add subtle scale animation
        this.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transition = 'all 0.4s ease';
    });
});

// ============================================
// WARNING BOX PULSE ANIMATION (SUBTLE)
// ============================================
const warningBox = document.querySelector('.warning-box');
if (warningBox) {
    const warningObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add a subtle pulse effect when first visible
                warningBox.style.animation = 'subtlePulse 2s ease-out';
                warningObserver.unobserve(warningBox);
            }
        });
    }, { threshold: 0.5 });
    
    warningObserver.observe(warningBox);
}

// Add pulse animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes subtlePulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.02);
        }
    }
`;
document.head.appendChild(style);

// ============================================
// PHILOSOPHY IMAGE PARALLAX (SUBTLE)
// ============================================
// const philosophyImage = document.querySelector('.content-image');
// if (philosophyImage) {
//     window.addEventListener('scroll', () => {
//         const scrollTop = window.pageYOffset;
//         const imageTop = philosophyImage.getBoundingClientRect().top + scrollTop;
//         const windowHeight = window.innerHeight;
        
        // Only apply parallax when image is in viewport
//         if (scrollTop + windowHeight > imageTop && scrollTop < imageTop + philosophyImage.offsetHeight) {
//             const offset = (scrollTop + windowHeight - imageTop) * 0.1;
//             philosophyImage.style.transform = `translateY(${offset}px) scale(${philosophyImage.parentElement.matches(':hover') ? 1.05 : 1})`;
//         }
//     });
// }

// ============================================
// GUIDELINE MARKERS ANIMATION ON HOVER
// ============================================
const guidelineItems = document.querySelectorAll('.guideline-item');
guidelineItems.forEach(item => {
    const marker = item.querySelector('.guideline-marker');
    
    item.addEventListener('mouseenter', () => {
        marker.style.transition = 'all 0.3s ease';
        marker.style.height = '100%';
        marker.style.background = '#C41E3A';
    });
    
    item.addEventListener('mouseleave', () => {
        marker.style.background = '#b10202';
    });
});

// ============================================
// OPPORTUNITIES CTA GLOW EFFECT
// ============================================
const ctaBtn = document.querySelector('.cta-button');
if (ctaBtn) {
    // Add a subtle glow that intensifies on hover
    ctaBtn.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 0 30px rgba(177, 2, 2, 0.6)';
    });
    
    ctaBtn.addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 5px 20px rgba(177, 2, 2, 0.4)';
    });
}

// ============================================
// PERFORMANCE OPTIMIZATION - DEBOUNCE SCROLL
// ============================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimize scroll listeners
const optimizedScrollHandler = debounce(() => {
    // Any heavy scroll operations can go here
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);

// ============================================
// ACCESSIBILITY - FOCUS VISIBLE
// ============================================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

// Add focus styles dynamically
const focusStyle = document.createElement('style');
focusStyle.textContent = `
    body.keyboard-nav *:focus {
        outline: 2px solid #b10202;
        outline-offset: 2px;
    }
`;
document.head.appendChild(focusStyle);

// ============================================
// EMAIL PROTECTION (SIMPLE OBFUSCATION)
// ============================================
const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
emailLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        // Log for analytics (optional)
        console.log('Email contact initiated:', this.href);
    });
});

// ============================================
// LAZY LOAD IMAGES (IF NEEDED)
// ============================================
const images = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));

// ============================================
// PREVENT SCROLL WHEN LOADING
// ============================================
window.addEventListener('load', () => {
    document.body.style.overflow = 'auto';
});

// ============================================
// CONSOLE BRANDING
// ============================================
console.log('%c 9TH CITY ENTERTAINMENT ', 'background: #C41E3A; color: white; font-size: 20px; font-weight: bold; padding: 10px;');
console.log('%c For Artists - Let\'s Build Something That Lasts ', 'background: #000000; color: white; font-size: 12px; padding: 5px;');
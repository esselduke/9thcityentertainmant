// ============================================
// 9TH CITY ENTERTAINMENT - Contact Page JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initializeMenu();
    initializeScrollEffects();
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
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const heroHeight = heroSection.offsetHeight;

        // Add scrolled class to body when past hero
        if (scrollTop > heroHeight * 0.5) {
            document.body.classList.add('scrolled');
        } else {
            document.body.classList.remove('scrolled');
        }

        // Parallax effect on hero image
        const heroImage = document.querySelector('.hero-image');
        if (heroImage && scrollTop < heroHeight) {
            heroImage.style.transform = `translateY(${scrollTop * 0.5}px)`;
        }

        lastScrollTop = scrollTop;
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
// FAQ ITEM ANIMATION ON SCROLL
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all FAQ items
document.querySelectorAll('.faq-item').forEach(item => {
    observer.observe(item);
});

// ============================================
// CTA CARD CLICK HANDLERS
// ============================================
document.querySelectorAll('.cta-card').forEach(card => {
    card.addEventListener('click', function() {
        const heading = this.querySelector('h3').textContent;
        
        // Map headings to URLs (update these with your actual page URLs)
        const urlMap = {
            'About 9TH CITY': 'index.html#about',
            'Artists & Releases': 'index.html#labels',
            'Projects & Collaborations': 'index.html#impact',
            'For Artists': 'index.html#artists',
            'Join Us': 'index.html#careers',
            'Media / Visuals': 'index.html#innovation'
        };

        if (urlMap[heading]) {
            window.location.href = urlMap[heading];
        }
    });
});

// ============================================
// EMAIL LINK CLICK TRACKING (Optional Analytics)
// ============================================
document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', function() {
        const email = this.getAttribute('href').replace('mailto:', '');
        console.log('Email link clicked:', email);
        // Add analytics tracking here if needed
    });
});

// ============================================
// CONSOLE BRANDING
// ============================================
console.log('%c 9TH CITY ENTERTAINMENT ', 'background: #C41E3A; color: white; font-size: 20px; font-weight: bold; padding: 10px;');
console.log('%c Contact Us - Building World-Class Music Brands ', 'background: #000000; color: white; font-size: 12px; padding: 5px;');
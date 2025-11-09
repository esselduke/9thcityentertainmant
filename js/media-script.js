// ============================================
// 9TH CITY ENTERTAINMENT - Media/Visuals Page JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initializeMenu();
    initializeScrollEffects();
    initializeTabs();
    initializeMediaCards();
    initializeBackToTop();
    initializeVideoModal();
    initializeLightbox();
    initializeScrollAnimations();
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

        // Colorize hero image on scroll
        if (scrollTop > 100) {
            heroImage.style.filter = 'grayscale(0%) contrast(1.1) brightness(0.8)';
        } else {
            heroImage.style.filter = 'grayscale(100%) contrast(1.1) brightness(0.6)';
        }
    });
}

// ============================================
// TAB FILTERING
// ============================================
function initializeTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const mediaCards = document.querySelectorAll('.media-card');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            // Get category
            const category = btn.getAttribute('data-category');
            
            // Filter cards
            filterMediaCards(category, mediaCards);
        });
    });
}

function filterMediaCards(category, mediaCards) {
    mediaCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        if (category === 'all' || cardCategory === category) {
            card.style.display = 'block';
            // Re-trigger scroll animation for filtered items
            setTimeout(() => {
                if (isInViewport(card)) {
                    card.classList.add('visible');
                }
            }, 50);
        } else {
            card.style.display = 'none';
        }
    });
}

// ============================================
// MEDIA CARD INTERACTIONS
// ============================================
function initializeMediaCards() {
    const mediaCards = document.querySelectorAll('.media-card');

    mediaCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Don't trigger if clicking on article link
            if (e.target.classList.contains('article-link')) {
                return;
            }

            const type = card.getAttribute('data-type');
            
            if (type === 'video') {
                const videoId = card.getAttribute('data-video-id');
                openVideoModal(videoId);
            } else if (type === 'image') {
                const imageUrl = card.getAttribute('data-image-url');
                openLightbox(imageUrl);
            }
        });
    });
}

// ============================================
// VIDEO MODAL
// ============================================
function initializeVideoModal() {
    const modal = document.getElementById('videoModal');
    const modalClose = document.getElementById('modalClose');
    const modalBackdrop = document.getElementById('modalBackdrop');

    // Close modal
    modalClose.addEventListener('click', closeVideoModal);
    modalBackdrop.addEventListener('click', closeVideoModal);

    // Close on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeVideoModal();
        }
    });
}

function openVideoModal(videoId) {
    const modal = document.getElementById('videoModal');
    const videoWrapper = document.getElementById('videoWrapper');
    
    // Create YouTube iframe
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    iframe.frameBorder = '0';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    
    videoWrapper.innerHTML = '';
    videoWrapper.appendChild(iframe);
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const videoWrapper = document.getElementById('videoWrapper');
    
    modal.classList.remove('active');
    videoWrapper.innerHTML = '';
    document.body.style.overflow = 'auto';
}

// ============================================
// IMAGE LIGHTBOX
// ============================================
function initializeLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxBackdrop = document.getElementById('lightboxBackdrop');

    // Close lightbox
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxBackdrop.addEventListener('click', closeLightbox);

    // Close on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
}

function openLightbox(imageUrl) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    
    lightboxImage.src = imageUrl;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    
    lightbox.classList.remove('active');
    lightboxImage.src = '';
    document.body.style.overflow = 'auto';
}

// ============================================
// BACK TO TOP BUTTON
// ============================================
function initializeBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
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
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all media cards
    const mediaCards = document.querySelectorAll('.media-card');
    mediaCards.forEach(card => observer.observe(card));
}

// ============================================
// HELPER FUNCTIONS
// ============================================
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
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

// ============================================
// CONSOLE BRANDING
// ============================================
console.log('%c 9TH CITY ENTERTAINMENT ', 'background: #C41E3A; color: white; font-size: 20px; font-weight: bold; padding: 10px;');
console.log('%c Media / Visuals - The Vision Behind the Sound ', 'background: #000000; color: white; font-size: 12px; padding: 5px;');
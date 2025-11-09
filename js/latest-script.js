// ============================================
// 9TH CITY ENTERTAINMENT - Latest Page JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initializeMenu();
    initializeScrollEffects();
    initializeFilters();
    initializeNewsletter();
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
        const heroImage = document.querySelector('.hero-image');
        if (heroImage && scrollTop < heroHeight) {
            heroImage.style.transform = `translateY(${scrollTop * 0.5}px)`;
        }
    });
}

// ============================================
// FILTER FUNCTIONALITY
// ============================================
function initializeFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const newsCards = document.querySelectorAll('.news-card');
    const featuredArticle = document.querySelector('.featured-article');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            // Get filter category
            const filter = btn.getAttribute('data-filter');
            
            // Filter items
            filterItems(filter, newsCards, featuredArticle);
        });
    });
}

function filterItems(filter, newsCards, featuredArticle) {
    // Show/hide featured article
    if (filter === 'all') {
        featuredArticle.style.display = 'grid';
        featuredArticle.style.opacity = '1';
    } else {
        const featuredCategory = featuredArticle.getAttribute('data-category');
        if (filter === featuredCategory) {
            featuredArticle.style.display = 'grid';
            featuredArticle.style.opacity = '1';
        } else {
            featuredArticle.style.display = 'none';
        }
    }
    
    // Show/hide news cards instantly
    newsCards.forEach(card => {
        const category = card.getAttribute('data-category');
        
        if (filter === 'all' || category === filter) {
            card.style.display = 'block';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        } else {
            card.style.display = 'none';
            card.style.opacity = '0';
        }
    });
}

// ============================================
// NEWSLETTER FORM
// ============================================
function initializeNewsletter() {
    const form = document.getElementById('newsletterForm');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const emailInput = form.querySelector('.newsletter-input');
        const email = emailInput.value;
        
        // Validate email
        if (validateEmail(email)) {
            // Show success message
            showMessage('Thank you for subscribing! 🎉', 'success');
            emailInput.value = '';
        } else {
            showMessage('Please enter a valid email address.', 'error');
        }
    });
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    messageDiv.style.cssText = `
        position: fixed;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: ${type === 'success' ? '#4CAF50' : '#f44336'};
        color: white;
        padding: 15px 30px;
        border-radius: 4px;
        z-index: 10000;
        font-size: 14px;
        font-weight: 600;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        animation: slideDown 0.3s ease;
    `;
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.style.animation = 'slideUp 0.3s ease';
        setTimeout(() => {
            messageDiv.remove();
        }, 300);
    }, 3000);
}

// ============================================
// LOAD MORE FUNCTIONALITY
// ============================================
const loadMoreBtn = document.querySelector('.load-more-btn');
if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
        // Simulate loading more content
        loadMoreBtn.textContent = 'Loading...';
        loadMoreBtn.disabled = true;
        
        setTimeout(() => {
            loadMoreBtn.textContent = 'No More Stories';
            loadMoreBtn.style.opacity = '0.5';
            loadMoreBtn.style.cursor = 'not-allowed';
        }, 1000);
        
        // In a real implementation, you would:
        // 1. Fetch more articles from your backend/CMS
        // 2. Append them to the news grid
        // 3. Re-enable the button if more content is available
    });
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
// ADD ANIMATION STYLES DYNAMICALLY
// ============================================
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from {
            transform: translate(-50%, -100%);
            opacity: 0;
        }
        to {
            transform: translate(-50%, 0);
            opacity: 1;
        }
    }
    
    @keyframes slideUp {
        from {
            transform: translate(-50%, 0);
            opacity: 1;
        }
        to {
            transform: translate(-50%, -100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ============================================
// CONSOLE BRANDING
// ============================================
console.log('%c 9TH CITY ENTERTAINMENT ', 'background: #C41E3A; color: white; font-size: 20px; font-weight: bold; padding: 10px;');
console.log('%c Latest News & Updates ', 'background: #000000; color: white; font-size: 12px; padding: 5px;');
// ============================================
// 9TH CITY ENTERTAINMENT - Legal Pages JavaScript
// Shared functionality for: terms.html, privacy.html, rights.html, cookies.html
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initializeMenu();
    initializeScrollEffects();
    initializeSectionToggles();
    initializeSmoothScroll();
    initializePrintButton();
    initializeCookieBanner();
    initializeCookieManager();
    setupAnalyticsHooks();
    logPageLoad();
});

// ============================================
// MENU FUNCTIONALITY
// ============================================
function initializeMenu() {
    const menuBtn = document.getElementById('menuBtn');
    const sideMenu = document.getElementById('sideMenu');
    const closeBtn = document.getElementById('closeBtn');
    const menuItems = document.querySelectorAll('.menu-items a');

    if (!menuBtn || !sideMenu || !closeBtn) return;

    // Toggle menu
    menuBtn.addEventListener('click', () => {
        const isActive = sideMenu.classList.toggle('active');
        menuBtn.classList.toggle('active');
        menuBtn.setAttribute('aria-expanded', isActive);
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = isActive ? 'hidden' : 'auto';
    });

    // Close menu button
    closeBtn.addEventListener('click', closeMenu);

    // Close menu when clicking menu items
    menuItems.forEach(item => {
        item.addEventListener('click', closeMenu);
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!sideMenu.contains(e.target) && !menuBtn.contains(e.target) && sideMenu.classList.contains('active')) {
            closeMenu();
        }
    });

    // Close menu on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sideMenu.classList.contains('active')) {
            closeMenu();
        }
    });

    function closeMenu() {
        sideMenu.classList.remove('active');
        menuBtn.classList.remove('active');
        menuBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = 'auto';
    }
}

// ============================================
// SCROLL EFFECTS
// ============================================
function initializeScrollEffects() {
    let lastScrollTop = 0;
    const heroSection = document.querySelector('.hero-section');
    
    if (!heroSection) return;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const heroHeight = heroSection.offsetHeight;

        // Add scrolled class when past hero
        if (scrollTop > heroHeight * 0.3) {
            document.body.classList.add('scrolled');
        } else {
            document.body.classList.remove('scrolled');
        }

        lastScrollTop = scrollTop;
    });
}

// ============================================
// SECTION TOGGLE ACCORDIONS
// ============================================
function initializeSectionToggles() {
    const toggleButtons = document.querySelectorAll('.section-toggle');
    
    // Set initial state based on screen size
    const isMobile = window.innerWidth < 768;
    
    toggleButtons.forEach((button, index) => {
        const content = button.nextElementSibling;
        
        if (!content) return;
        
        // On mobile, collapse all sections by default except first
        if (isMobile && index > 0) {
            content.classList.add('collapsed');
            button.setAttribute('aria-expanded', 'false');
        } else {
            content.classList.remove('collapsed');
            button.setAttribute('aria-expanded', 'true');
        }
        
        // Add click handler
        button.addEventListener('click', () => {
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            
            // Toggle this section
            content.classList.toggle('collapsed');
            button.setAttribute('aria-expanded', !isExpanded);
            
            // Scroll to section if expanding
            if (isExpanded === false) {
                setTimeout(() => {
                    button.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        });
    });
    
    // Re-initialize on window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            const isMobileNow = window.innerWidth < 768;
            if (isMobileNow !== isMobile) {
                location.reload(); // Reload to reset accordion states
            }
        }, 250);
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
                
                // If target is a section with toggle, expand it first
                const section = target.closest('.legal-section');
                if (section) {
                    const toggle = section.querySelector('.section-toggle');
                    const content = section.querySelector('.section-content');
                    if (toggle && content && content.classList.contains('collapsed')) {
                        content.classList.remove('collapsed');
                        toggle.setAttribute('aria-expanded', 'true');
                    }
                }
                
                // Scroll to target
                setTimeout(() => {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }, 100);
            }
        });
    });
}

// ============================================
// PRINT BUTTON
// ============================================
function initializePrintButton() {
    const printBtn = document.getElementById('printBtn');
    
    if (!printBtn) return;
    
    printBtn.addEventListener('click', () => {
        // Expand all sections before printing
        document.querySelectorAll('.section-content').forEach(content => {
            content.classList.remove('collapsed');
        });
        
        // Wait for layout to update, then print
        setTimeout(() => {
            window.print();
        }, 100);
    });
}

// ============================================
// COOKIE CONSENT BANNER
// ============================================
function initializeCookieBanner() {
    const cookieBanner = document.getElementById('cookieBanner');
    const acceptBtn = document.getElementById('acceptCookies');
    const rejectBtn = document.getElementById('rejectCookies');
    
    if (!cookieBanner) return;
    
    // Check if user has already made a choice
    const cookieConsent = getCookie('9thcity_cookie_consent');
    
    if (!cookieConsent) {
        // Show banner after a short delay
        setTimeout(() => {
            cookieBanner.classList.add('show');
        }, 1000);
    } else {
        // Apply saved preferences
        applyConsent(cookieConsent);
    }
    
    // Accept all cookies
    if (acceptBtn) {
        acceptBtn.addEventListener('click', () => {
            saveConsent('all');
            cookieBanner.classList.remove('show');
        });
    }
    
    // Reject non-essential cookies
    if (rejectBtn) {
        rejectBtn.addEventListener('click', () => {
            saveConsent('essential');
            cookieBanner.classList.remove('show');
        });
    }
}

// ============================================
// COOKIE MANAGER (for cookies.html)
// ============================================
function initializeCookieManager() {
    const saveBtn = document.getElementById('saveCookiePreferences');
    
    if (!saveBtn) return; // Not on cookies.html page
    
    // Load saved preferences
    loadCookiePreferences();
    
    // Save preferences button
    saveBtn.addEventListener('click', () => {
        saveCookiePreferences();
        
        // Show success message
        showNotification('Your cookie preferences have been saved.', 'success');
    });
    
    // Make sure essential cookies toggle is disabled
    const essentialToggle = document.querySelector('[data-cookie-category="essential"]');
    if (essentialToggle) {
        essentialToggle.checked = true;
        essentialToggle.disabled = true;
    }
}

function loadCookiePreferences() {
    const consent = getCookie('9thcity_cookie_consent');
    const preferences = getCookie('9thcity_cookie_preferences');
    
    if (preferences) {
        try {
            const prefs = JSON.parse(decodeURIComponent(preferences));
            
            // Set toggle states
            Object.keys(prefs).forEach(category => {
                const toggle = document.querySelector(`[data-cookie-category="${category}"]`);
                if (toggle) {
                    toggle.checked = prefs[category];
                }
            });
        } catch (e) {
            console.error('Error loading cookie preferences:', e);
        }
    } else if (consent === 'all') {
        // Enable all toggles
        document.querySelectorAll('[data-cookie-category]').forEach(toggle => {
            toggle.checked = true;
        });
    }
}

function saveCookiePreferences() {
    const preferences = {
        essential: true, // Always true
        analytics: false,
        marketing: false
    };
    
    // Get toggle states
    document.querySelectorAll('[data-cookie-category]').forEach(toggle => {
        const category = toggle.getAttribute('data-cookie-category');
        preferences[category] = toggle.checked;
    });
    
    // Save to cookie
    setCookie('9thcity_cookie_preferences', encodeURIComponent(JSON.stringify(preferences)), 365);
    
    // Determine consent level
    const allEnabled = preferences.analytics && preferences.marketing;
    const consentLevel = allEnabled ? 'all' : 'custom';
    setCookie('9thcity_cookie_consent', consentLevel, 365);
    
    // Apply consent
    applyConsent(consentLevel, preferences);
}

function saveConsent(level) {
    setCookie('9thcity_cookie_consent', level, 365);
    
    const preferences = {
        essential: true,
        analytics: level === 'all',
        marketing: level === 'all'
    };
    
    setCookie('9thcity_cookie_preferences', encodeURIComponent(JSON.stringify(preferences)), 365);
    
    applyConsent(level, preferences);
}

function applyConsent(level, preferences = null) {
    // Create global consent object for other scripts to check
    window.__9thcityConsent = {
        level: level,
        analytics: level === 'all' || (preferences && preferences.analytics),
        marketing: level === 'all' || (preferences && preferences.marketing),
        essential: true
    };
    
    // Enable/disable analytics based on consent
    if (window.__9thcityConsent.analytics) {
        enableAnalytics();
    } else {
        disableAnalytics();
    }
    
    // Enable/disable marketing based on consent
    if (window.__9thcityConsent.marketing) {
        enableMarketing();
    } else {
        disableMarketing();
    }
}

// ============================================
// ANALYTICS INTEGRATION HOOKS
// ============================================
/**
 * DEVELOPER NOTE: Analytics Integration
 * 
 * This section provides hooks for integrating with Google Analytics (GA4),
 * Google Tag Manager, or other analytics platforms.
 * 
 * To integrate with GA4:
 * 1. Add your GA4 tracking code in the <head> of each HTML file
 * 2. Wrap the gtag() initialization in a check for window.__9thcityConsent.analytics
 * 3. Use the enableAnalytics() and disableAnalytics() functions below
 * 
 * Example GA4 integration:
 * 
 * <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
 * <script>
 *   window.dataLayer = window.dataLayer || [];
 *   function gtag(){dataLayer.push(arguments);}
 *   gtag('js', new Date());
 *   
 *   // Check consent before initializing
 *   if (window.__9thcityConsent && window.__9thcityConsent.analytics) {
 *     gtag('config', 'G-XXXXXXXXXX');
 *   }
 * </script>
 * 
 * For Google Consent Mode v2:
 * gtag('consent', 'default', {
 *   'analytics_storage': window.__9thcityConsent?.analytics ? 'granted' : 'denied',
 *   'ad_storage': window.__9thcityConsent?.marketing ? 'granted' : 'denied'
 * });
 */

function setupAnalyticsHooks() {
    // Check if consent has been previously set
    const consent = getCookie('9thcity_cookie_consent');
    
    if (consent) {
        const preferences = getCookie('9thcity_cookie_preferences');
        let prefs = null;
        
        if (preferences) {
            try {
                prefs = JSON.parse(decodeURIComponent(preferences));
            } catch (e) {
                console.error('Error parsing preferences:', e);
            }
        }
        
        applyConsent(consent, prefs);
    }
}

function enableAnalytics() {
    console.log('Analytics enabled');
    
    // DEVELOPER NOTE: Add your analytics initialization here
    // Example for GA4:
    /*
    if (typeof gtag === 'function') {
        gtag('consent', 'update', {
            'analytics_storage': 'granted'
        });
    }
    */
    
    // Track page view
    trackPageView();
}

function disableAnalytics() {
    console.log('Analytics disabled');
    
    // DEVELOPER NOTE: Add your analytics disable code here
    // Example for GA4:
    /*
    if (typeof gtag === 'function') {
        gtag('consent', 'update', {
            'analytics_storage': 'denied'
        });
    }
    */
}

function enableMarketing() {
    console.log('Marketing cookies enabled');
    
    // DEVELOPER NOTE: Add your marketing/advertising initialization here
    /*
    if (typeof gtag === 'function') {
        gtag('consent', 'update', {
            'ad_storage': 'granted'
        });
    }
    */
}

function disableMarketing() {
    console.log('Marketing cookies disabled');
    
    // DEVELOPER NOTE: Add your marketing disable code here
    /*
    if (typeof gtag === 'function') {
        gtag('consent', 'update', {
            'ad_storage': 'denied'
        });
    }
    */
}

function trackPageView() {
    // Only track if analytics is enabled
    if (!window.__9thcityConsent || !window.__9thcityConsent.analytics) {
        return;
    }
    
    // DEVELOPER NOTE: Add your page view tracking here
    // Example for GA4:
    /*
    if (typeof gtag === 'function') {
        gtag('event', 'page_view', {
            page_title: document.title,
            page_location: window.location.href,
            page_path: window.location.pathname
        });
    }
    */
    
    console.log('Page view tracked:', document.title);
}

// ============================================
// COOKIE UTILITY FUNCTIONS
// ============================================
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
}

function getCookie(name) {
    const nameEQ = name + "=";
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}

function deleteCookie(name) {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
}

// ============================================
// NOTIFICATION SYSTEM
// ============================================
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.setAttribute('role', 'alert');
    notification.setAttribute('aria-live', 'polite');
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '100px',
        right: '20px',
        padding: '15px 25px',
        background: type === 'success' ? '#28A745' : type === 'error' ? '#DC3545' : '#17A2B8',
        color: 'white',
        borderRadius: '4px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        zIndex: '10000',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '14px',
        fontWeight: '600',
        maxWidth: '400px',
        animation: 'slideInRight 0.4s ease-out'
    });
    
    // Add to page
    document.body.appendChild(notification);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.4s ease-in';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 400);
    }, 5000);
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ============================================
// BROWSER INSTRUCTIONS (for cookies.html)
// ============================================
function getBrowserInstructions() {
    const userAgent = navigator.userAgent;
    
    if (userAgent.includes('Chrome') && !userAgent.includes('Edge')) {
        return {
            name: 'Google Chrome',
            instructions: 'Settings > Privacy and security > Cookies and other site data > See all cookies and site data'
        };
    } else if (userAgent.includes('Firefox')) {
        return {
            name: 'Mozilla Firefox',
            instructions: 'Settings > Privacy & Security > Cookies and Site Data > Manage Data'
        };
    } else if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) {
        return {
            name: 'Safari',
            instructions: 'Preferences > Privacy > Manage Website Data'
        };
    } else if (userAgent.includes('Edge')) {
        return {
            name: 'Microsoft Edge',
            instructions: 'Settings > Cookies and site permissions > Cookies and site data > See all cookies and site data'
        };
    } else {
        return {
            name: 'your browser',
            instructions: 'Check your browser settings under Privacy or Cookies'
        };
    }
}

// ============================================
// PAGE LOAD LOGGING
// ============================================
function logPageLoad() {
    const pageName = document.title;
    const pageUrl = window.location.pathname;
    
    console.log('%c 9TH CITY ENTERTAINMENT ', 'background: #C41E3A; color: white; font-size: 20px; font-weight: bold; padding: 10px;');
    console.log('%c Legal Pages System ', 'background: #000000; color: white; font-size: 12px; padding: 5px;');
    console.log(`Page: ${pageName}`);
    console.log(`URL: ${pageUrl}`);
    
    // Log consent status
    if (window.__9thcityConsent) {
        console.log('Cookie Consent:', window.__9thcityConsent);
    } else {
        console.log('Cookie Consent: Not set');
    }
}

// ============================================
// DEVELOPER UTILITY: Clear All Cookies
// ============================================
// Expose a function to clear all 9TH CITY cookies (for testing)
window.clear9thCityCookies = function() {
    deleteCookie('9thcity_cookie_consent');
    deleteCookie('9thcity_cookie_preferences');
    console.log('All 9TH CITY cookies cleared. Reload the page to see the cookie banner again.');
};

console.log('💡 Developer Tip: Run clear9thCityCookies() in console to reset cookie preferences for testing.');
/* ============================================
   9TH CITY ENTERTAINMENT - JOIN US PAGE JS
   Handles menu, form submission, modals, and interactions
   ============================================ */

// ============================================
// DOM ELEMENTS
// ============================================
const menuBtn = document.getElementById('menuBtn');
const sideMenu = document.getElementById('sideMenu');
const closeBtn = document.getElementById('closeBtn');
const applicationForm = document.getElementById('applicationForm');
const newsletterForm = document.getElementById('newsletterForm');
const roleModal = document.getElementById('roleModal');
const roleModalBackdrop = document.getElementById('roleModalBackdrop');
const roleModalClose = document.getElementById('roleModalClose');
const roleModalBody = document.getElementById('roleModalBody');
const successModal = document.getElementById('successModal');
const successModalBackdrop = document.getElementById('successModalBackdrop');
const successModalClose = document.getElementById('successModalClose');
const jobCards = document.querySelectorAll('.job-card');
const submitBtn = document.getElementById('submitBtn');
const btnLoader = document.getElementById('btnLoader');
const formStatus = document.getElementById('formStatus');

// ============================================
// MENU TOGGLE FUNCTIONALITY
// ============================================
function openMenu() {
    sideMenu.classList.add('active');
    menuBtn.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    sideMenu.classList.remove('active');
    menuBtn.classList.remove('active');
    document.body.style.overflow = '';
}

menuBtn.addEventListener('click', () => {
    if (sideMenu.classList.contains('active')) {
        closeMenu();
    } else {
        openMenu();
    }
});

closeBtn.addEventListener('click', closeMenu);

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (sideMenu.classList.contains('active') && 
        !sideMenu.contains(e.target) && 
        !menuBtn.contains(e.target)) {
        closeMenu();
    }
});

// Close menu on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sideMenu.classList.contains('active')) {
        closeMenu();
    }
});

// ============================================
// SCROLL EFFECTS
// ============================================
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add 'scrolled' class to body after scrolling past hero
    if (currentScroll > 100) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ============================================
// JOB ROLE DATA
// ============================================
const jobRoles = {
    '1': {
        title: 'A&R Coordinator',
        department: 'A&R',
        location: 'Toronto / Remote',
        type: 'Full-time',
        description: 'We\'re looking for a passionate A&R Coordinator to join our team and help us discover and develop the next generation of global talent. You\'ll work closely with our A&R Director to scout emerging artists, coordinate recording sessions, and build relationships with talent across Africa and the diaspora.',
        responsibilities: [
            'Scout and identify emerging talent across various genres and markets',
            'Attend showcases, concerts, and industry events to discover new artists',
            'Coordinate recording sessions and studio bookings',
            'Manage relationships with artists, managers, and industry professionals',
            'Research market trends and competitor activities',
            'Assist with contract negotiations and deal memos',
            'Maintain comprehensive artist database and tracking systems'
        ],
        qualifications: [
            '2+ years experience in A&R, music business, or talent scouting',
            'Deep understanding of African music scenes and global trends',
            'Strong network of industry contacts and artists',
            'Excellent communication and relationship-building skills',
            'Ability to identify commercial and artistic potential',
            'Familiarity with recording processes and music production',
            'Proficiency in music industry software and databases'
        ],
        compensation: 'Competitive salary based on experience, health benefits, and performance bonuses.'
    },
    '2': {
        title: 'Social Media Manager',
        department: 'Marketing',
        location: 'Accra / Remote',
        type: 'Contract',
        description: 'Lead our digital presence and build engaged communities around our artists and label brand. Create compelling content, manage campaigns, and drive audience growth across all major platforms.',
        responsibilities: [
            'Develop and execute social media strategy across all platforms',
            'Create engaging content (graphics, videos, captions) for daily posts',
            'Manage artist social media accounts and campaigns',
            'Monitor trends and adapt content strategy accordingly',
            'Engage with followers and build community',
            'Analyze metrics and report on campaign performance',
            'Coordinate with artists, designers, and marketing team',
            'Plan and execute product launches and promotional campaigns'
        ],
        qualifications: [
            '3+ years experience managing social media for music artists or brands',
            'Proven track record of growing audiences and engagement',
            'Expert knowledge of Instagram, TikTok, Twitter, Facebook, and YouTube',
            'Strong visual design sense and content creation skills',
            'Experience with social media analytics and reporting tools',
            'Understanding of music marketing and release strategies',
            'Excellent copywriting and communication skills',
            'Ability to work independently and meet tight deadlines'
        ],
        compensation: 'Competitive contract rates based on scope and experience.'
    },
    '3': {
        title: 'Music Producer / Engineer',
        department: 'Production',
        location: 'Hybrid / Remote',
        type: 'Project-based',
        description: 'Join our production team to create world-class records for our growing roster of artists. Work on diverse projects spanning Afrobeats, hip-hop, R&B, and more.',
        responsibilities: [
            'Produce original tracks and beats for label artists',
            'Record, mix, and master vocals and instrumentals',
            'Collaborate with artists to develop their sound and vision',
            'Maintain studio equipment and optimize recording workflows',
            'Provide creative direction during recording sessions',
            'Stay current with production trends and techniques',
            'Deliver high-quality final masters on deadline'
        ],
        qualifications: [
            '5+ years professional experience in music production and engineering',
            'Strong portfolio demonstrating diverse production styles',
            'Proficiency in Pro Tools, Logic Pro, Ableton, or similar DAWs',
            'Deep understanding of mixing, mastering, and audio post-production',
            'Experience working with vocalists and instrumentalists',
            'Knowledge of African music production styles and techniques',
            'Professional studio setup for remote work',
            'Strong communication and collaborative skills'
        ],
        compensation: 'Project-based compensation negotiated per assignment. Opportunity for exclusive partnerships.'
    }
};

// ============================================
// JOB ROLE MODAL FUNCTIONALITY
// ============================================
function openRoleModal(roleId) {
    const role = jobRoles[roleId];
    
    if (!role) return;
    
    // Build modal content
    let modalContent = `
        <div class="role-detail">
            <div class="role-detail-header">
                <h2 class="role-detail-title">${role.title}</h2>
                <span class="role-detail-department">${role.department}</span>
            </div>
            
            <div class="role-detail-meta">
                <span class="role-detail-location">📍 ${role.location}</span>
                <span class="role-detail-type">${role.type}</span>
            </div>
            
            <div class="role-detail-section">
                <h3>About the Role</h3>
                <p>${role.description}</p>
            </div>
            
            <div class="role-detail-section">
                <h3>Responsibilities</h3>
                <ul class="role-detail-list">
                    ${role.responsibilities.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
            
            <div class="role-detail-section">
                <h3>Qualifications</h3>
                <ul class="role-detail-list">
                    ${role.qualifications.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
            
            <div class="role-detail-section">
                <h3>Compensation</h3>
                <p>${role.compensation}</p>
            </div>
            
            <div class="role-detail-actions">
                <a href="#application-form" class="btn-primary" id="applyForRole">Apply for This Role</a>
                <button class="btn-secondary" id="closeRoleModal">Close</button>
            </div>
        </div>
    `;
    
    roleModalBody.innerHTML = modalContent;
    roleModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Add event listeners for new buttons
    const applyBtn = document.getElementById('applyForRole');
    const closeRoleBtn = document.getElementById('closeRoleModal');
    
    if (applyBtn) {
        applyBtn.addEventListener('click', () => {
            closeRoleModalFunc();
            // Pre-fill the role in the form
            const roleSelect = document.getElementById('role');
            if (roleSelect) {
                roleSelect.value = role.title.toLowerCase().replace(/\s+/g, '-');
            }
        });
    }
    
    if (closeRoleBtn) {
        closeRoleBtn.addEventListener('click', closeRoleModalFunc);
    }
}

function closeRoleModalFunc() {
    roleModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Event listeners for job cards
jobCards.forEach(card => {
    const roleId = card.getAttribute('data-role-id');
    const ctaBtn = card.querySelector('.job-cta');
    
    if (ctaBtn) {
        ctaBtn.addEventListener('click', () => {
            openRoleModal(roleId);
        });
    }
});

// Close modal events
roleModalClose.addEventListener('click', closeRoleModalFunc);
roleModalBackdrop.addEventListener('click', closeRoleModalFunc);

// Close modal on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && roleModal.classList.contains('active')) {
        closeRoleModalFunc();
    }
});

// ============================================
// FORM VALIDATION
// ============================================
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\d\s\-\+\(\)]+$/;
    return phone.length >= 10 && re.test(phone);
}

function validateURL(url) {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
}

function showError(inputId, message) {
    const errorElement = document.getElementById(`${inputId}Error`);
    const inputElement = document.getElementById(inputId);
    
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
    
    if (inputElement) {
        inputElement.classList.add('error');
        inputElement.setAttribute('aria-invalid', 'true');
    }
}

function clearError(inputId) {
    const errorElement = document.getElementById(`${inputId}Error`);
    const inputElement = document.getElementById(inputId);
    
    if (errorElement) {
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    }
    
    if (inputElement) {
        inputElement.classList.remove('error');
        inputElement.removeAttribute('aria-invalid');
    }
}

// Clear errors on input
const formInputs = applicationForm.querySelectorAll('input, textarea, select');
formInputs.forEach(input => {
    input.addEventListener('input', () => {
        clearError(input.id);
    });
});

// ============================================
// FILE UPLOAD HANDLING
// ============================================
const resumeUpload = document.getElementById('resume');
const portfolioUpload = document.getElementById('portfolio');

function handleFileUpload(inputElement) {
    const fileNameDisplay = inputElement.nextElementSibling;
    const file = inputElement.files[0];
    
    if (file) {
        // Validate file size (10MB max)
        if (file.size > 10 * 1024 * 1024) {
            showError(inputElement.id, 'File size must be less than 10MB');
            inputElement.value = '';
            return;
        }
        
        // Display file name
        if (fileNameDisplay && fileNameDisplay.classList.contains('file-name')) {
            fileNameDisplay.textContent = file.name;
            fileNameDisplay.style.display = 'block';
        }
        
        clearError(inputElement.id);
    }
}

if (resumeUpload) {
    resumeUpload.addEventListener('change', () => handleFileUpload(resumeUpload));
}

if (portfolioUpload) {
    portfolioUpload.addEventListener('change', () => handleFileUpload(portfolioUpload));
}

// ============================================
// APPLICATION FORM SUBMISSION
// ============================================
applicationForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Clear previous errors
    const allInputs = applicationForm.querySelectorAll('input, textarea, select');
    allInputs.forEach(input => clearError(input.id));
    
    // Get form values
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const location = document.getElementById('location').value.trim();
    const role = document.getElementById('role').value;
    const experience = document.getElementById('experience').value;
    const portfolio = document.getElementById('portfolioURL').value.trim();
    const message = document.getElementById('message').value.trim();
    const availability = document.getElementById('availability').value;
    const consent = document.getElementById('consent').checked;
    const recaptcha = document.getElementById('recaptchaCheck').checked;
    
    let hasErrors = false;
    
    // Validation
    if (fullName.length < 2) {
        showError('fullName', 'Please enter your full name');
        hasErrors = true;
    }
    
    if (!validateEmail(email)) {
        showError('email', 'Please enter a valid email address');
        hasErrors = true;
    }
    
    if (!validatePhone(phone)) {
        showError('phone', 'Please enter a valid phone number');
        hasErrors = true;
    }
    
    if (location.length < 2) {
        showError('location', 'Please enter your city/country');
        hasErrors = true;
    }
    
    if (!role) {
        showError('role', 'Please select a role');
        hasErrors = true;
    }
    
    if (!experience) {
        showError('experience', 'Please select your experience level');
        hasErrors = true;
    }
    
    if (portfolio && !validateURL(portfolio)) {
        showError('portfolioURL', 'Please enter a valid URL');
        hasErrors = true;
    }
    
    if (message.length < 50) {
        showError('message', 'Please write at least 50 characters about yourself and why you\'re interested');
        hasErrors = true;
    }
    
    if (!availability) {
        showError('availability', 'Please select your availability');
        hasErrors = true;
    }
    
    if (!consent) {
        showError('consent', 'You must confirm this submission is accurate');
        hasErrors = true;
    }
    
    if (!recaptcha) {
        formStatus.textContent = 'Please complete the reCAPTCHA verification';
        formStatus.className = 'form-status error';
        formStatus.style.display = 'block';
        hasErrors = true;
    }
    
    if (hasErrors) {
        // Scroll to first error
        const firstError = applicationForm.querySelector('.error');
        if (firstError) {
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            firstError.focus();
        }
        return;
    }
    
    // Show loading state
    submitBtn.disabled = true;
    btnLoader.style.display = 'inline-block';
    submitBtn.querySelector('.btn-text').textContent = 'Submitting...';
    formStatus.style.display = 'none';
    
    // Simulate form submission (replace with actual API call)
    try {
        // Here you would send the form data to your backend
        // const response = await fetch('/api/submit-application', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(formData)
        // });
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Success
        applicationForm.reset();
        
        // Clear file name displays
        document.querySelectorAll('.file-name').forEach(el => {
            el.textContent = '';
            el.style.display = 'none';
        });
        
        // Show success modal
        successModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Reset reCAPTCHA
        document.getElementById('recaptchaCheck').checked = false;
        
    } catch (error) {
        // Error handling
        formStatus.textContent = 'Something went wrong. Please try again or contact us directly.';
        formStatus.className = 'form-status error';
        formStatus.style.display = 'block';
    } finally {
        // Reset button state
        submitBtn.disabled = false;
        btnLoader.style.display = 'none';
        submitBtn.querySelector('.btn-text').textContent = 'Submit Application';
    }
});

// ============================================
// SUCCESS MODAL FUNCTIONALITY
// ============================================
function closeSuccessModal() {
    successModal.classList.remove('active');
    document.body.style.overflow = '';
}

successModalClose.addEventListener('click', closeSuccessModal);
successModalBackdrop.addEventListener('click', closeSuccessModal);

// Close success modal on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && successModal.classList.contains('active')) {
        closeSuccessModal();
    }
});

// ============================================
// NEWSLETTER FORM SUBMISSION
// ============================================
newsletterForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    const submitButton = newsletterForm.querySelector('button[type="submit"]');
    const email = emailInput.value.trim();
    
    if (!validateEmail(email)) {
        emailInput.style.borderColor = 'var(--error-red)';
        return;
    }
    
    // Show loading state
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Subscribing...';
    submitButton.disabled = true;
    
    try {
        // Simulate API call (replace with actual newsletter API)
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Success
        submitButton.textContent = 'Subscribed!';
        submitButton.style.background = 'var(--success-green)';
        emailInput.value = '';
        
        setTimeout(() => {
            submitButton.textContent = originalText;
            submitButton.style.background = '';
            submitButton.disabled = false;
        }, 3000);
        
    } catch (error) {
        submitButton.textContent = 'Error - Try Again';
        submitButton.style.background = 'var(--error-red)';
        
        setTimeout(() => {
            submitButton.textContent = originalText;
            submitButton.style.background = '';
            submitButton.disabled = false;
        }, 3000);
    }
});

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Skip if href is just "#"
        if (href === '#') {
            e.preventDefault();
            return;
        }
        
        const target = document.querySelector(href);
        
        if (target) {
            e.preventDefault();
            
            // Close menu if open
            if (sideMenu.classList.contains('active')) {
                closeMenu();
            }
            
            // Smooth scroll to target
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll('.job-card, .faq-item, .collab-item, .internship-item');
animateElements.forEach(el => observer.observe(el));

// ============================================
// ACCESSIBILITY IMPROVEMENTS
// ============================================
// Trap focus in modal when open
function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];
    
    element.addEventListener('keydown', (e) => {
        if (e.key !== 'Tab') return;
        
        if (e.shiftKey) {
            if (document.activeElement === firstFocusable) {
                lastFocusable.focus();
                e.preventDefault();
            }
        } else {
            if (document.activeElement === lastFocusable) {
                firstFocusable.focus();
                e.preventDefault();
            }
        }
    });
}

// Apply focus trap to modals
const roleModalContent = document.getElementById('roleModalContent');
if (roleModalContent) trapFocus(roleModalContent);

const successModalContent = document.querySelector('.success-modal-content');
if (successModalContent) trapFocus(successModalContent);

// ============================================
// CONSOLE MESSAGE
// ============================================
console.log('%c9TH CITY ENTERTAINMENT', 'font-size: 24px; font-weight: bold; color: #b10202;');
console.log('%cJoin Us - Careers & Collaborations', 'font-size: 14px; color: #333;');
console.log('%cInterested in working with us? Submit your application above!', 'font-size: 12px; color: #666;');
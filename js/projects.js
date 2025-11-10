/* ============================================
   9TH CITY ENTERTAINMENT - PROJECTS PAGE JS
   Handles filtering, search, modals, and interactions
   ============================================ */

// ============================================
// PROJECT DATA
// ============================================
const projectsData = {
    'featured': {
        title: 'Global Sound Initiative 2025',
        tagline: 'Connecting African Talent to International Stages',
        type: 'Campaign',
        year: '2025',
        location: 'Global',
        description: 'Our flagship campaign bringing emerging artists from Accra and Toronto to major festival circuits worldwide. A multi-city tour, brand partnerships, and documentary series showcasing the next wave of global music culture.',
        challenge: 'Breaking through international barriers and establishing African artists on global stages while maintaining authenticity.',
        solution: 'Strategic partnerships with major festivals, immersive documentary content, and cultural exchange programs connecting artists across continents.',
        results: [
            '12 festival appearances across 6 countries',
            '5M+ documentary series views',
            '3 major label partnerships established',
            '8 artists signed to international management'
        ],
        gallery: [
            'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&q=80',
            'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=80',
            'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=1200&q=80'
        ],
        credits: 'Creative Director: Sarah Johnson | Campaign Manager: Michael Chen | Documentary Producer: Amara Osei',
        links: [
            { label: 'Watch Documentary', url: '#' },
            { label: 'View Gallery', url: '#' },
            { label: 'Press Coverage', url: 'latest.html' }
        ]
    },
    '1': {
        title: 'Debut Album Launch: Rising Star',
        tagline: 'From Underground to Unstoppable',
        type: 'Campaign',
        year: '2025',
        location: 'Toronto, Canada',
        description: 'Comprehensive album rollout strategy combining viral content, strategic partnerships, and community engagement to launch our newest artist into the spotlight.',
        challenge: 'Building anticipation and reaching target audiences in an oversaturated digital landscape.',
        solution: 'Multi-platform content strategy with behind-the-scenes access, exclusive listening parties, and influencer collaborations.',
        results: [
            '10M+ streams in first month',
            '500K+ social media reach',
            'Featured on 15+ major playlists',
            'Sold out debut tour in 3 cities'
        ],
        gallery: [
            'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=80',
            'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&q=80'
        ],
        credits: 'Marketing Lead: Jordan Williams | Content Producer: Lisa Park',
        links: [
            { label: 'Stream Album', url: '#' },
            { label: 'Behind the Scenes', url: 'media.html' }
        ]
    },
    '2': {
        title: 'Streetwear x Sound Collaboration',
        tagline: 'Fashion Meets Music Culture',
        type: 'Brand Collaboration',
        year: '2024',
        location: 'Accra, Ghana',
        description: 'Limited edition streetwear collection merging fashion and music culture, designed in collaboration with our artists and local designers.',
        challenge: 'Creating authentic merchandise that resonates with both fashion enthusiasts and music fans.',
        solution: 'Co-creation process involving artists, designers, and community feedback to develop culturally relevant designs.',
        results: [
            'Sold out in 72 hours',
            '2,000 units across 3 drops',
            '40% increase in artist merchandise sales',
            'Featured in major fashion publications'
        ],
        gallery: [
            'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=1200&q=80'
        ],
        credits: 'Creative Director: Kofi Mensah | Brand Partnerships: Rachel Thompson',
        links: [
            { label: 'View Collection', url: '#' }
        ]
    },
    '3': {
        title: '9TH CITY Live Showcase',
        tagline: 'One Night. All Our Artists.',
        type: 'Event',
        year: '2024',
        location: 'Toronto, Canada',
        description: 'Sold-out live performance featuring our full roster and special guests, showcasing the diversity and talent of the 9TH CITY family.',
        challenge: 'Creating an unforgettable live experience that represents our brand and artists authentically.',
        solution: 'Intimate venue selection, curated setlists, visual production, and exclusive fan experiences.',
        results: [
            '1,200 attendees (sold out)',
            '3M+ social impressions',
            '50K+ livestream viewers',
            '95% attendee satisfaction rate'
        ],
        gallery: [
            'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&q=80',
            'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&q=80'
        ],
        credits: 'Event Producer: Marcus Lee | Stage Design: Studio Collective',
        links: [
            { label: 'Watch Highlights', url: 'media.html' }
        ]
    },
    '4': {
        title: 'Sounds of the 9TH - Vol. 1',
        tagline: 'Diverse Voices, Unified Vision',
        type: 'Music Project',
        year: '2024',
        location: 'Global Release',
        description: 'Compilation album showcasing diverse talent across Africa and the diaspora, featuring 15 tracks from established and emerging artists.',
        challenge: 'Curating a cohesive collection that highlights individual artistry while maintaining a unified sound.',
        solution: 'Collaborative production process with consistent sonic palette and thematic continuity.',
        results: [
            '25M+ total streams',
            'Top 10 in 8 countries',
            '5 singles charted independently',
            'Grammy consideration (Best Compilation)'
        ],
        gallery: [
            'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1200&q=80'
        ],
        credits: 'Executive Producer: David Okafor | A&R: Simone Baptiste',
        links: [
            { label: 'Stream Now', url: '#' },
            { label: 'Artist Features', url: 'artists-releases.html' }
        ]
    }
};

// ============================================
// DOM ELEMENTS
// ============================================
const menuBtn = document.getElementById('menuBtn');
const sideMenu = document.getElementById('sideMenu');
const closeBtn = document.getElementById('closeBtn');
const searchInput = document.getElementById('searchInput');
const searchClear = document.getElementById('searchClear');
const filterBtns = document.querySelectorAll('.filter-btn');
const sortSelect = document.getElementById('sortSelect');
const projectsGrid = document.getElementById('projectsGrid');
const resultsCount = document.getElementById('resultsCount');
const noResults = document.getElementById('noResults');
const projectModal = document.getElementById('projectModal');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');
const filterSearchSection = document.getElementById('filterSearchSection');

let allProjects = [];
let filteredProjects = [];
let currentFilter = 'all';
let currentSort = 'newest';
let searchQuery = '';

// ============================================
// INITIALIZE
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initializeMenu();
    initializeSearch();
    initializeFilters();
    initializeSort();
    initializeProjects();
    initializeModal();
    initializeScrollEffects();
    initializeScrollAnimations();
});

// ============================================
// MENU FUNCTIONALITY
// ============================================
function initializeMenu() {
    menuBtn.addEventListener('click', () => {
        sideMenu.classList.toggle('active');
        menuBtn.classList.toggle('active');
        document.body.style.overflow = sideMenu.classList.contains('active') ? 'hidden' : '';
    });

    closeBtn.addEventListener('click', closeMenu);

    document.addEventListener('click', (e) => {
        if (sideMenu.classList.contains('active') && 
            !sideMenu.contains(e.target) && 
            !menuBtn.contains(e.target)) {
            closeMenu();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sideMenu.classList.contains('active')) {
            closeMenu();
        }
    });

    document.querySelectorAll('.menu-items a').forEach(item => {
        item.addEventListener('click', closeMenu);
    });
}

function closeMenu() {
    sideMenu.classList.remove('active');
    menuBtn.classList.remove('active');
    document.body.style.overflow = '';
}

// ============================================
// SEARCH FUNCTIONALITY
// ============================================
function initializeSearch() {
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        
        if (searchQuery.length > 0) {
            searchClear.classList.add('visible');
        } else {
            searchClear.classList.remove('visible');
        }
        
        filterProjects();
    });

    searchClear.addEventListener('click', () => {
        searchInput.value = '';
        searchQuery = '';
        searchClear.classList.remove('visible');
        filterProjects();
        searchInput.focus();
    });
}

// ============================================
// FILTER FUNCTIONALITY
// ============================================
function initializeFilters() {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.getAttribute('data-filter');
            filterProjects();
        });
    });
}

// ============================================
// SORT FUNCTIONALITY
// ============================================
function initializeSort() {
    sortSelect.addEventListener('change', (e) => {
        currentSort = e.target.value;
        sortProjects();
        renderProjects();
    });
}

// ============================================
// INITIALIZE PROJECTS
// ============================================
function initializeProjects() {
    allProjects = Array.from(projectsGrid.querySelectorAll('.project-card')).map(card => {
        return {
            element: card,
            category: card.getAttribute('data-category'),
            title: card.querySelector('.card-title').textContent.toLowerCase(),
            summary: card.querySelector('.card-summary').textContent.toLowerCase(),
            date: card.querySelector('.card-date').textContent,
            projectId: card.getAttribute('data-project-id')
        };
    });
    
    filteredProjects = [...allProjects];
    updateResultsCount();
    
    // Add click handlers
    allProjects.forEach(project => {
        project.element.addEventListener('click', () => {
            openProjectModal(project.projectId);
        });
    });
    
    // Initialize featured project click
    const featuredProject = document.querySelector('.featured-project');
    if (featuredProject) {
        const ctaBtn = featuredProject.querySelector('.cta-btn');
        if (ctaBtn) {
            ctaBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                openProjectModal('featured');
            });
        }
    }
}

// ============================================
// FILTER PROJECTS
// ============================================
function filterProjects() {
    filteredProjects = allProjects.filter(project => {
        const matchesFilter = currentFilter === 'all' || project.category === currentFilter;
        const matchesSearch = searchQuery === '' || 
            project.title.includes(searchQuery) || 
            project.summary.includes(searchQuery);
        
        return matchesFilter && matchesSearch;
    });
    
    sortProjects();
    renderProjects();
    updateResultsCount();
}

// ============================================
// SORT PROJECTS
// ============================================
function sortProjects() {
    filteredProjects.sort((a, b) => {
        switch (currentSort) {
            case 'newest':
                return b.date.localeCompare(a.date);
            case 'oldest':
                return a.date.localeCompare(b.date);
            case 'alphabetical':
                return a.title.localeCompare(b.title);
            default:
                return 0;
        }
    });
}

// ============================================
// RENDER PROJECTS
// ============================================
function renderProjects() {
    // Hide all projects first
    allProjects.forEach(project => {
        project.element.style.display = 'none';
    });
    
    // Show filtered projects
    if (filteredProjects.length === 0) {
        noResults.classList.remove('hidden');
        projectsGrid.classList.add('hidden');
    } else {
        noResults.classList.add('hidden');
        projectsGrid.classList.remove('hidden');
        
        filteredProjects.forEach((project, index) => {
            project.element.style.display = 'block';
            project.element.style.animationDelay = `${index * 0.05}s`;
        });
    }
}

// ============================================
// UPDATE RESULTS COUNT
// ============================================
function updateResultsCount() {
    const count = filteredProjects.length;
    const plural = count === 1 ? 'project' : 'projects';
    resultsCount.textContent = `Showing ${count} ${plural}`;
}

// ============================================
// MODAL FUNCTIONALITY
// ============================================
function initializeModal() {
    modalClose.addEventListener('click', closeProjectModal);
    modalBackdrop.addEventListener('click', closeProjectModal);
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && projectModal.classList.contains('active')) {
            closeProjectModal();
        }
    });
}

function openProjectModal(projectId) {
    const project = projectsData[projectId];
    
    if (!project) return;
    
    // Build modal content
    let modalHTML = `
        <div class="modal-project-detail">
            <div class="modal-header-section">
                <span class="modal-badge">${project.type}</span>
                <h2 class="modal-title">${project.title}</h2>
                <p class="modal-tagline">${project.tagline}</p>
                <div class="modal-meta">
                    <span class="modal-year">${project.year}</span>
                    <span class="modal-separator">•</span>
                    <span class="modal-location">${project.location}</span>
                </div>
            </div>
            
            <div class="modal-section">
                <h3 class="modal-section-title">About the Project</h3>
                <p class="modal-text">${project.description}</p>
            </div>
    `;
    
    if (project.challenge) {
        modalHTML += `
            <div class="modal-section">
                <h3 class="modal-section-title">The Challenge</h3>
                <p class="modal-text">${project.challenge}</p>
            </div>
        `;
    }
    
    if (project.solution) {
        modalHTML += `
            <div class="modal-section">
                <h3 class="modal-section-title">Our Solution</h3>
                <p class="modal-text">${project.solution}</p>
            </div>
        `;
    }
    
    if (project.results) {
        modalHTML += `
            <div class="modal-section">
                <h3 class="modal-section-title">Results & Impact</h3>
                <ul class="modal-results-list">
                    ${project.results.map(result => `<li>${result}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    
    if (project.gallery) {
        modalHTML += `
            <div class="modal-section">
                <h3 class="modal-section-title">Gallery</h3>
                <div class="modal-gallery">
                    ${project.gallery.map(img => `
                        <img src="${img}" alt="Project gallery image" class="gallery-image">
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    if (project.credits) {
        modalHTML += `
            <div class="modal-section">
                <h3 class="modal-section-title">Credits</h3>
                <p class="modal-credits">${project.credits}</p>
            </div>
        `;
    }
    
    if (project.links) {
        modalHTML += `
            <div class="modal-section">
                <h3 class="modal-section-title">Links</h3>
                <div class="modal-links">
                    ${project.links.map(link => `
                        <a href="${link.url}" class="modal-link-btn" target="_blank">${link.label} →</a>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    modalHTML += `</div>`;
    
    // Add styles for modal content
    const modalStyles = `
        <style>
            .modal-project-detail { padding: 20px; }
            .modal-header-section { margin-bottom: 40px; text-align: center; }
            .modal-badge { 
                display: inline-block;
                padding: 6px 12px;
                font-size: 10px;
                font-weight: 700;
                letter-spacing: 1px;
                background: var(--primary-red);
                color: var(--primary-white);
                border-radius: 3px;
                margin-bottom: 15px;
            }
            .modal-title { 
                font-size: 28px;
                font-weight: 600;
                color: var(--dark-gray);
                margin-bottom: 10px;
                letter-spacing: 0.5px;
            }
            .modal-tagline { 
                font-size: 16px;
                font-weight: 600;
                color: var(--primary-red);
                margin-bottom: 15px;
            }
            .modal-meta { 
                font-size: 13px;
                color: var(--medium-gray);
            }
            .modal-separator { margin: 0 10px; }
            .modal-section { 
                margin-bottom: 35px;
                padding-bottom: 35px;
                border-bottom: 1px solid var(--light-gray);
            }
            .modal-section:last-child { border-bottom: none; }
            .modal-section-title { 
                font-size: 16px;
                font-weight: 600;
                color: var(--dark-gray);
                margin-bottom: 15px;
                letter-spacing: 0.3px;
            }
            .modal-text { 
                font-size: 14px;
                line-height: 1.8;
                color: var(--text-gray);
            }
            .modal-results-list { 
                list-style: none;
                padding: 0;
            }
            .modal-results-list li {
                font-size: 14px;
                line-height: 1.8;
                color: var(--text-gray);
                padding-left: 25px;
                position: relative;
                margin-bottom: 10px;
            }
            .modal-results-list li::before {
                content: '✓';
                position: absolute;
                left: 0;
                color: var(--primary-red);
                font-weight: 700;
            }
            .modal-gallery {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 15px;
            }
            .gallery-image {
                width: 100%;
                height: 200px;
                object-fit: cover;
                border-radius: 4px;
                filter: grayscale(100%) contrast(1.1);
                transition: all 0.3s ease;
            }
            .gallery-image:hover {
                filter: grayscale(0%) contrast(1.1);
                transform: scale(1.02);
            }
            .modal-credits {
                font-size: 12px;
                line-height: 1.6;
                color: var(--medium-gray);
                font-style: italic;
            }
            .modal-links {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
            }
            .modal-link-btn {
                display: inline-block;
                padding: 10px 20px;
                font-size: 13px;
                font-weight: 600;
                background: var(--light-gray);
                color: var(--dark-gray);
                text-decoration: none;
                border-radius: 4px;
                transition: all 0.3s ease;
            }
            .modal-link-btn:hover {
                background: var(--primary-red);
                color: var(--primary-white);
            }
            @media (max-width: 768px) {
                .modal-title { font-size: 24px; }
                .modal-gallery { grid-template-columns: 1fr; }
            }
        </style>
    `;
    
    modalBody.innerHTML = modalStyles + modalHTML;
    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    projectModal.classList.remove('active');
    document.body.style.overflow = '';
    modalBody.innerHTML = '';
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
            filterSearchSection.classList.add('scrolled');
        } else {
            document.body.classList.remove('scrolled');
            filterSearchSection.classList.remove('scrolled');
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
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe sections
    const sections = document.querySelectorAll('.featured-project-section, .footer-cta-section');
    sections.forEach(section => observer.observe(section));
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
console.log('%c9TH CITY ENTERTAINMENT', 'font-size: 24px; font-weight: bold; color: #b10202;');
console.log('%cProjects - Creative campaigns shaping tomorrow\'s sound', 'font-size: 14px; color: #333;');
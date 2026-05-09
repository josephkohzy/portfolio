// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Gallery reveal on scroll
const galleryObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('.gallery-item').forEach(el => {
    galleryObserver.observe(el);
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Video Modal for Reel Button
const reelBtn = document.getElementById('reelBtn');
const videoModal = document.getElementById('videoModal');
const videoClose = document.querySelector('.video-close');
const reelVideo = document.getElementById('reelVideo');

// Replace this URL with your actual YouTube/Vimeo video URL
// ⚠️  REPLACE THIS with your actual YouTube embed URL once uploaded
// Format: 'https://www.youtube.com/embed/YOUR_VIDEO_ID'
const VIDEO_URL = 'https://www.youtube.com/embed/gHYi3YxvEY0?si=S-b7Du3GepbootZY';

if (reelBtn) {
    reelBtn.addEventListener('click', () => {
        videoModal.style.display = 'block';
        reelVideo.src = VIDEO_URL + (VIDEO_URL.includes('?') ? '&' : '?') + 'autoplay=1';
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    });
}

if (videoClose) {
    videoClose.addEventListener('click', closeVideoModal);
}

// Close modal when clicking outside the video
if (videoModal) {
    videoModal.addEventListener('click', function(e) {
        if (e.target === videoModal) {
            closeVideoModal();
        }
    });
}

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && videoModal && videoModal.style.display === 'block') {
        closeVideoModal();
    }
});

function closeVideoModal() {
    videoModal.style.display = 'none';
    reelVideo.src = ''; // Stop video playback
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Parallax hero (only on pages with hero section)
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.4}px)`;
    }
});

// Glitch effect on logo
const logo = document.querySelector('.logo');
if (logo) {
    setInterval(() => {
        if (Math.random() > 0.95) {
            logo.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
            setTimeout(() => {
                logo.style.transform = '';
            }, 50);
        }
    }, 100);
}

// Clean paint trail - subtle and crisp (desktop only)
if (!('ontouchstart' in window)) {
let lastX = 0;
let lastY = 0;
let isDrawing = false;

document.addEventListener('mousedown', () => isDrawing = true);
document.addEventListener('mouseup', () => isDrawing = false);

document.addEventListener('mousemove', (e) => {
    const deltaX = e.clientX - lastX;
    const deltaY = e.clientY - lastY;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    
    // Only create trail when mouse moves and occasionally
    if (distance > 5 && Math.random() > 0.75) {
        const trail = document.createElement('div');
        const size = 4 + Math.random() * 4;
        
        // Alternate between rust and lime colors
        const colors = ['#ff6b35', '#00ff88'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        trail.style.cssText = `
            position: fixed;
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            pointer-events: none;
            left: ${e.clientX - size/2}px;
            top: ${e.clientY - size/2}px;
            z-index: 9999;
            border-radius: 50%;
            animation: cleanFade 1.5s ease-out forwards;
        `;
        document.body.appendChild(trail);
        setTimeout(() => trail.remove(), 1500);
    }
    
    lastX = e.clientX;
    lastY = e.clientY;
});
} // end touch guard

const style = document.createElement('style');
style.textContent = `
    @keyframes cleanFade {
        0% {
            opacity: 0.6;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(0.3);
        }
    }
`;
document.head.appendChild(style);

// Contact form is handled by the Formspree AJAX handler in contact.html

// ── Mobile Hamburger Menu ─────────────────────────────────────────────────
(function () {
    // Inject hamburger button into every nav
    const nav = document.querySelector('nav');
    if (!nav) return;

    // Create hamburger button
    const hamburger = document.createElement('button');
    hamburger.className = 'hamburger';
    hamburger.setAttribute('aria-label', 'Toggle menu');
    hamburger.innerHTML = '<span></span><span></span><span></span>';
    nav.appendChild(hamburger);

    // Create full-screen mobile nav overlay
    const overlay = document.createElement('div');
    overlay.className = 'mobile-nav-overlay';

    // Clone nav links for the overlay
    const navLinks = nav.querySelector('.nav-links');
    const clonedLinks = navLinks ? navLinks.cloneNode(true) : document.createElement('ul');

    // Close button inside overlay
    const closeBtn = document.createElement('button');
    closeBtn.className = 'mobile-nav-close';
    closeBtn.setAttribute('aria-label', 'Close menu');
    closeBtn.innerHTML = '&times;';

    overlay.appendChild(closeBtn);
    overlay.appendChild(clonedLinks);
    document.body.appendChild(overlay);

    function openMenu() {
        overlay.classList.add('open');
        hamburger.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        overlay.classList.remove('open');
        hamburger.classList.remove('open');
        document.body.style.overflow = '';
    }

    hamburger.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);

    // Close when a nav link is clicked
    overlay.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('open')) closeMenu();
    });
})();

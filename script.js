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
const VIDEO_URL = 'https://www.youtube.com/embed/dQw4w9WgXcQ'; // Example - replace with your reel URL

if (reelBtn) {
    reelBtn.addEventListener('click', () => {
        videoModal.style.display = 'block';
        reelVideo.src = VIDEO_URL + '?autoplay=1';
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

// Clean paint trail - subtle and crisp
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

// Contact form submission (basic example)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        // For now, we'll just show an alert
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
}

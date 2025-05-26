// Particle.js configuration
particlesJS('hero-particles', {
    particles: {
        number: {
            value: 70,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#ffffff'
        },
        opacity: {
            value: 0.3,
            random: true
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 100,
            color: '#ffffff',
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 4,
            direction: 'none',
            random: true,
            out_mode: 'out'
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            resize: true
        }
    },
    retina_detect: true
});

// Animate stats when in viewport
const stats = document.querySelectorAll('.stat-number');
const progressBars = document.querySelectorAll('.stat-progress');

const animateStats = () => {
    stats.forEach((stat) => {
        const target = parseInt(stat.getAttribute('data-target'));
        let current = 0;
        const increment = target / 100;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                stat.textContent = Math.ceil(current);
                setTimeout(updateCounter, 20);
            } else {
                stat.textContent = target;
            }
        };
        
        updateCounter();
    });

    progressBars.forEach((bar) => {
        bar.style.width = '100%';
    });
};

// Trigger animations when elements are in viewport
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            observer.unobserve(entry.target);
        }
    });
});

document.querySelector('.stats-section').querySelectorAll('.stat-card').forEach((stat) => {
    observer.observe(stat);
});
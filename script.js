// Initialize Vanilla Tilt with specific settings for smoothness
VanillaTilt.init(document.querySelectorAll(".tilt-card"), {
    max: 10,              // Max tilt rotation (degrees)
    speed: 1000,          // Speed of the enter/exit transition
    glare: true,          // Enables glare effect
    "max-glare": 0.2,     // Maximum glare opacity
    gyroscope: true,      // Enables tilting via device orientation on mobile
    perspective: 2000     // Transform perspective (lower = more extreme)
});

// Optional: Log successful initialization
console.log("Interactive stage initialized.");

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('img');
    const progress = document.querySelector('.progress');
    const loadingText = document.querySelector('.loading-text');
    const preloader = document.getElementById('preloader');
    const hero = document.querySelector('.hero-viewport');
    
    let loadedCount = 0;
    const totalImages = images.length;

    function updateProgress() {
        loadedCount++;
        let percentage = Math.round((loadedCount / totalImages) * 100);
        
        progress.style.width = percentage + "%";
        loadingText.innerText = percentage + "%";

        if (loadedCount === totalImages) {
            // Wait 500ms so the user can see 100% before it fades
            setTimeout(() => {
                preloader.classList.add('preloader-hidden');
                hero.classList.add('hero-visible');
            }, 500);
        }
    }

    // Check if images are already cached/loaded
    images.forEach(img => {
        if (img.complete) {
            updateProgress();
        } else {
            img.addEventListener('load', updateProgress);
            img.addEventListener('error', updateProgress); // Move on even if an image fails
        }
    });

    // Fallback: If it takes too long (e.g., 5 seconds), just show the site
    setTimeout(() => {
        if (!preloader.classList.contains('preloader-hidden')) {
            preloader.classList.add('preloader-hidden');
            hero.classList.add('hero-visible');
        }
    }, 5000);
});
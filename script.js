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
// Minimalist Brand Selection Architecture Handler
document.addEventListener("DOMContentLoaded", () => {
    const frameworkToggles = document.querySelectorAll('.brand-toggle');

    frameworkToggles.forEach(toggleButton => {
        toggleButton.addEventListener('click', (e) => {
            const targetedVariant = e.currentTarget.getAttribute('data-set-brand');
            
            // Switch current contextual environment variables
            document.body.setAttribute('data-theme', targetedVariant);
            
            // Update button UI styles for student view presentation tracking
            frameworkToggles.forEach(btn => btn.classList.remove('active'));
            e.currentTarget.classList.add('active');
        });
    });
});

// ==========================================================================
// Scroll Motion Intersection Trigger System
// ==========================================================================

const initScrollAnimations = () => {
    // Select all components using our specific motion attribute selector
    const shiftingPanels = document.querySelectorAll('.panel-reveal');

    const trackingRules = {
        root: null, // Tracks components relative to the primary browser viewport window
        rootMargin: "0px 0px -10% 0px", // Fires exactly when an object crosses 10% up past the bottom screen lip
        threshold: 0.1 // Triggers once 10% of the target component is physically inside view
    };

    const motionEngine = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Check if the component window intersection condition is satisfied
            if (entry.isIntersecting) {
                // Apply the rendering activation class rule to trigger transition states
                entry.target.classList.add('is-active');
                
                // Discontinue asset observation immediately to maximize hardware efficiency
                observer.unobserve(entry.target);
            }
        });
    }, trackingRules);

    // Initialise loop engine structures
    shiftingPanels.forEach(panel => motionEngine.observe(panel));
};

// Fire engine functions securely upon complete resource availability hooks
initScrollAnimations();

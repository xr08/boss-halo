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

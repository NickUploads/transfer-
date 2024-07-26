document.addEventListener('DOMContentLoaded', (event) => {
    const overlay = document.querySelector('.page-transition-overlay');

    // Function to show the loading overlay
    function showOverlay() {
        overlay.classList.add('active');
    }

    // Function to hide the loading overlay
    function hideOverlay() {
        overlay.classList.remove('active');
    }

    // Add click event listeners to all internal links
    document.querySelectorAll('a').forEach(link => {
        if (link.hostname === window.location.hostname) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const href = this.getAttribute('href');
                showOverlay();
                setTimeout(() => {
                    window.location.href = href;
                }, 300); // Delay to allow the overlay to become visible
            });
        }
    });

    // Hide overlay when page has loaded
    window.addEventListener('load', hideOverlay);

    // Show overlay when user tries to leave the page
    window.addEventListener('beforeunload', showOverlay);
});
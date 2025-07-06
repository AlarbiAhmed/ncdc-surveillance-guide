document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mainNavUl = document.querySelector('.main-nav ul');
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    // Toggle mobile navigation
    if (mobileMenuToggle && mainNavUl) {
        mobileMenuToggle.addEventListener('click', function () {
            mainNavUl.classList.toggle('nav-open');
        });
    }

    // Toggle dropdowns on mobile
    if (window.innerWidth <= 768) {
        dropdownToggles.forEach(toggle => {
            toggle.addEventListener('click', function (e) {
                e.preventDefault(); // Prevent link navigation
                const dropdownContent = this.nextElementSibling;
                if (dropdownContent && dropdownContent.classList.contains('dropdown-content')) {
                    // Simple toggle display
                    if (dropdownContent.style.display === 'block') {
                        dropdownContent.style.display = 'none';
                    } else {
                        dropdownContent.style.display = 'block';
                    }
                }
            });
        });
    }
});
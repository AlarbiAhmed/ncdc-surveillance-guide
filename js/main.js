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

    // Handle dropdowns on mobile
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
                        // Close other open dropdowns first
                        document.querySelectorAll('.main-nav .dropdown-content').forEach(d => d.style.display = 'none');
                        dropdownContent.style.display = 'block';
                    }
                }
            });
        });
    }

    // Disease Filter Logic
    const filterButtons = document.querySelectorAll('.filter-btn');
    const diseaseItems = document.querySelectorAll('.disease-list li');

    if (filterButtons.length > 0 && diseaseItems.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Handle active button state
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');

                const filter = this.getAttribute('data-filter');

                diseaseItems.forEach(item => {
                    const categories = item.getAttribute('data-category');
                    if (filter === 'all' || (categories && categories.includes(filter))) {
                        item.classList.remove('hidden');
                    } else {
                        item.classList.add('hidden');
                    }
                });
            });
        });
    }
});
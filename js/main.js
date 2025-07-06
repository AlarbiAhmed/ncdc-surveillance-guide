// --- NEW SCRIPT TO ADD --- //

// Disease Filter Logic
document.addEventListener('DOMContentLoaded', function() {
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
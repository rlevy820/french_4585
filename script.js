document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const modals = document.querySelectorAll('.modal');

    // Add click handler for cards
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const cardType = card.getAttribute('data-card');
            const modal = document.getElementById(`${cardType}Modal`);
            if (modal) {
                modal.classList.add('active');
                // Auto-flip the card after a short delay
                setTimeout(() => {
                    const modalCardInner = modal.querySelector('.modal-card-inner');
                    modalCardInner.classList.add('flipped');
                }, 100);
            }
        });
    });

    // Close modal when clicking outside
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            // Only close if clicking the modal background (not the content)
            if (e.target === modal) {
                // Remove flipped class first
                const modalCardInner = modal.querySelector('.modal-card-inner');
                modalCardInner.classList.remove('flipped');
                // Then remove active class after animation completes
                setTimeout(() => {
                    modal.classList.remove('active');
                }, 800); // Match the flip animation duration
            }
        });
    });

    // Prevent text selection on card click
    cards.forEach(card => {
        card.addEventListener('mousedown', (e) => {
            e.preventDefault();
        });
    });
});

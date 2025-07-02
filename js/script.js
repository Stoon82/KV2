document.addEventListener('DOMContentLoaded', function() {

    // --- Timeline Highlighting --- //
    const now = new Date(); // Use current date
    const endOf2025 = new Date('2025-12-31T23:59:59');
    const startOf2026 = new Date('2026-01-01T00:00:00');
    const endOfJuly2026 = new Date('2026-07-31T23:59:59');
    const fall2026 = new Date('2026-09-01T00:00:00');

    const step1 = document.getElementById('step-1');
    const step2 = document.getElementById('step-2');
    const step3 = document.getElementById('step-3');

    if (now <= endOf2025) {
        step1.classList.add('active-step');
    } else if (now >= startOf2026 && now <= endOfJuly2026) {
        step2.classList.add('active-step');
    } else if (now >= fall2026) {
        step3.classList.add('active-step');
    }

    // --- Form Validation --- //
    const form = document.querySelector('.contact-form-container form');
    if (form) {
        form.addEventListener('submit', function(event) {
            const name = document.getElementById('name').value;
            const message = document.getElementById('message').value;
            const city = document.getElementById('city').value;

            if (name.trim() === '' || message.trim() === '' || city.trim() === '') {
                alert('Bitte füllen Sie alle erforderlichen Felder aus (Name, Nachricht, Stadt).');
                event.preventDefault(); // Prevent form submission
            }
        });
    }

    // --- Scroll Reveal Animation --- //
    function reveal() {
        const reveals = document.querySelectorAll('.reveal');
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementVisible = 50; // Distance from bottom of viewport

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('active');
            } else {
                // Optional: remove class to re-animate on scroll up
                // reveals[i].classList.remove('active'); 
            }
        }
    }

    window.addEventListener('scroll', reveal);
    reveal(); // Trigger on load

});

const funFacts = [
    "I can name all 1st generation Pokemon",
    "I've been playing piano since I was 12 years old.",
    "My favorite color is black!",
    "I once built a system for SMS Queueing.",
    "I drink hot water everytime I wake-up in the morning.",
    "I've been an OFW in Japan!"
];

const funFactBtn = document.getElementById('funFactBtn');
const funFactDisplay = document.getElementById('funFact');

funFactBtn.addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    funFactDisplay.textContent = funFacts[randomIndex];
    funFactDisplay.classList.add('show');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

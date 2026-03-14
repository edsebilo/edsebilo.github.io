document.addEventListener('DOMContentLoaded', () => {
    const facts = [
        "I can name all 1st generation Pokemon",
        "I've been playing piano since I was 12 years old.",
        "My favorite color is black!",
        "I once built a system for SMS Queueing.",
        "I drink hot water everytime I wake-up in the morning.",
        "I've been an OFW in Japan!"
    ];

    const btn = document.getElementById('funFactBtn');
    const display = document.getElementById('funFact');
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');
    const heroHeading = document.querySelector('.hero h2');

    // Set royalty-free lofi music source
    if (bgMusic) {
        bgMusic.src = 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-coffee-136614.mp3';
        bgMusic.volume = 0.3;
    }

    const launchConfetti = () => {
        const colors = ['#e74c3c', '#3498db', '#f1c40f', '#2ecc71', '#9b59b6', '#1abc9c', '#e67e22', '#34495e'];
        for (let i = 0; i < 50; i++) {
            const conf = document.createElement('div');
            conf.className = 'confetti';
            conf.style.left = Math.random() * 100 + 'vw';
            conf.style.animationDuration = 1 + Math.random() * 2 + 's';
            conf.style.animationDelay = Math.random() * 0.5 + 's';
            conf.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            document.body.appendChild(conf);
            setTimeout(() => conf.remove(), 3000);
        }
    };

    const startDancing = () => {
        if (heroHeading) heroHeading.classList.add('dancing');
    };

    const stopDancing = () => {
        if (heroHeading) heroHeading.classList.remove('dancing');
    };

    if (btn && display) {
        btn.addEventListener('click', () => {
            display.textContent = facts[Math.floor(Math.random() * facts.length)];
            display.classList.add('show');
            launchConfetti();
            startDancing();
            setTimeout(stopDancing, 3000);
        });
    }

    if (musicToggle && bgMusic) {
        musicToggle.addEventListener('click', () => {
            if (bgMusic.paused) {
                bgMusic.play().catch(e => console.log('Click to play music'));
                musicToggle.textContent = '⏸️';
            } else {
                bgMusic.pause();
                musicToggle.textContent = '🎵';
            }
        });
    }

    // Intro dance
    setTimeout(startDancing, 1500);
    setTimeout(stopDancing, 4500);

    document.querySelectorAll('a[href^="#"]').forEach(anchor =>
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        })
    );
});
document.addEventListener('DOMContentLoaded', () => {

    const reveals = document.querySelectorAll(
        '.intro, .image-pause, .quote, .split, .article, .gallery'
    );

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                } else {
                    entry.target.classList.remove('is-visible');
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    reveals.forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });

    // Rotation du sticker au scroll
    const sticker = document.querySelector('.sticker-board');

    if (sticker) {
        window.addEventListener('scroll', () => {
            const rotation = window.scrollY * 0.15;
            sticker.style.transform = `rotate(${rotation - 12}deg)`;
        });
    }

});
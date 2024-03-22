document.addEventListener('DOMContentLoaded', function () {
    new Glide('.glide', {
        type: 'carousel', 
        startAt: 0, 
        perView: 3, 
        focusAt: 'center', 
        gap: 20, 
        breakpoints: {
            768: {
                perView: 1 
            }
        }
    }).mount();
});

// Glide arrows
document.addEventListener('DOMContentLoaded', function () {
    new Glide('.glide', {
        type: 'carousel',
        autoplay: 5000, 
        animationDuration: 1000, 
    }).mount();
});

// LightBox
document.addEventListener('DOMContentLoaded', function () {
    const lightboxTriggers = document.querySelectorAll('.lightbox-trigger');
    const overlay = document.querySelector('.overlay');

    lightboxTriggers.forEach(trigger => {
        trigger.addEventListener('click', function () {
            const imageUrl = this.getAttribute('src');
            overlay.innerHTML = `<img src="${imageUrl}" alt="Expanded Image">`;
            overlay.classList.add('active');
        });
    });

    overlay.addEventListener('click', function () {
        overlay.classList.remove('active');
    });
});

// Gradient
document.addEventListener('DOMContentLoaded', function () {
    const granimInstance = new Granim({
        element: '#granim-canvas',
        direction: 'left-right', // Customize gradient direction as needed
        states: {
            "default-state": {
                gradients: [
                    ['#ff9966', '#ff5e62'],
                    ['#00F260', '#0575E6'],
                    ['#1e3c72', '#2a5298']
                ]
            }
        }
    });
});


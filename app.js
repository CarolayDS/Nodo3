

function openModal(videoId) {
    const iframeSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    document.getElementById("youtubeVideo").src = iframeSrc;
    document.getElementById("videoModal").classList.remove("hidden");
}

function closeModal() {
    document.getElementById("videoModal").classList.add("hidden");
    document.getElementById("youtubeVideo").src = ""; // Stops the video
}

window.sr = ScrollReveal();

const revealOptions = {
    duration: 3000,
    distance: '400px',
    viewFactor: 0.2
};

const revealElements = [
    { selector: '.principal-content', origin: 'left' },
    { selector: '.image-content', origin: 'right' },
    { selector: '.item-1', origin: 'left' },
    { selector: '.item-2', origin: 'right' },
    { selector: '.qr-content', origin: 'left' },
    { selector: '.image-qr', origin: 'right' }
];

// Iterar sobre los elementos y aplicar ScrollReveal
revealElements.forEach(item => {
    sr.reveal(item.selector, { ...revealOptions, origin: item.origin });
});

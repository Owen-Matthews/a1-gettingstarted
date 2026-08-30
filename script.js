document.addEventListener('DOMContentLoaded', () => {
    const welcome = document.querySelector('.welcome-text');
    let hue = 0;
    setInterval(() => {
        hue = (hue + 2) % 360;
        welcome.style.color = `hsl(${hue}, 70%, 70%)`;
    }, 50);
});
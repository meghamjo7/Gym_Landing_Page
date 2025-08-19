document.addEventListener('DOMContentLoaded', () => {
    const joinNowBtn = document.getElementById('joinNowBtn');
    const joinNowFooter = document.getElementById('joinNowFooter');

    joinNowBtn.addEventListener('click', () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    });

    joinNowFooter.addEventListener('click', () => {
        alert('Thank you for your interest in joining Momentum Gym!');
    });
});
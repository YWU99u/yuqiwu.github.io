document.addEventListener('DOMContentLoaded', () => {
    const enBtn = document.getElementById('en-btn');
    const cnBtn = document.getElementById('cn-btn');
    const elements = document.querySelectorAll('[data-en]');

    function switchLanguage(lang) {
        elements.forEach(el => {
            el.textContent = el.getAttribute(`data-${lang}`);
        });

        // Update active button state
        if (lang === 'en') {
            enBtn.classList.add('active');
            cnBtn.classList.remove('active');
        } else {
            cnBtn.classList.add('active');
            enBtn.classList.remove('active');
        }
    }

    enBtn.addEventListener('click', () => switchLanguage('en'));
    cnBtn.addEventListener('click', () => switchLanguage('cn'));
});
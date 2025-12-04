
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
        });
    }
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const navMenu = document.querySelector('.nav-menu');
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                if (mobileMenuBtn) {
                    mobileMenuBtn.textContent = '☰';
                }
            }
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
function validateForm(form) {
    const inputs = form.querySelectorAll('input, textarea');
    let isValid = true;
    inputs.forEach(input => {
        if (input.hasAttribute('required') && !input.value.trim()) {
            isValid = false;
            input.style.borderColor = '#f44336';
        } else {
            input.style.borderColor = '';
        }
    });
    
    return isValid;
}
document.addEventListener('DOMContentLoaded', () => {
    console.log('Munshi Ji loaded successfully!');
});

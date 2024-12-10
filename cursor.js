document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');
    const interactiveElements = document.querySelectorAll('a, button, input, .interactive');

    // Optimize cursor movement with hardware acceleration
    cursor.style.willChange = 'transform';
    
    // Direct cursor positioning with transform for better performance
    document.addEventListener('mousemove', (e) => {
        cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    });

    // Hover effects
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
            element.style.cursor = 'none';
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    });

    // Click effects with instant response
    document.addEventListener('mousedown', () => {
        cursor.classList.add('clicking');
    });

    document.addEventListener('mouseup', () => {
        cursor.classList.remove('clicking');
    });

    // Handle cursor visibility
    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
    });

    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
    });

    // Mobile Menu Functionality
    const mobileMenu = document.getElementById('mobile-menu');
    const navItems = document.querySelector('.nav-items');

    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navItems.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            navItems.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !navItems.contains(e.target)) {
            mobileMenu.classList.remove('active');
            navItems.classList.remove('active');
        }
    });

    // Disable cursor animation on mobile
    if (window.innerWidth <= 768) {
        cursor.style.display = 'none';
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth <= 768) {
            cursor.style.display = 'none';
        } else {
            cursor.style.display = 'block';
        }
    });
});

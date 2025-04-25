
document.addEventListener('DOMContentLoaded', function() {
    // تنشيط القائمة المتنقلة على الأجهزة الصغيرة
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // إغلاق القائمة عند النقر على رابط
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // تغيير لون شريط التنقل عند التمرير
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // تنشيط أشرطة المهارات عند التمرير إليها
    const skillBars = document.querySelectorAll('.skill-level');
    
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
    }

    // التحقق مما إذا كانت العناصر مرئية على الشاشة
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }

    function checkSkillsVisibility() {
        if (isElementInViewport(document.querySelector('.skills-container'))) {
            animateSkillBars();
            window.removeEventListener('scroll', checkSkillsVisibility);
        }
    }

    window.addEventListener('scroll', checkSkillsVisibility);
    checkSkillsVisibility(); // التحقق عند التحميل الأولي

    // منع إرسال النموذج للتبسيط (في تطبيق حقيقي، ستضيف هنا كود AJAX)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('شكراً لتواصلك! سيتم الرد عليك قريباً.');
            this.reset();
        });
    }

    // تأثيرات التمرير السلس للروابط
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});

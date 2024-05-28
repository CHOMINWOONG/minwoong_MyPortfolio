document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.menu-item a');

    let activeLink = null;

    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // 링크의 기본 동작을 막음

            // 모든 링크에서 'active' 클래스 제거
            links.forEach(function (otherLink) {
                otherLink.classList.remove('active');
            });

            // 클릭된 링크에 'active' 클래스 추가
            this.classList.add('active');

            activeLink = this;
        });
    });
});

// 스크롤시 서서히 나타나게하는 JS

document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(element => observer.observe(element));
});

// 스크롤시 서서히 사라지는 JS

document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('hidden');
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
                entry.target.classList.add('hidden');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const elements = document.querySelectorAll('.visible');
    elements.forEach(element => observer.observe(element));
});

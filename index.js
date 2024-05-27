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
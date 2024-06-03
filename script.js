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

// 마우스를 대면 위로 뜨는 JS
document.addEventListener("DOMContentLoaded", () => {
    const blogItems = document.querySelectorAll('.blog-con div');

    blogItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.zIndex = '10';
        });

        item.addEventListener('mouseout', () => {
            item.style.zIndex = '1';
        });
    });
});

// 스크롤 트리거 플러그인 활성화
document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    console.clear();

    var $window = $(window);
    var windowWidth = $window.width();
    var windowHeight = $window.height();

    $window.resize(function () {
        windowWidth = $(window).width();
        windowHeight = $window.height();
    });

    function setTimelineToEl(timeline, $el) {
        $el.data('gsap-timeline', timeline);
    }

    function killTimeline($el) {
        var timeline = $el.data('gsap-timeline');
        if (timeline) {
            timeline.kill();
        }
    }

    function SectionTop__init() {
        var $contentLi = $(".section-top__content > li");
        var $bgLi = $(".section-top__bg > li");
        var $bgLiChild = $bgLi.find(" > div");

        var animationDuration = 600;

        var updateBgLiChildWidth = function () {
            var width = windowWidth;
            $bgLiChild.stop().width(windowWidth);
        };

        $window.resize(function () {
            updateBgLiChildWidth();
        });
        updateBgLiChildWidth();

        $contentLi.mouseenter(function () {
            var $this = $(this);
            var index = $this.index();
            var $selectedBgLi = $bgLi.eq(index);
            var $selectedBgLiChild = $bgLiChild.eq(index);

            $selectedBgLi.addClass("active");

            var timeline = gsap.timeline();

            setTimelineToEl(timeline, $selectedBgLiChild);
            setTimelineToEl(timeline, $selectedBgLi);

            var animationDurationSeconds = animationDuration / 1000;

            timeline.to($selectedBgLiChild, {
                left: 0,
                duration: animationDurationSeconds
            });

            timeline.to($selectedBgLi, {
                left: 0,
                right: 0,
                duration: animationDurationSeconds
            }, "-=" + animationDurationSeconds);

        });

        $contentLi.mouseleave(function () {
            var $this = $(this);
            var index = $this.index();
            var $selectedBgLi = $bgLi.eq(index);
            var $selectedBgLiChild = $bgLiChild.eq(index);

            $selectedBgLi.removeClass("active");

            killTimeline($selectedBgLi);
            $selectedBgLi.css({
                left: "",
                right: ""
            });

            killTimeline($selectedBgLiChild);
            $selectedBgLiChild.css({
                left: ""
            });
        });
    }

    SectionTop__init();
});

// HTML 문서가 로드된 후에 JavaScript 코드를 실행합니다.
document.addEventListener('DOMContentLoaded', function() {
    // 모든 버튼 요소를 선택합니다.
    var buttons = document.querySelectorAll('.button');

    // 모든 버튼에 클릭 이벤트를 등록합니다.
    buttons.forEach(function(button) {
        // 각 버튼이 클릭되었을 때 이벤트 핸들러를 등록합니다.
        button.addEventListener('click', function(event) {
            // 기본 동작을 막습니다. (링크의 이동을 막음)
            event.preventDefault();
            
            // 클릭된 버튼의 href 속성에 지정된 URL로 이동합니다.
            window.location.href = button.getAttribute('href');
        });
    });
});
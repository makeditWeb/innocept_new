
const navbarToggleBtn = document.querySelector('.navbar_toggle_btn');
const navbarMenuWrap = document.querySelector('.navbar_wrap');
navbarToggleBtn.addEventListener('click', () => {
    navbarMenuWrap.classList.toggle('open');
});


// navbar slide down
window.addEventListener('load', function () {
    document.querySelector('.navbar').classList.add('animate');
});


// fullpage js
$(document).ready(function () {
    $('#fullpage').fullpage({
        scrollBar: true
    });
});


// 스크롤시 navbar 색상 변경 및 logo 이미지 변경
window.addEventListener('scroll', function () {
    var navbar = document.querySelector('nav.navbar');
    var sections = document.querySelectorAll('section');
    var currentSectionIndex = 0;

    for (var i = 0; i < sections.length; i++) {
        if (sections[i].offsetTop - navbar.offsetHeight <= window.pageYOffset) {
            currentSectionIndex = i;
        }
    }

    var currentSection = sections[currentSectionIndex];

    if (currentSection.classList.contains('bg-black')) {
        navbar.classList.remove('bg-white');
        // 로고 이미지를 바꾸는 코드 추가
    } else {
        navbar.classList.add('bg-white');
        // 로고 이미지를 바꾸는 코드 추가
    }
});


// text slide
$(document).ready(function () {
    setFlowBanner();
});

function setFlowBanner() {
    $('.flow_banner').each(function () {
        const $wrap = $(this);
        const $list = $wrap.find('.list');
        let wrapWidth = ''; //$wrap의 가로 크기
        let listWidth = ''; //$list의 가로 크기
        const speed = 92; //1초에 몇픽셀 이동하는지 설정

        //리스트 복제
        let $clone = $list.clone();
        $wrap.append($clone);
        flowBannerAct();

        //반응형 :: 디바이스가 변경 될 때마다 배너 롤링 초기화
        let oldWChk = window.innerWidth > 1279 ? 'pc' : window.innerWidth > 767 ? 'ta' : 'mo';
        $(window).on('resize', function () {
            let newWChk = window.innerWidth > 1279 ? 'pc' : window.innerWidth > 767 ? 'ta' : 'mo';
            if (newWChk != oldWChk) {
                oldWChk = newWChk;
                flowBannerAct();
            }
        });

        //배너 실행 함수
        function flowBannerAct() {
            //배너 롤링 초기화
            if (wrapWidth != '') {
                $wrap.find('.list').css({ 'animation': 'none' });
                $wrap.find('.list').slice(2).remove();
            }
            wrapWidth = $wrap.width();
            listWidth = $list.width();

            //무한 반복을 위해 리스트를 복제 후 배너에 추가
            if (listWidth < wrapWidth) {
                const listCount = Math.ceil(wrapWidth * 2 / listWidth);
                for (let i = 2; i < listCount; i++) {
                    $clone = $clone.clone();
                    $wrap.append($clone);
                }
            }
            $wrap.find('.list').css({ 'animation': `${listWidth / speed}s linear infinite flowRolling` });
        }
    });
}


// text right slide


$(window).on('load', function () {
    setFlowBanner2();
})

function setFlowBanner2() {
    const $wrap2 = $('.flow_banner');
    const $list2 = $('.flow_banner .motion_rigth');
    let wrapWidth2 = ''; //$wrap의 가로 크기
    let listWidth2 = ''; //$list의 가로 크기
    const speed2 = 92; //1초에 몇픽셀 이동하는지 설정

    //리스트 복제
    let $clone2 = $list2.clone();
    $wrap2.append($clone2);
    flowBannerAct2()

    //반응형 :: 디바이스가 변경 될 때마다 배너 롤링 초기화
    let oldWChk = window.innerWidth > 1279 ? 'pc' : window.innerWidth > 767 ? 'ta' : 'mo';
    $(window).on('resize', function () {
        let newWChk = window.innerWidth > 1279 ? 'pc' : window.innerWidth > 767 ? 'ta' : 'mo';
        if (newWChk != oldWChk) {
            oldWChk = newWChk;
            flowBannerAct2();
        }
    });

    //배너 실행 함수
    function flowBannerAct2() {
        //배너 롤링 초기화
        if (wrapWidth2 != '') {
            $wrap2.find('.motion_rigth').css({ 'animation': 'none' });
            $wrap2.find('.motion_rigth').slice(2).remove();
        }
        wrapWidth2 = $wrap2.width();
        listWidth2 = $list2.width();

        //무한 반복을 위해 리스트를 복제 후 배너에 추가
        if (listWidth2 < wrapWidth2) {
            const listCount2 = Math.ceil(wrapWidth2 * 2 / listWidth2);
            for (let i = 2; i < listCount2; i++) {
                $clone2 = $clone2.clone();
                $wrap2.append($clone2);
            }
        }
        $wrap2.find('.motion_rigth').css({ 'animation': `${listWidth2 / speed2}s linear infinite flowRolling1` });
    }
}


// 
const spyEls = document.querySelectorAll('.scroll-spy')
// 요소들 반복 처리!
spyEls.forEach(function (spyEl) {
    new ScrollMagic
        .Scene({ // 감시할 장면(Scene)을 추가
            triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
            triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
        })
        .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
        .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당(필수!)
})


// fade-in
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7, //0.7, 1.4, 2.1, 2.7 s 후 동작
        opacity: 1
    });
});



// 

jQuery(function ($) {
    $("body").css("display", "none");
    $("body").fadeIn(2000);
    $("a.transition").click(function (event) {
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(1000, redirectPage);
    });
    function redirectPage() {
        window.location = linkLocation;
    }
});



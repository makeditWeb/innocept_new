const sections = document.querySelectorAll('section');
const sectionsArray = Array.from(sections);

// 첫 번째 섹션을 화면에 보이도록 스크롤 이동
sectionsArray[0].scrollIntoView();

window.addEventListener('scroll', () => {
    const currentPosition = window.pageYOffset;

    // 현재 위치에서 다음 섹션의 위치까지의 거리가 화면의 높이 이하일 때 다음 섹션으로 이동
    for (let i = 0; i < sectionsArray.length - 1; i++) {
        const section = sectionsArray[i];
        const nextSection = sectionsArray[i + 1];
        const sectionTop = section.offsetTop;
        const nextSectionTop = nextSection.offsetTop;

        if (currentPosition >= sectionTop && currentPosition < nextSectionTop) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
            break;
        }
    }
});




// Handle scrolling when tapping on the navbar menu
function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    if (scrollTo === null) {
        return;
    }
    scrollTo.scrollIntoView({ behavior: 'smooth' });
}

const navbarMenu = document.querySelector('.navbar_wrap');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    navbarMenu.classList.remove('open');
    scrollIntoView(link);
});



// text slide
$(window).on('load', function () {
    setFlowBanner();
})


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

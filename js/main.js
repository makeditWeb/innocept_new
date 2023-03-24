$(window).on('load', function () {
    setFlowBanner();
})

function setFlowBanner() {
    const $wrap = $('.flow_banner');
    const $list = $('.flow_banner .list');
    let wrapWidth = ''; //$wrap의 가로 크기
    let listWidth = ''; //$list의 가로 크기
    const speed = 92; //1초에 몇픽셀 이동하는지 설정

    //리스트 복제
    let $clone = $list.clone();
    $wrap.append($clone);
    flowBannerAct()

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
}




$(window).on('load', function () {
    setFlowBanner1();
})

function setFlowBanner1() {
    const $wrap1 = $('.flow_banner1');
    const $list1 = $('.flow_banner1 .list1');
    let wrapWidth1 = ''; //$wrap의 가로 크기
    let listWidth1 = ''; //$list의 가로 크기
    const speed1 = 60; //1초에 몇픽셀 이동하는지 설정

    //리스트 복제
    let $clone1 = $list1.clone();
    $wrap1.append($clone1);
    flowBannerAct1()

    //반응형 :: 디바이스가 변경 될 때마다 배너 롤링 초기화
    let oldWChk = window.innerWidth > 1279 ? 'pc' : window.innerWidth > 767 ? 'ta' : 'mo';
    $(window).on('resize', function () {
        let newWChk = window.innerWidth > 1279 ? 'pc' : window.innerWidth > 767 ? 'ta' : 'mo';
        if (newWChk != oldWChk) {
            oldWChk = newWChk;
            flowBannerAct1();
        }
    });

    //배너 실행 함수
    function flowBannerAct1() {
        //배너 롤링 초기화
        if (wrapWidth1 != '') {
            $wrap1.find('.list1').css({ 'animation': 'none' });
            $wrap1.find('.list1').slice(2).remove();
        }
        wrapWidth1 = $wrap1.width();
        listWidth1 = $list1.width();

        //무한 반복을 위해 리스트를 복제 후 배너에 추가
        if (listWidth1 < wrapWidth1) {
            const listCount1 = Math.ceil(wrapWidth1 * 2 / listWidth1);
            for (let i = 2; i < listCount1; i++) {
                $clone1 = $clone1.clone();
                $wrap1.append($clone1);
            }
        }
        $wrap1.find('.list1').css({ 'animation': `${listWidth1 / speed1}s linear infinite flowRolling` });
    }
}

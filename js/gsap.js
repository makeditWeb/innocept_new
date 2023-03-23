
    // 메인섹션 텍스트 애니메이션
    const tl = gsap.timeline();

    tl.from(".line h2", 1, {
        y: 200,
        ease: "power4.out",
        delay: 3,
        skewY: 7,
        stagger: {
            amount: 0.3
        }
    })
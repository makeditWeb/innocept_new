// scroll navbar color change

$(document).ready(function () {
    const $navbar = $(".navbar");

    $(window).scroll(function () {
        const $currentSection = getCurrentSection();
        if ($currentSection.hasClass("bg-white")) {
            $navbar.removeClass("navbar-light").addClass("navbar-dark");
        } else {
            $navbar.removeClass("navbar-dark").addClass("navbar-light");
        }
    });

    function getCurrentSection() {
        let $currentSection;
        $(".section").each(function () {
            const sectionTop = $(this).offset().top - 150;
            const sectionBottom = sectionTop + $(this).outerHeight();
            const scrollPosition = $(window).scrollTop();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                $currentSection = $(this);
                return false;
            }
        });
        return $currentSection;
    }
});

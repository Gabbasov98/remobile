$(document).ready(function() {

    $(".select").niceSelect()
    $('input[type="tel"]').mask('+7 (999) 999-9999', { placeholder: '+7 (   )    -    ' });

    $(".header__burger").click(function() {
        $("body").addClass("fixed-body")
        $(".header-dekstop").addClass("header-dekstop--active")
        $(".header__bg").addClass("header__bg--active")
    })

    $(".header__bg").click(function() {
        $("body").removeClass("fixed-body")
        $(".header-dekstop").removeClass("header-dekstop--active")
        $(".header__bg").removeClass("header__bg--active")
    })

    wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false,
        live: false
    })

    wow.init();

    $(".tab").click(function() {
        let path = $(this).attr("data-tab-path")
        $(".tab").removeClass("tab--active")
        $(this).addClass("tab--active")
        $(".tab__content").removeClass("tab__content--active")
        $(`.tab__content[data-tab-path="${path}"]`).addClass("tab__content--active")
        $(".mob-tabs__item").removeClass("mob-tabs__item--active")
        $(`.mob-tabs__item[data-tab-path="${path}"]`).addClass("mob-tabs__item--active")
        $(".mob-tabs__bg").removeClass("mob-tabs__bg--active")
        $(".tabs").removeClass("tabs--active")
    })

    $(".header__link-show").click(function() {
        if ($(this).parent(".header__link").hasClass("header__link--active")) {
            $(this).parent(".header__link").removeClass("header__link--active")
        } else {
            $(".header__link-show").parent(".header__link").removeClass("header__link--active")
            $(this).parent(".header__link").addClass("header__link--active")
        }
    })

    $(document).mouseup(function(e) {
        var div = $('.header__link-hidden');
        if (!div.is(e.target) && div.has(e.target).length === 0) {

            if (div.parent(".header__link").hasClass("header__link--active")) {
                div.parent(".header__link").removeClass("header__link--active")
            }

        }
    });

})


function onIn() {
    if (window.innerWidth > 992) {
        let el = $(this)
        setTimeout(function() {
            if (el.is(':hover')) {
                console.log(el)
                el.children(".nav__item-show").addClass("nav__item-show--active")
            }
        }, 200);
    }
}

function onOut() {
    if (window.innerWidth > 992) {
        $(this).children(".nav__item-show").removeClass("nav__item-show--active")
    }
}
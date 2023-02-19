function initSlick() {

    var $slickUno = $(".testimonials");
    var $slickDos = $(".event-banner-slick");

    if ( $slickUno.length ) {
        $slickUno.slick({
            autoplaySpeed: 5000,
            // speed: 3000,
            // cssEase: 'linear',
            fade: true,
            speed: 500,
            infinite: true,
            cssEase: 'ease-in-out',
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            pauseOnHover: false,
            focusOnSelect: false,
            // nextArrow: `<img class='next-arrow' src="img/carousel/right.png">`,
            // prevArrow: `<img class='prev-arrow' src="img/carousel/left.png">`
            nextArrow: null,
            prevArrow: null,
            // responsive: [
            //     {
            //         breakpoint: 1380,
            //         settings: {
            //             slidesToShow: 2,
            //             speed: 7000,
            //             swipe: false,
            //             pauseOnHover: false,
            //             focusOnSelect: false
            //         }
            //     }, {
            //         breakpoint: 1024,
            //         settings: {
            //             slidesToShow: 2,
            //             speed: 7000,
            //             swipe: false,
            //             pauseOnHover: false,
            //             focusOnSelect: false,
            //         }
            //     }, {

            //         breakpoint: 600,
            //         settings: {
            //             slidesToShow: 1,
            //             speed: 7000,
            //             swipe: false,
            //             pauseOnHover: false,
            //             focusOnSelect: false,
            //         }

            //     }
            // ]
        });
    }

    // if ( $slickDos.length ) {
    //     $slickDos.slick({
    //         // autoplaySpeed: 5000,
    //         // fade: true,
    //         // speed: 500,
    //         // centerMode: true,
    //         infinite: false,
    //         // cssEase: 'ease-in-out',
    //         dots: false,
    //         // infinite: true,
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         // autoplay: true,
    //         pauseOnHover: false,
    //         focusOnSelect: false,
    //         nextArrow: `<span class='next-arrow-container'><img class='next-arrow' src="../../img/arrow-right.svg"></span>`,
    //         prevArrow: `<span class='prev-arrow-container'><img class='prev-arrow' src="../../img/arrow-right.svg"></span>`
    //         // responsive: [
    //         //     {
    //         //         breakpoint: 1380,
    //         //         settings: {
    //         //             slidesToShow: 2,
    //         //             speed: 7000,
    //         //             swipe: false,
    //         //             pauseOnHover: false,
    //         //             focusOnSelect: false
    //         //         }
    //         //     }, {
    //         //         breakpoint: 1024,
    //         //         settings: {
    //         //             slidesToShow: 2,
    //         //             speed: 7000,
    //         //             swipe: false,
    //         //             pauseOnHover: false,
    //         //             focusOnSelect: false,
    //         //         }
    //         //     }, {

    //         //         breakpoint: 600,
    //         //         settings: {
    //         //             slidesToShow: 1,
    //         //             speed: 7000,
    //         //             swipe: false,
    //         //             pauseOnHover: false,
    //         //             focusOnSelect: false,
    //         //         }

    //         //     }
    //         // ]
    //     });
    // }
}

function scrollToHash () {
    if ( location.pathname === '/' ) {

        var secName = '';

        $('html, body').animate({
            scrollTop: $("#" + secName).offset().top,
            easing: "linear"
        }, 700);
    }
}

$(document).ready(function () {

    initSlick();

    // scrollToHash();

    $('#js-switch-passed').change(function() {

        var $leftText = $('.passed-events .toggle-text-left');
        var $rightText = $('.passed-events .toggle-text-right');

        $('.passed-events .event-slide').addClass('_hidden');

        if ( this.checked ) {
            $leftText.removeClass('_active');
            $rightText.addClass('_active');

            $('.passed-events .event-slide').removeClass('_hidden');
        }
        else {
            $leftText.addClass('_active');
            $rightText.removeClass('_active');

            $('.passed-events [data-filter-content]').removeClass('_hidden');
        }
    });
    // scrollToHash();

    $('#js-switch').change(function() {

        var $leftText = $('.upcoming-events .toggle-text-left');
        var $rightText = $('.upcoming-events .toggle-text-right');

        $('.upcoming-events .event-slide').addClass('_hidden');

        if ( this.checked ) {
            $leftText.removeClass('_active');
            $rightText.addClass('_active');

            $('.upcoming-events .event-slide').removeClass('_hidden');
        }
        else {
            $leftText.addClass('_active');
            $rightText.removeClass('_active');

            $('.upcoming-events [data-filter-content]').removeClass('_hidden');
        }
    });

    $(".hamburger").click(function () {
        $(this).toggleClass("_active");
        $('.nav-mobile-list').toggleClass('_active');
    });

    $('nav li').click(function (e) {

        var $this = $(this);
        var secName = $this.data('scroll');

        if ( secName === 'contact' || secName === undefined ) {
            return
        }

        e.preventDefault();

        $(".hamburger").toggleClass("_active");
        $('.nav-mobile-list').toggleClass('_active');

        $('html, body').animate({
            scrollTop: $("#" + secName).offset().top,
            easing: "linear"
        }, 700);
    })

    $('.nav-wrapper .nav .nav-element').click(function (e) {

        var $this = $(this);
        var secName = $this.data('scroll');

        $('.nav-wrapper .nav .nav-element').removeClass('_active')
        $this.addClass('_active')

        $('html, body').animate({
            scrollTop: $("#" + secName).offset().top,
            easing: "linear"
        }, 700);
    })
});

$(window).scroll(function () {
    navHighlight();
});

function navHighlight() {
    var scrollTop = $(window).scrollTop();

    $(".member-details-section").each(function () {
        var $this = $(this);
        var xPos = $this.position();
        var sectionPos = xPos.top;
        var sectionHeight = $this.height();
        var overall = scrollTop + sectionHeight;

        if ((scrollTop + 20) >= sectionPos && scrollTop < overall) {
            $this.addClass("SectionActive");
            $this.prevAll().removeClass("SectionActive");
        }

        else if (scrollTop <= overall) {
            $this.removeClass("SectionActive");
        }

        var xIndex = $(".SectionActive").index();
        var accIndex = xIndex + 1;

        $(".nav-wrapper .nav .nav-element:nth-child(" + accIndex + ")").addClass("_active").siblings().removeClass("_active");
    });
}

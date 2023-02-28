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

    $('.upcoming-event-list .event-slide').click(function(e) {

        resetForm();

        var $this = $(this);
        var modalData = JSON.parse($this.attr('data-modal'));
        var eventTitle = modalData[0];
        var eventLocation = modalData[1];
        var eventDate = modalData[2];
        var eventTime = modalData[3];

        $('#js-modal-event-title').text(eventTitle);
        $('#js-eventName').val(eventTitle);
        $('#js-modal-event-location').text(eventLocation);
        $('#js-modal-event-date').text(eventDate);
        $('#js-modal-event-time').text(eventTime);

        console.log('===> eventTitle', eventTitle)
        console.log('===> eventLocation', eventLocation)
        console.log('===> eventDate', eventDate)
    })

    $('#js-submit').click(function(e) {

        e.preventDefault();

        var form = document.getElementById('sheetdb-form');

        var fname = $('#js-fname');
        var fnameVal = fname.val();
        var lname = $('#js-lname');
        var lnameVal = lname.val();
        var email = $('#js-email');
        var emailVal = email.val();
        var pcode = $('#js-pcode');
        var pcodeVal = pcode.val();
        var contact = $('#js-contact');
        var contactVal = contact.val();
        var company = $('#js-company');
        var companyVal = company.val();
        var designation = $('#js-designation');
        var designationVal = designation.val();

        if ( fnameVal === '' ) {
            fname.addClass('_error');
        }
        else {
            fname.removeClass('_error');
        }

        if ( lnameVal === '' ) {
            lname.addClass('_error');
        }
        else {
            lname.removeClass('_error');
        }

        if ( emailVal === '' || !validateEmail(emailVal) ) {
            email.addClass('_error');
        }
        else {
            email.removeClass('_error');
        }

        if ( pcodeVal === '' || contactVal === '' ) {
            pcode.parent('.merged-inputs').addClass('_error');
        }
        else {
            pcode.parent('.merged-inputs').removeClass('_error');
        }

        if ( companyVal === '' ) {
            company.addClass('_error');
        }
        else {
            company.removeClass('_error');
        }

        if ( designationVal === '' ) {
            designation.addClass('_error');
        }
        else {
            designation.removeClass('_error');
        }

        if ( $('input').hasClass('_error') || $('.merged-inputs').hasClass('_error') ) {
            return false
        }

        console.log('===> submit clicked', new FormData(document.getElementById("sheetdb-form")))

        fetch(form.action, {
            method : "POST",
            body: new FormData(document.getElementById("sheetdb-form")),
        }).then(
            response => response.json()
        ).then((html) => {
            document.getElementById('rsvp-modal').style.display='none'
            document.getElementById('success-modal').style.display='block'
        });
    })
});

$(window).scroll(function () {
    navHighlight();
});

var validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function resetForm () {
    var eventName = $('#js-eventName');
    var fname = $('#js-fname');
    var lname = $('#js-lname');
    var email = $('#js-email');
    var pcode = $('#js-pcode');
    var contact = $('#js-contact');
    var company = $('#js-company');
    var designation = $('#js-designation');

    // eventName.val('');
    // fname.val('');
    // lname.val('');
    // email.val('');
    // pcode.val('');
    // contact.val('');
    // company.val('');
    // designation.val('');


    fname.val('test');
    lname.val('test');
    email.val('test@test.com');
    pcode.val('91');
    contact.val('9833727721');
    company.val('test');
    designation.val('test');
}

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

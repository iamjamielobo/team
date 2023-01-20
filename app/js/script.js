$(document).ready(function () {

    window.scrollTo(0,0);

    // window.addEventListener('scroll', throttle(parallax, 14));

    // function throttle(fn, wait) {
    //     var time = Date.now();
    //     return function () {
    //         if ((time + wait - Date.now()) < 0) {
    //             fn();
    //             time = Date.now();
    //         }
    //     }
    // };

    // function parallax() {
    //     var scrolled = window.pageYOffset;
    //     var parallax = document.querySelector(".parallax");
    //     // You can adjust the 0.4 to change the speed
    //     var coords = (scrolled * .4) + 'px'
    //     parallax.style.transform = 'translateY(' + coords + ')';
    // };

    //     if (location.protocol !== 'https:') {
    //         location.replace(`https:${location.href.substring(location.protocol.length)}`);
    //     }

    //     if ( emailjs ) {
    //         emailjs.init("HmmtKITJrAmisKnCp");
    //     }

    //     if ( location.pathname.indexOf('portfolio') !== -1 ) {
    //         var myList = $('.table-row-items');
    //         var listitems = myList.children('.table-row');

    //         listitems.sort(function(a, b) {
    //         return $(a).find('.company-name').text().toUpperCase().localeCompare($(b).find('.company-name').text().toUpperCase());
    //         })

    //         $.each(listitems, function(idx, itm) { $('.table-row-items').append(itm); });
    //     }

    //     $('.know-more').click(function (e) {
    //         var $this = $(this);
    //         var $text = $this.parent('.text');

    //         console.log($this);
    //         console.log($text);

    //         if ( $text.hasClass('_less') ) {
    //             $text.removeClass('_less').addClass('_more');
    //         }
    //         else {
    //             $text.addClass('_less').removeClass('_more');
    //         }
    //     })

        $(".hamburger").click(function () {
            $(this).toggleClass("_active");
            $('.nav-mobile-list').toggleClass('_active');
        });

        $('nav li').click(function (e) {
            e.preventDefault();

            var $this = $(this);
            var secName = $this.data('scroll');

            $(".hamburger").toggleClass("_active");
            $('.nav-mobile-list').toggleClass('_active');

            $('html, body').animate({
                scrollTop: $("#" + secName).offset().top
            }, 1000);
        })

    //     $(".tab-list .tabs .tab").click(function () {
    //         var $this = $(this);
    //         var tabFilter = $this.data('tab');

    //         if ( $this.hasClass('_active') ) {
    //             $("[data-tab='All']").addClass('_active');
    //             $this.removeClass('_active');
    //             tabFilter = 'All'
    //         }
    //         else {
    //             $(".tab-list .tabs .tab").removeClass('_active');
    //             $this.addClass('_active');
    //         }


    //         $('.table-row').removeClass('_hidden');

    //         if ( tabFilter === 'All' ) {
    //             return false;
    //         }

    //         $('.table-row').each(function(idx, el) {
    //             var elFilter = $(el).data('filter');

    //             if ( tabFilter !== elFilter ) {
    //                 $(el).addClass('_hidden');
    //             }

    //             // and the rest of your code
    //         });
    //     });

    //     $('.js-form-submit').click(function (e) {

    //         e.preventDefault()

    //         var $name = $('#js-name');
    //         var nameVal = $name.val();
    //         var $email = $('#js-email');
    //         var emailVal = $email.val();
    //         var $phone = $('#js-phone');
    //         var phoneVal = $phone.val();
    //         var $profile = $('#js-profile');
    //         var profileVal = $profile.val();
    //         var $what = $('#js-what');
    //         var whatVal = $what.val();

    //         if (nameVal === "") {
    //             $name.parent('.form-field').addClass('_error');
    //             $name.focus();
    //         }
    //         else {
    //             $name.parent('.form-field').removeClass('_error');
    //         }

    //         if (emailVal === "" || !validateEmail(emailVal)) {
    //             $email.parent('.form-field').addClass('_error');
    //             $email.focus();
    //         }
    //         else {
    //             $email.parent('.form-field').removeClass('_error');
    //         }

    //         if (phoneVal === "") {
    //             $phone.parent('.form-field').addClass('_error');
    //             $phone.focus();
    //         }
    //         else {
    //             $phone.parent('.form-field').removeClass('_error');
    //         }

    //         if (profileVal === "") {
    //             $profile.parent('.form-field').addClass('_error');
    //             $profile.focus();
    //         }
    //         else {
    //             $profile.parent('.form-field').removeClass('_error');
    //         }

    //         if (whatVal === "") {
    //             $what.parent('.form-field').addClass('_error');
    //             $what.focus();
    //         }
    //         else {
    //             $what.parent('.form-field').removeClass('_error');
    //         }


    //         if (nameVal !== "" && phoneVal !== "" && emailVal !== "" && profileVal !== "" && whatVal !== "") {

    //             // $('.loader-container').removeClass('hide');
    //             // $('.submit-btn').addClass('hide');

    //             $name.parent('.form-field').removeClass('_error');
    //             $email.parent('.form-field').removeClass('_error');
    //             $phone.parent('.form-field').removeClass('_error');
    //             $profile.parent('.form-field').removeClass('_error');
    //             $what.parent('.form-field').removeClass('_error');

    //             var templateParams = {
    //                 name: nameVal,
    //                 email: emailVal,
    //                 phone: phoneVal,
    //                 profile: profileVal,
    //                 what: whatVal
    //             };

    //             emailjs.send('service_ehgh5cm', 'template_wsmvd7i', templateParams)
    //                 .then(function(response) {
    //                     console.log('SUCCESS!', response.status, response.text);
    //                     $('.success-msg').addClass('_show');

    //                     $name.val('');
    //                     $email.val('');
    //                     $phone.val('');
    //                     $profile.val('');
    //                     $what.val('');

    //                     setTimeout(function () {
    //                         $('.success-msg').removeClass('_show')
    //                     }, 5000);

    //                 }, function(error) {
    //                     console.log('FAILED...', error);
    //             });
    //         }
    //     })
});

// var validateEmail = (email) => {
//     return email.match(
//         /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     );
// };

window.onunload = function(){ window.scrollTo(0,0); }

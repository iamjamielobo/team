function initSlick(){$(".testimonials").length&&$(".testimonials").slick({autoplaySpeed:5e3,fade:!0,speed:500,infinite:!0,cssEase:"ease-in-out",dots:!0,infinite:!0,slidesToShow:1,slidesToScroll:1,autoplay:!0,pauseOnHover:!1,focusOnSelect:!1,nextArrow:null,prevArrow:null})}function scrollToHash(){if("/"===location.pathname){$("html, body").animate({scrollTop:$("#").offset().top,easing:"linear"},700)}}$(document).ready((function(){initSlick(),$(".hamburger").click((function(){$(this).toggleClass("_active"),$(".nav-mobile-list").toggleClass("_active")})),$("nav li").click((function(e){var t=$(this).data("scroll");"contact"!==t&&void 0!==t&&(e.preventDefault(),$(".hamburger").toggleClass("_active"),$(".nav-mobile-list").toggleClass("_active"),$("html, body").animate({scrollTop:$("#"+t).offset().top,easing:"linear"},700))}))}));
//# sourceMappingURL=script.js.map
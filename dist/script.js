function initSlick(){var e=$(".testimonials");$(".event-banner-slick");e.length&&e.slick({autoplaySpeed:5e3,fade:!0,speed:500,infinite:!0,cssEase:"ease-in-out",dots:!0,infinite:!0,slidesToShow:1,slidesToScroll:1,autoplay:!0,pauseOnHover:!1,focusOnSelect:!1,nextArrow:null,prevArrow:null})}function scrollToHash(){if("/"===location.pathname){$("html, body").animate({scrollTop:$("#").offset().top,easing:"linear"},700)}}function openRsvpModal(){document.getElementById("rsvp-modal").style.display="block";setTimeout((function(){$("#js-pcode").val("91").change()}),1)}$(document).ready((function(){initSlick(),$("#js-switch-passed").change((function(){var e=$(".passed-events .toggle-text-left"),a=$(".passed-events .toggle-text-right");$(".passed-events .event-slide").addClass("_hidden"),this.checked?(e.removeClass("_active"),a.addClass("_active"),$(".passed-events .event-slide").removeClass("_hidden")):(e.addClass("_active"),a.removeClass("_active"),$(".passed-events [data-filter-content]").removeClass("_hidden"))})),$("#js-switch").change((function(){var e=$(".upcoming-events .toggle-text-left"),a=$(".upcoming-events .toggle-text-right");$(".upcoming-events .event-slide").addClass("_hidden"),this.checked?(e.removeClass("_active"),a.addClass("_active"),$(".upcoming-events .event-slide").removeClass("_hidden")):(e.addClass("_active"),a.removeClass("_active"),$(".upcoming-events [data-filter-content]").removeClass("_hidden"))})),$(".hamburger").click((function(){$(this).toggleClass("_active"),$(".nav-mobile-list").toggleClass("_active")})),$("nav li").click((function(e){var a=$(this).data("scroll");"contact"!==a&&void 0!==a&&(e.preventDefault(),$(".hamburger").toggleClass("_active"),$(".nav-mobile-list").toggleClass("_active"),$("html, body").animate({scrollTop:$("#"+a).offset().top,easing:"linear"},700))})),$(".nav-wrapper .nav .nav-element").click((function(e){var a=$(this),t=a.data("scroll");$(".nav-wrapper .nav .nav-element").removeClass("_active"),a.addClass("_active"),$("html, body").animate({scrollTop:$("#"+t).offset().top,easing:"linear"},700)})),$(".upcoming-event-list .event-slide").click((function(e){resetForm();var a=$(this),t=JSON.parse(a.attr("data-modal")),s=t[0],n=t[1],l=t[2],o=t[3];$("#js-eventName").val(s),$("#js-modal-event-title").text(s),n&&$("#js-modal-event-location").text(n+", "),$("#js-modal-event-date").text(l+", "),$("#js-modal-event-time").text(o),console.log("===> eventTitle",s),console.log("===> eventLocation",n),console.log("===> eventDate",l)})),$("#js-submit").click((function(e){e.preventDefault();var a=document.getElementById("sheetdb-form"),t=$("#js-fname"),s=t.val(),n=$("#js-lname"),l=n.val(),o=$("#js-email"),i=o.val(),d=$("#js-pcode"),r=d.val(),c=$("#js-contact").val(),v=$("#js-company"),m=v.val(),g=$("#js-designation"),p=g.val();if(console.log("===> pcodeVal",r),""!==s&&validateName(s)?t.removeClass("_error"):t.addClass("_error"),""!==l&&validateName(l)?n.removeClass("_error"):n.addClass("_error"),""!==i&&validateEmail(i)?o.removeClass("_error"):o.addClass("_error"),""!==r&&""!==c&&validatePhone(c)?d.parent(".merged-inputs").removeClass("_error"):d.parent(".merged-inputs").addClass("_error"),""!==m&&validateName(m)?v.removeClass("_error"):v.addClass("_error"),""!==p&&validateName(p)?g.removeClass("_error"):g.addClass("_error"),$("input").hasClass("_error")||$(".merged-inputs").hasClass("_error"))return!1;console.log("===> submit clicked",new FormData(document.getElementById("sheetdb-form"))),fetch(a.action,{method:"POST",body:new FormData(document.getElementById("sheetdb-form"))}).then((e=>e.json())).then((e=>{document.getElementById("rsvp-modal").style.display="none",document.getElementById("success-modal").style.display="block"}))})),$(".faqs .faq-container .icon").click((function(){$(this).toggleClass("_expanded"),$(this).parent(".faq-container").find(".faq-answer").slideToggle()}))})),$(window).scroll((function(){navHighlight()}));var validateEmail=e=>e.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),validatePhone=e=>e.match(/^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/),validateName=e=>e.match(/^[A-Za-z ]+$/);function resetForm(){var e=$("#js-eventName"),a=$("#js-fname"),t=$("#js-lname"),s=$("#js-email"),n=$("#js-pcode"),l=$("#js-contact"),o=$("#js-company"),i=$("#js-designation");e.val(""),a.val(""),t.val(""),s.val(""),n.val(""),l.val(""),o.val(""),i.val("")}function navHighlight(){var e=$(window).scrollTop();$(".member-details-section").each((function(){var a=$(this),t=a.position().top,s=a.height(),n=e+s;e+20>=t&&e<n?(a.addClass("SectionActive"),a.prevAll().removeClass("SectionActive")):e<=n&&a.removeClass("SectionActive");var l=$(".SectionActive").index();$(".nav-wrapper .nav .nav-element:nth-child("+(l+1)+")").addClass("_active").siblings().removeClass("_active")}))}
//# sourceMappingURL=script.js.map
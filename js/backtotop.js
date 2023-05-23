/*====================================================*/
/*-------------- [backtotop.js] ----------------------*/
/*====================================================*/
! function(s) {
    "use strict";
    s(".switch").on("click", function() {
        s("body").hasClass("light") ? (s("body").removeClass("light"), s(".switch").removeClass("switched")) : (s("body").addClass("light"), s(".switch").addClass("switched"))
    }), s(document).ready(function() {
        var e = document.querySelector(".anim-scroll-to-top path"),
            t = e.getTotalLength();
        e.style.transition = e.style.WebkitTransition = "none", e.style.strokeDasharray = t + " " + t, e.style.strokeDashoffset = t, e.getBoundingClientRect(), e.style.transition = e.style.WebkitTransition = "stroke-dashoffset 10ms linear";
        var o = function() {
            var o = s(window).scrollTop(),
                r = s(document).height() - s(window).height(),
                i = t - o * t / r;
            e.style.strokeDashoffset = i
        };
        o(), s(window).scroll(o);
        jQuery(window).on("scroll", function() {
            jQuery(this).scrollTop() > 50 ? jQuery(".anim-scroll-to-top").addClass("active-progress") : jQuery(".anim-scroll-to-top").removeClass("active-progress")
        }), jQuery(".anim-scroll-to-top").on("click", function(s) {
            return s.preventDefault(), jQuery("html, body").animate({
                scrollTop: 0
            }, 250), !1
        })
    })
}(jQuery);
//scroll---function---header
$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $(".header_section").addClass("darkHeader");
    } else {
        $(".header_section").removeClass("darkHeader");
    }
});


// ----banner-----sider--------start-----
var banner_siderSwiper = new Swiper(".banner_sider", {
    slidesPerView: 2,
    spaceBetween: 24,
    loop: true,
    // autoplay: {
    // delay: 2000,
    // disableOnInteraction: false,
    // },
    pagination: {
        el: ".banner_pagination",
        dynamicBullets: false,
        clickable: true
    },
    breakpoints: {
        // when window width is >= 1280px
        1280: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        1023: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        767: {
            slidesPerView: 1,
            spaceBetween: 16,
        },
        0: {
            slidesPerView: 1,
            spaceBetween: 16,
        }
    }
});



// ----banner-----sider--------end-----

$(document).ready(function () {

    $(".menu_icons").click(function () {
        $(".header_links").addClass("menu_open")
        $("body").addClass("ov_hi")
    });

    $(".close_icons").click(function(){
        $(".header_links").removeClass("menu_open")
        $("body").removeClass("ov_hi")

    });
    
});
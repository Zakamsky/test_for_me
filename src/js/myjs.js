jQuery.noConflict();
(function($) {
// кнопочка показать больше в разделе интеграции
    $( document ).ready(function() {
        $('.integration__more-button').click(function(){
            $('.integration__wrap').toggleClass('open')
        })

    });


    //слайдер с отзывами
    var mySwiper = new Swiper ('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
        },
        loop: true,
        grabCursor: true,
        autoHeight: true,
        slidesPerView: 1,
        breakpoints: {

            1026: {
                slidesPerView: 2,
                spaceBetween: 24
            }
        }
    });

    //меню в футере
    if (document.documentElement.scrollWidth <= 865){
        document.querySelectorAll('.footer-nav__list-title').forEach(item => {
            item.addEventListener('click', event => {
                const justClicked = event.target;
                justClicked.classList.toggle('open')
            })
        });

    }


})(jQuery);
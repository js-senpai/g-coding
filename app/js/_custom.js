document.addEventListener("DOMContentLoaded", function() {
    //Lazy Load
    let lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazy"
    });
    lazyLoadInstance.update();
    $('.case-slider ').slick({
        infinite: true,
        variableWidth: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        responsive: [
            {
                breakpoint: 830,
                settings: {
                    centerMode: true
                }
            }
        ]
    });
    // FAQ
    $('.faq-tab').collapsible();
    new WOW().init();
    //download
    let buttonDownload = document.querySelector('.eigth-block-bottom .btn-more')
    buttonDownload.addEventListener('click',function () {
        this.classList.add('clicked');
        setTimeout(()=>{
            this.classList.add('success')
        },2600)
    });
    // Плавный скролл
    $("a.scroll-to").on("click", function(e){
        e.preventDefault();
        var anchor = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(anchor).offset().top - 60
        }, 1500);
    });
    //Open first popup
    $('.btn-popup').click(function (e) {
        e.preventDefault();
        let currentTitle = $(this).siblings('.packet-title').text();
        $('.first-popup').fadeIn('slow');
        $('.first-popup .packet-input').val(currentTitle);
    });
    $('.eigth-block-bottom .btn-more').click(function (e) {
        e.preventDefault();
        $('.first-popup').fadeIn('slow');
        $('.first-popup .packet-input').val(currentTitle);
    });
    $('.close-popup').click(function(){
        $(this).parent().parent().parent().fadeOut('slow')
    });
    $('.tab-btn').click(function() {
        if(!$(this).hasClass('active')){
            $(this).addClass('active').siblings().removeClass('active');
            let currentTab = $(this).attr('data-tab');
            if(!$('.'+currentTab).hasClass('active')){
                $('.'+currentTab).addClass('active').siblings().removeClass('active')   ;
            }
        }
    })
});


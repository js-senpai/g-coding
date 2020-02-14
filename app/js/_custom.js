document.addEventListener("DOMContentLoaded", function() {
    //Lazy Load
    let lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazy"
    });
    lazyLoadInstance.update();
    $('.case-slider ').slick({
        centerMode: true,
        centerPadding: '60px',
        infinite: true,
        slidesToShow: 3
    })
});


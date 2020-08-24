window.onload = function () {

    $(document).ready(function() {
        $(".fancybox").fancybox();
    });

    // const galleryImages = document.querySelectorAll('.gallery-responsive__img');
    //
    // const popUp = document.querySelector('.gallery__popup')
    // for (let image of galleryImages) {
    //     image.addEventListener('click', () => {
    //         document.querySelector('.gallery__popup__img').src = image.src;
    //         popUp.classList.add('show')
    //     })
    // }
    // popUp.addEventListener('click', () => {
    //     popUp.classList.remove('show')
    // })
    if (window.innerWidth < 768) {
        $('.gallery-responsive').addClass('owl-carousel');
        $('.gallery-responsive').owlCarousel({
            items: 3,
            nav: true,
            center: true,
            loop: true,
            gutter: 20,
            navText: [
                '<img src="../img/arrow-thin-left.png">',
                '<img src="../img/arrow-thin-right.png">'
            ],
        })
    }

}
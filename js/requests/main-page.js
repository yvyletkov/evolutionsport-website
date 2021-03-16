requestInfo('main-page')
    .then((res) => {
        res.gallery.forEach((img) => {
            $(`<a class="fancybox" data-fancybox-group="gallery" rel="group1" href=https://admin.evolutionsport.ml${img.url}>` +
                `<img class="gallery-responsive__img" src=https://admin.evolutionsport.ml${img.url} alt=""/>` +
                `</a>`).appendTo('.gallery-responsive')
        })
        $(".fancybox").fancybox(
            {groupAttr: 'data-fancybox-group'}
        );
    })
    .catch((err) => console.log(err))

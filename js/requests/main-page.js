requestInfo('main-page')
    .then((res) => {
        res.gallery.forEach((img) => {
            $(`<a class="fancybox" data-fancybox-group="gallery" rel="group1" href=http://erp-evo.ml:1337${img.url}>` +
                `<img class="gallery-responsive__img" src=http://erp-evo.ml:1337${img.url} alt=""/>` +
                `</a>`).appendTo('.gallery-responsive')
        })
        $(".fancybox").fancybox(
            {groupAttr: 'data-fancybox-group'}
        );
    })
    .catch((err) => console.log(err))

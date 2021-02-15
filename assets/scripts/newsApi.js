const BD_SERVER_URL = 'https://evo-dashboard.ml/'

window.addEventListener('load', async () => {
    const res = await fetch(`${BD_SERVER_URL}evo/news/list`, {
        method: "GET",
    })
    const json = await res.json();
    console.log(json)

    json.forEach(function (item) {
        document.querySelector("#news-index-slider").insertAdjacentHTML('afterbegin', `<div class="item">
                        <img
                                class="lazyload img-fluid"
                                src='${BD_SERVER_URL}${item.previewImg}'
                                alt=""
                        />
                        <div class="news-details">
                            ${item.title}
                            <span class="news-subtitle">
                                ${item.content}
                            </span>
                            <a href="#" class="btn button-blue">Подробнее</a>
                        </div>
                    </div>    
    
    `)
    })

    if ($("#news-index-slider").length) {
        const newsSlider = tns({
            container: "#news-index-slider",
            items: 1,
            gutter: 20,
            loop: true,
            nav: false,
            navPosition: "bottom",
            preventScrollOnTouch: false,
            controlsText: [
                '<img src="./img/arrow-thin-left.png">',
                '<img src="./img/arrow-thin-right.png">',
            ],
            responsive: {
                768: {
                    items: 1,
                },
                1024: {
                    items: 3,
                },
                1200: {
                    items: 4,
                },
            },
        });
    }

})
const BD_SERVER_URL = 'https://evo-dashboard.ml/'

function cutTags(str) {
    const regex = /<[^>]*>/g;
    return str.replace(regex, "");
}

window.addEventListener('load', async () => {
    const res = await fetch(`${BD_SERVER_URL}evo/news/list`, {
        method: "GET",
    })

    if (res.status === 200) {
        const json = await res.json();
        console.log(json)

        json.forEach(function (item) {



            if (item.unactive !== 'true') document.querySelectorAll("#news-index-slider, #page-news").forEach( (el) => {
                el.insertAdjacentHTML('afterbegin', `
                    <div class="item" data-id="${item._id}">
                        <img
                                class="lazyload img-fluid"
                                src='${BD_SERVER_URL}${item.previewImg}'
                                alt=""
                        />
                        <div class="news-details">
                            <p>${item.title}</p>
                            <span class="news-subtitle">
                                ${cutTags(item.content).slice(0, 100)}
                            </span>
                            <a href="/new/news.html?id=${item._id}" class="btn button-blue">Подробнее</a>
                        </div>
                    </div>    
    
            `)
            })

        })
    }
    else {
        console.log('Error while loading NEWS')
    }

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

    if ($("#page-news").length) {
        const newsPageSlider = tns({
            container: "#page-news",
            items: 1,
            gutter: 20,
            loop: true,
            nav: false,
            navPosition: "bottom",
            preventScrollOnTouch: false,
            controlsText: [
                '<img src="../img/arrow-thin-left.png">',
                '<img src="../img/arrow-thin-right.png">',
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


function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}


const loadNewsItem = async () => {
    const id = getParameterByName('id')
    const res = await fetch(`${BD_SERVER_URL}evo/news/get`, {
        method: "POST",
        body: JSON.stringify({
            id: `${id}`
        }),
        headers: {'Content-Type': "application/json"}
    })

    if (res.status === 200) {

        let data = await res.json();

        if (data.link) window.location = data.link

        document.querySelector('#news-item-title').innerHTML = data.title
        document.querySelector('#news-item-content').innerHTML = data.content
        document.querySelector('#news-item-img').src = `${BD_SERVER_URL}${data.mainImg}`
        document.querySelector('title').innerHTML = `${data.title} – ЦС Эволюция`
    }
    else {
        throw new Error('Ошибка загрузки новости')
    }
}
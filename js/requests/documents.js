async function requestInfo(url) {
    try {
        const res = await fetch(`https://admin.evolutionsport.ml/${url}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
        });

        if (!res.ok) {
            throw new Error(`error ${res.status}`);
        }
        return await res.json();
    } catch (err) {
        console.log(err);
    }
}

requestInfo('documents')
    .then((res) => {
        console.log(res);
        res.forEach((doc) => {
            if (doc.type === 'official') {
                $(`
            <div class="supaSlider-insideSlider__item">
                <div class="supaSlider-insideSlider__item-content">
                    <p>${doc.name}</p>
                    <img src="https://admin.evolutionsport.ml${doc.file[0].url}" alt="">
                    ${doc.file[1] ?
                    `<a href="https://admin.evolutionsport.ml${doc.file[1].url}"
                      target="_blank">Подробнее</a>`
                    :
                    `<a href="https://admin.evolutionsport.ml${doc.file[0].url}"
                      data-fancybox="documents">Подробнее</a>`}
                </div>
            </div>
            `).appendTo('.supaSlider-insideSlider.supaSlider-insideSlider_chainHead');

                $(`
            <div class="documents-slider-mobile__item">
                <div class="documents-slider-mobile__item-content">
                    <p>${doc.name}</p>
                    ${doc.file[1] ?
                    `<a style="width: 80%" target="_blank" href="https://admin.evolutionsport.ml${doc.file[1].url}">
                        <img src="https://admin.evolutionsport.ml${doc.file[0].url}" alt="">
                    </a>`
                    :
                    `<a class="fancybox" rel="group" href="https://admin.evolutionsport.ml${doc.file[0].url}">
                        <img src="https://admin.evolutionsport.ml${doc.file[0].url}" alt="">
                    </a>`}
                </div>
            </div>
            `).appendTo('.documents-slider-mobile');
            }
            if (doc.type === 'local') {
                $(`
                <div class="col-md-4 col-12">
                    <a href="https://admin.evolutionsport.ml${doc.file[0].url}" class="card">
                        <div class="card-body p-3 d-flex" style="min-height: auto">
                            <img style="height: 30px" src="../img/icons/icon-pdf.svg" alt="icon">
                            <p class="card-text ml-3" style="color:unset;margin:0;align-self:center">${doc.name}</p>
                        </div>
                    </a>
                </div>
                `).appendTo('#local-docs');
            }
            if (doc.type === 'pact') {
                $(`
                <div class="col-md-4 col-12">
                    <a href="https://admin.evolutionsport.ml${doc.file[0].url}" class="card">
                        <div class="card-body p-3 d-flex" style="min-height: auto">
                            <img style="height: 30px" src="../img/icons/icon-pdf.svg" alt="icon">
                            <p class="card-text ml-3" style="color:unset;margin:0;align-self:center">${doc.name}</p>
                        </div>
                    </a>
                </div>
                `).appendTo('#pact-docs');
            }
            if (doc.type === 'medical') {
                $(`
                <div class="col-md-4 col-12">
                    <a href="https://admin.evolutionsport.ml${doc.file[0].url}" class="card">
                        <div class="card-body p-3 d-flex" style="min-height: auto">
                            <img style="height: 30px" src="../img/icons/icon-pdf.svg" alt="icon">
                            <p class="card-text ml-3" style="color:unset;margin:0;align-self:center">${doc.name}</p>
                        </div>
                    </a>
                </div>
                `).appendTo('#medical-docs');
            }
        })
        $(".fancybox").fancybox(
            {groupAttr: 'data-fancybox-group'}
        );
    })
    .catch((err) => console.log(err))

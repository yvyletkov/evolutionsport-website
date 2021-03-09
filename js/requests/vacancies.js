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

requestInfo('vacancies')
    .then((res) => {
        console.log(res)
        res.forEach((vacancy) => {
            $(`
           <div class="vacancy-block-tabs-tab-slider-item">
                                <div class="vacancy-block-tabs-tab-slider-item-info">
                                    <div class="row vacancy-block-tabs-tab-slider-item-info__text">
                                        <div class="col-12 col-md-6">
                                            <img class="mx-auto" src="https://admin.evolutionsport.ml${vacancy.file.url}" alt="">
                                        </div>

                                        <div class="col-12 col-md-6">
                                            <div class="vacancy-block-tabs-tab-slider-item-info__title">
                                                <h3>${vacancy.title}</h3>
                                            </div>
                                            <p>Опыт работы: ${vacancy.exp}</p>
                                            <p>Зарплата: ${vacancy.salary}</p>
                                            <p>Должностные обязанности:</p>
                                            <ul>
                                            ${vacancy.duties.duties ? 
                                                vacancy.duties.duties.map((e) => {
                                                    console.log(e)
                                                    return `<li>${e}</li>`
                                                })
                                                : ''}
                                            </ul>
                                            <p>Требования:</p>
                                            <ul>
                                            ${vacancy.duties.demads ?
                                                vacancy.duties.demads.map((e) => `<li>${e}</li>`)
                                            : ''}
                                            </ul>
                                            <a class="btn btn-primary"
                                               style="background-color:#4273b3;border-color:#4273b3;"
                                               href="#">Оставить резюме</a>
                                        </div>

                                    </div>

                                </div>

                            </div>
            `).appendTo('#food');
        })
    })
    .catch((err) => console.log(err))

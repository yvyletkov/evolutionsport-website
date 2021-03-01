async function requestInfo(url) {
    try {
        const res = await fetch(`http://erp-evo.ml:1337/${url}`, {
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

requestInfo('contacts-blocks')
    .then((res) => {
        console.log(res)
        res.forEach((contact) => {
            $(`
            <div class="contacts-page-item">
                <div class="contacts-page-item__title">${contact.name}</div>
                ${contact.address ? `<div class="contacts-page-item__text">${contact.address}</div>` : ''}
                ${contact.time1 ? `<div class="contacts-page-item__text">${contact.time1}${contact.time2 ? `</br>${contact.time2}` : ''}</div>` : ''}
                ${contact.phone ? `<a class="contacts-page-item__link tel" href="tel:${contact.phone}">${contact.phone}${contact.short_phone ? `&nbsp; ${contact.short_phone}` : ''}</a>` : ''}
                ${contact.email ? `<a class="contacts-page-item__link email" href="mailto:${contact.email}">${contact.email}</a>` : ''}
                ${contact.site ? `<a class="contacts-page-item__link site" href="${contact.site}">${contact.site}</a>` : ''}
            </div>`).appendTo('.contacts-page')
        })
    })
    .catch((err) => console.log(err))

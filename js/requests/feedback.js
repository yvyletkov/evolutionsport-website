requestInfo('feedbacks')
    .then((res) => {
        res.forEach((feedback) => {
            $(`
           <div class="supaSlider-insideSlider__item">
                <div class="supaSlider-insideSlider__item-content">
                     <p class="children-supa__suptitle">${feedback.name}:</p>
                     <p class="children-supa__text">${feedback.desc}</p>
                     <p class="children-supa__text">${feedback.date}</p>
                </div>
           </div>
            `).appendTo('.supaSlider-insideSlider.supaSlider-insideSlider_chainHead');
        })
    })
    .catch((err) => console.log(err))

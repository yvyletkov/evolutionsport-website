$('.children-form').on('submit' ,function( event ) {
    event.preventDefault();
    const data = $('.children-form').serializeArray();
        fetch('http://95.181.172.100/erp/mock/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
              },
            body: JSON.stringify(data),
          })
            .then((res) => {
              if (res.ok) {
                $(".call-title").html("Спасибо!");
                  $(".call-text").html("Наши менеджеры свяжутся с вами в указанное время").css("margin-bottom", "0")
                  $(".children-form.order-form, .call-text-down, .call-text-down-link").slideUp({duration: 'fast', easing: 'linear'});
                return res.json();
              }
              return Promise.reject(res.status);
            });
});

$('.map-form').on('submit' ,function( event ) {
    event.preventDefault();
    const data = $('.map-form').serializeArray();
        fetch('http://95.181.172.100/erp/mock/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
              },
            body: JSON.stringify(data),
          })
            .then((res) => {
              if (res.ok) {
                return res.json();
              }
              return Promise.reject(res.status);
            });
});
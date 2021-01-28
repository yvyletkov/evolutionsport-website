if ($(".tarifes-list").length) {
    const tarifesList = tns({
        container: ".tarifes-list",
        items: 1,
        gutter: 20,
        loop: false,
        nav: false,
        navPosition: "bottom",
        preventScrollOnTouch: false,
        controlsText: [
            '<img src="../img/arrow-thin-left.png">',
            '<img src="../img/arrow-thin-right.png">',
        ],
        responsive: {
            768: {
                items: 2,
            },
            320: {
                items: 1,
            },
        },
    });
}

$(function () {
  if ($("#about-us-slide").length) {
    const aboutSlider = tns({
      container: "#about-us-slide",
      items: 1,
      gutter: 20,
      loop: true,
      nav: false,
      navPosition: "bottom",
      preventScrollOnTouch: "force",
      controlsText: [
        '<img src="./img/arrow-blue-left.png">',
        '<img src="./img/arrow-blue-right.png">',
      ],
      responsive: {
        768: {
          items: 2,
        },
        1024: {
          items: 3,
        },
        320: {
          items: 1,
        },
      },
    });
  }
  if ($("#about-us-slide-sbory").length) {
    const aboutSlider = tns({
      container: "#about-us-slide-sbory",
      items: 1,
      gutter: 20,
      loop: true,
      nav: false,
      navPosition: "bottom",
      preventScrollOnTouch: "force",
      controlsText: [
        '<img src="../img/red-arrow-left.png">',
        '<img src="../img/red-arrow-right.png">',
      ],
      responsive: {
        768: {
          items: 2,
        },
        1024: {
          items: 3,
        },
        320: {
          items: 1,
        },
      },
    });
  }
  if ($("#icons__about").length) {
    const calendarSlider = tns({
      container: "#icons__about",
      items: 1,
      gutter: 20,
      loop: true,
      nav: false,
      navPosition: "bottom",
      preventScrollOnTouch: "force",
      controlsText: [
        '<img src="img/arrow-thin-left.png">',
        '<img src="img/arrow-thin-right.png">',
      ],
      responsive: {
        320: {
          items: 1,
        },
        425: {
          items: 1,
        },
        768: {
          items: 3,
        },
      },
    });
  }
  if ($("#row-sbory").length) {
    const calendarSlider = tns({
      container: "#row-sbory",
      items: 1,
      gutter: 20,
      loop: true,
      nav: false,
      navPosition: "bottom",
      preventScrollOnTouch: "force",
      controlsText: [
        '<img src="../img/arrow-thin-left.png">',
        '<img src="../img/arrow-thin-right.png">',
      ],
      responsive: {
        768: {
          disable: true,
        },
        320: {
          items: 1,
        },
        425: {
          items: 1,
        },
        375: {
          items: 1,
        },
      },
    });
  }
  if ($("#calendar-index-slider").length) {
    const calendarSlider = tns({
      container: "#calendar-index-slider",
      items: 1,
      gutter: 20,
      loop: true,
      nav: false,
      navPosition: "bottom",
      preventScrollOnTouch: "force",
      controlsText: [
        '<img src="img/arrow-thin-left.png">',
        '<img src="img/arrow-thin-right.png">',
      ],
      responsive: {
        768: {
          items: 1,
        },
        1024: {
          items: 2,
        },
        1440: {
          items: 3,
        },
        320: {
          items: 1,
        }
      },
    });
  }
  if ($("#news-index-slider").length) {
    const newsSlider = tns({
      container: "#news-index-slider",
      items: 1,
      gutter: 20,
      loop: true,
      nav: false,
      navPosition: "bottom",
      preventScrollOnTouch: "force",
      controlsText: [
        '<img src="img/arrow-thin-left.png">',
        '<img src="img/arrow-thin-right.png">',
      ],
      responsive: {
        768: {
          items: 2,
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
  if ($(".advantages-row").length) {
    const whatYouWait = tns({
      container: ".advantages-row",
      items: 1,
      gutter: 20,
      loop: true,
      nav: false,
      navPosition: "bottom",
      preventScrollOnTouch: "force",
      controlsText: [
        '<img src="../img/arrow-thin-left.png">',
        '<img src="../img/arrow-thin-right.png">',
      ],
      responsive: {
        320: {
          items: 1,
        },
        768: {
          items: 2,
        },
        1024: {
         items: 4,
        }
      },
    });
  }
  if ($("#advantages__about").length) {
    const advantages = tns({
      container: "#advantages__about",
      items: 1,
      gutter: 20,
      loop: true,
      nav: false,
      navPosition: "bottom",
      preventScrollOnTouch: "force",
      controlsText: [
        '<img src="../img/arrow-thin-left.png">',
        '<img src="../img/arrow-thin-right.png">',
      ],
      responsive: {
        320: {
          items: 1,
        },
        768: {
          items: 2,
        },
        1024: {
         items: 4,
        }
      },
    });
  }
  if ($(".sea-box").length) {
    const advantages = tns({
      container: ".sea-box",
      items: 1,
      gutter: 20,
      loop: true,
      nav: false,
      navPosition: "bottom",
      preventScrollOnTouch: "force",
      controlsText: [
        '<img src="../img/arrow-thin-left.png">',
        '<img src="../img/arrow-thin-right.png">',
      ],
      responsive: {
        320: {
          items: 1,
        },
        768: {
          items: 1,
        },
        1024: {
         disable: true,
        }
      },
    });
  }
});

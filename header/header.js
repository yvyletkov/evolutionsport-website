$(document).ready(function () {

    let galleryTouched = false;
    $('.gallery-responsive').on('touchstart', function (e) {
        if (!galleryTouched) {
            lazyload();
            galleryTouched = true;
        }
    })

    $(`<div class="container">
            <div class="collapse navbar-collapse justify-content-between" id="navbarToggle">

                <ul class="navbar-nav left-menu">
                    <li class="nav-item">
                        <a id="sidebarCollapse">
                            <span></span>
                        </a
                        
                    </li>
                   
                    <li class="nav-item ml-5">
                        <a class="nav-link" style="white-space: nowrap" href="/about/news.html">Новости "Эволюции"</a>
                    </li>
                </ul>

                <a class="navbar-brand d-none d-lg-block" style="position: absolute; left: 50%; transform: translateX(-50%)" href="/">
                    <div class="logo-dark"></div>
                    <img
                            src="../img/main-logo-fix.jpg"
                            class="logo-white"
                            alt="logo-white"
                    />
                </a>

                <ul class="navbar-nav right-menu">
                    <li class="nav-item">
                        <a class="nav-link phone-menu" href="tel:88007771826">8 (800) 777-18-26</a>
                    </li>
                    <li class="nav-item">
                        <div class="nav-link button-blue__mobile"><i class="fa fa-phone" aria-hidden="true"></i></div>
                        <div class="nav-link button-blue">
                            <i class="fa fa-phone"></i> Консультация
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="alert alert-primary hello-alert" role="alert">
            Добро пожаловать на официальный сайт Центра спорта "Эволюция"!
            <button type="button" class="close" onclick="closeAlert()" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>`).appendTo('header.navbar');

    const menu = $(`<div class="norm-menu-wrap">
                    <div class="norm-menu">
                        <div class="norm-menu__close">
                            <img src="../img/icons/close.svg" alt="значок закрытия" class="menu_close"/>
                        </div>
                        <a href="#" class="norm-menu__logo">
                            <img src="../assets/images/logo-menu.png" alt="logo"/>
                        </a>
                        <div class="norm-menu-items">

                            <div class="norm-menu-items-item">
                                <div class="norm-menu-items-item__title">
                                    <a class="url__pages" href="/index.html">Главная</a>
                                </div>
                            </div>

                            <div class="norm-menu-items-item list-wrap">
                                <div class="norm-menu-items-item__title">
                                    <a class="url__pages" href="/sports-fees/sports-fees.html">Спортивные сборы</a>
                                    <span></span>
                                </div>
                                <div class="norm-menu-items-item-list">
                                    <a
                                            class="norm-menu-items-item-list__item"
                                            href="/sports-fees/vodnyie-vidyi-sporta.html"
                                    >Водные виды спорта</a
                                    >
                                    <a
                                            class="norm-menu-items-item-list__item"
                                            href="/sports-fees/basketbol.html"
                                    >Баскетбол</a
                                    >
                                    <a
                                            class="norm-menu-items-item-list__item"
                                            href="/sports-fees/volejbol.html"
                                    >Волейбол</a
                                    >
                                    <a
                                            class="norm-menu-items-item-list__item"
                                            href="/sports-fees/edinoborstva.html"
                                    >Единоборства</a
                                    >
                                    <a
                                            class="norm-menu-items-item-list__item"
                                            href="/sports-fees/futbol.html"
                                    >Футбол</a
                                    >
                                    <a
                                            class="norm-menu-items-item-list__item"
                                            href="/sports-fees/gimnastika.html"
                                    >Гимнастика</a
                                    >
                                    <a
                                            class="norm-menu-items-item-list__item"
                                            href="/sports-fees/legkaya-atletika.html"
                                    >Легкая атлетика</a
                                    >
                                    <a
                                            class="norm-menu-items-item-list__item"
                                            href="/sports-fees/tennis.html"
                                    >Теннис</a
                                    >
                                    <a
                                            class="norm-menu-items-item-list__item"
                                            href="/sports-fees/fextovanie.html"
                                    >Фехтование</a
                                    >
                                    <a
                                            class="norm-menu-items-item-list__item"
                                            href="/sports-fees/gandbol.html"
                                    >Гандбол</a
                                    >
                                    <a
                                            class="norm-menu-items-item-list__item"
                                            href="/sports-fees/tanczyi.html"
                                    >Танцы</a
                                    >

                                    <a
                                            class="norm-menu-items-item-list__item"
                                            href="/sports-fees/pauerlifting.html"
                                    >Пауерлифтинг</a
                                    >
                                    <a
                                            class="norm-menu-items-item-list__item"
                                            href="/sports-fees/metatelnyie-vidyi-sporta.html"
                                    >Метательные виды спорта</a
                                    >
                                    <a
                                            class="norm-menu-items-item-list__item"
                                            href="/sports-fees/strelba-iz-luka.html"
                                    >Стрельба из лука</a
                                    >
                                </div>
                            </div>

                            <div class="norm-menu-items-item">
                                <div class="norm-menu-items-item__title">
                                    <a class="url__pages" href="/turniryi.html">Турниры</a>
                                </div>
                            </div>

                            <div class="norm-menu-items-item list-wrap">
                                <div class="norm-menu-items-item__title">
                                    <a class="url__pages" href="/health-center/health-center.html">Центр здоровья</a>
                                    <span></span>
                                </div>
                                <div class="norm-menu-items-item-list">
                                    <a
                                            class="norm-menu-items-item-list__item"
                                            href="/health-center/rehabilitation.html"
                                    >Реабилитация</a
                                    >
                                    <a
                                            class="norm-menu-items-item-list__item"
                                            href="/health-center/sanatorium-treatment.html"
                                    >Санаторно-курортное лечение</a
                                    >
                                    <a
                                            class="norm-menu-items-item-list__item"
                                            href="/health-center/parasport.html"
                                    >Параспорт</a
                                    >
                                </div>
                            </div>

                            <div class="norm-menu-items-item list-wrap">
                                <div class="norm-menu-items-item__title">
                                    <a class="url__pages" href="/children-camp/children-camp.html">Детский лагерь</a>
                                    <span></span>
                                </div>
                                <div class="norm-menu-items-item-list">
<!--                                    <a class="norm-menu-items-item-list__item" href="/children-camp/autumn-vacation.html">-->
<!--                                       Осенний лагерь-->
<!--                                    </a>-->
<!--                                    <a class="norm-menu-items-item-list__item" href="/children-camp/autumn-vacation-day-camp.html">-->
<!--                                       Дневной лагерь на осенних каникулах-->
<!--                                    </a>-->
<!--                                    <a class="norm-menu-items-item-list__item" href="/children-camp/winter-camp.html">-->
<!--                                        Зимний лагерь-->
<!--                                    </a>-->
                                    <a class="norm-menu-items-item-list__item" href="/children-camp/summer-camp.html">
                                        Летний лагерь
                                    </a>
                                    <a class="norm-menu-items-item-list__item" href="/children-camp/spring-camp.html">
                                        Весенний лагерь
                                    </a>
                                    <a class="norm-menu-items-item-list__item" href="/children-camp/vacation-with-children.html">
                                        Отдых с детьми
                                    </a>
                                </div>
                            </div>

                            <div class="norm-menu-items-item list-wrap">
                                <div class="norm-menu-items-item__title">
                                    <a class="url__pages" href="/resort-vacation/resort-vacation.html">Курортный
                                        отдых</a>
                                    <span></span>
                                </div>
                                <div class="norm-menu-items-item-list">
                                    <a class="norm-menu-items-item-list__item"
                                       href="/resort-vacation/mirnyi.html">
                                        Мирный</a>
                                    <a class="norm-menu-items-item-list__item"
                                       href="/resort-vacation/pogranichnyi.html">
                                        Пограничный</a>
                                    <a class="norm-menu-items-item-list__item"
                                       href="/resort-vacation/sportivnyi.html">
                                        Спортивный</a>
                                    <a class="norm-menu-items-item-list__item"
                                       href="/resort-vacation/zvezdnyi.html">
                                        Звездный</a>
                                    <a class="norm-menu-items-item-list__item"
                                       href="/resort-vacation/shtormovoi.html">
                                        Штормовой</a>
                                </div>
                            </div>

                            <div class="norm-menu-items-item list-wrap">
                                <div class="norm-menu-items-item__title">
                                    <a class="url__pages" href="/fitness-club/fitness-club.html">Фитнес-клуб</a>
                                    <span></span>
                                </div>
                                <div class="norm-menu-items-item-list">
                                    <a
                                            class="norm-menu-items-item-list__item"
                                            href="/fitness-club/subscriptions-and-prices.html"
                                    >Абонементы и цены</a
                                    >
                                    <a
                                            class="norm-menu-items-item-list__item"
                                            href="/fitness-club/pools.html"
                                    >Бассейны</a
                                    >
                                    <a
                                            class="norm-menu-items-item-list__item"
                                            href="/fitness-club/gyms.html"
                                    >Тренажерные залы</a
                                    >
                                    <a
                                            class="norm-menu-items-item-list__item"
                                            href="/fitness-club/group-programs.html"
                                    >Групповые программы</a
                                    >
                                    <a
                                            class="norm-menu-items-item-list__item"
                                            href="/fitness-club/sport-sections.html"
                                    >Спортивные секции</a
                                    >
                                    <a
                                            class="norm-menu-items-item-list__item"
                                            href="/fitness-club/bath-complex.html"
                                    >Банный комплекс</a
                                    >
                                    <a
                                            class="norm-menu-items-item-list__item"
                                            href="/fitness-club/shedule.html"
                                    >Расписание групповых программ</a
                                    >
                                    <a
                                            class="norm-menu-items-item-list__item"
                                            href="/fitness-club/coaches.html"
                                    >Тренеры</a
                                    >
                                    <a
                                            class="norm-menu-items-item-list__item"
                                            href="/fitness-club/rent.html"
                                    >Аренда спортивных сооружений</a
                                    >
                                </div>
                            </div>

                            <div class="norm-menu-items-item">
                                <div class="norm-menu-items-item__title">
                                    <a class="url__pages" href="/events-center/czentr-meropriyatij.html">Центр
                                        мероприятий</a>
                                </div>
                            </div>

                            <div class="norm-menu-items-item list-wrap">
                                <div class="norm-menu-items-item__title">
                                    <a id="services-menu-item" class="url__pages" href="/services/services.html">Услуги</a>
                                    <span></span>
                                </div>
                                <div class="norm-menu-items-item-list">
                                    <a
                                            class="norm-menu-items-item-list__item"
                                            href="/services/transfer.html"
                                    >Трансфер</a
                                    >
                                    <a
                                            class="norm-menu-items-item-list__item"
                                            href="/services/animation.html"
                                    >Анимация</a
                                    >
                                    <a
                                            class="norm-menu-items-item-list__item"
                                            href="/services/surfing.html"
                                    >Серфинг</a
                                    >
                                    <a
                                            class="norm-menu-items-item-list__item"
                                            href="/services/excursions.html"
                                    >Экскурсии</a
                                    >
                                </div>
                            </div>

                            <div class="norm-menu-items-item list-wrap">
                                <div class="norm-menu-items-item__title">
                                    <a id="infrastructure-menu-item" class="url__pages"
                                       href="/infrastructure/infrastructure.html">Инфраструктура</a>
                                    <span></span>
                                </div>
                                <div class="norm-menu-items-item-list">
                                    <!--                                <a-->
                                    <!--                                        class="norm-menu-items-item-list__item"-->
                                    <!--                                        href="/infrastructure/karta-territorii/"-->
                                    <!--                                >Карта территории</a-->
                                    <!--                                >-->
                                    <a
                                            class="norm-menu-items-item-list__item"
                                            href="/infrastructure/residence.html"
                                    >Проживание</a
                                    >
                                    <a
                                            class="norm-menu-items-item-list__item"
                                            href="/infrastructure/pools.html"
                                    >Бассейны</a
                                    >
                                    <a
                                            class="norm-menu-items-item-list__item"
                                            href="/infrastructure/football-fields.html"
                                    >Футбольные поля</a
                                    >
                                    <a
                                            class="norm-menu-items-item-list__item"
                                            href="/infrastructure/indoor-gyms.html"
                                    >Крытые спортивные залы</a
                                    >
                                    <a
                                            class="norm-menu-items-item-list__item"
                                            href="/infrastructure/stadiums.html"
                                    >Стадионы</a
                                    >
                                    <a
                                            class="norm-menu-items-item-list__item"
                                            href="/infrastructure/gyms.html"
                                    >Тренажерные залы</a
                                    >
                                    <a
                                            class="norm-menu-items-item-list__item"
                                            href="/infrastructure/beach-sports-grounds.html"
                                    >Пляжные спортивные площадки</a
                                    >
                                    <a
                                            class="norm-menu-items-item-list__item"
                                            href="/infrastructure/beach.html"
                                    >Пляж</a
                                    >
                                    <a
                                            class="norm-menu-items-item-list__item"
                                            href="/infrastructure/bath-complex.html"
                                    >Банный комплекс</a
                                    >
                                    <a
                                            class="norm-menu-items-item-list__item"
                                            href="/infrastructure/conference-rooms.html"
                                    >Конференц-залы</a
                                    >
                                    <a
                                        class="menu-item-hidden norm-menu-items-item-list__item"
                                        href="/infrastructure/shops.html"
                                >Магазины</a
                                >
                                </div>
                            </div>

                            <div class="norm-menu-items-item list-wrap">
                                <div class="norm-menu-items-item__title">
                                    <a id="about-menu-item" class="url__pages" href="/about/about.html">О центре</a>
                                    <span></span>
                                </div>
                                <div class="norm-menu-items-item-list">
                                    <a
                                            class="norm-menu-items-item-list__item"
                                            href="/about/documents.html"
                                    >Официальные документы</a
                                    >
                                    <!--                                <a-->
                                    <!--                                        class="norm-menu-items-item-list__item"-->
                                    <!--                                        href="/about/map.html"-->
                                    <!--                                >Карта территории</a-->
                                    <!--                                >--><a
                                        class="menu-item-hidden norm-menu-items-item-list__item"
                                        href="/about/gallery.html"
                                >Галерея</a
                                >
                                    <a
                                            class="norm-menu-items-item-list__item"
                                            href="/about/team.html"
                                    >Команда</a
                                    >
                                    <a
                                            class="norm-menu-items-item-list__item"
                                            href="/about/news.html"
                                    >Новости</a
                                    >
                                    <a
                                            class="norm-menu-items-item-list__item"
                                            href="/about/feedback.html"
                                    >Отзывы</a
                                    >
                                    <a
                                            class="norm-menu-items-item-list__item"
                                            href="/about/vacancies.html"
                                    >Вакансии</a
                                    >
                                    <a
                                            class="norm-menu-items-item-list__item"
                                            href="/about/faq.html"
                                    >Вопросы и ответы</a>
                                </div>
                            </div>

                            <div class="norm-menu-items-item">
                                <div class="norm-menu-items-item__title">
                                    <a class="url__pages" href="/contacts.html">Контакты</a>
                                </div>
                            </div>

                        </div>
                        <div class="norm-menu-socials">
                            <a href="https://vk.com/evolutionsportcenter" class="norm-menu-socials__item">
                                <img src="../assets/images/icon/vk.png" alt="vk"/>
                            </a>
                            <a href="https://www.instagram.com/evolution.sportcenter/" class="norm-menu-socials__item">
                                <img src="../assets/images/icon/inst.png" alt="instagram"/>
                            </a>
                            <a href="https://www.facebook.com/evolutioncentrsport" class="norm-menu-socials__item">
                                <img src="../assets/images/icon/fb.png" alt="facebook"/>
                            </a>
                        </div>
                        <p>Звоните нам</p>
                        <a href="tel:88007771826">8 (800) 777-18-26</a>
                    </div>
                </div>`)

    $('.left-menu').before(menu);

    $(function () {
        // scroll functions
        $(window).scroll(function (e) {
            // add/remove class to navbar when scrolling to hide/show
            var scroll = $(window).scrollTop();
            if (scroll >= 150) {
                $(".navbar").addClass("navbar-black");
            } else {
                $(".navbar").removeClass("navbar-black");
            }
        });
    });

    $(document).on("click", ".norm-menu__close", function (e) {
        $(".norm-menu-wrap").removeClass("active");
    });

    $(".norm-menu-items-item.list-wrap span, #infrastructure-menu-item, #services-menu-item, #about-menu-item").click(function (e) {
        e.preventDefault();
        $(this).closest(".norm-menu-items-item").toggleClass("active");
        if ($(".norm-menu-items-item").is(".active")) {
            $(".norm-menu-items-item").removeClass("active");
            $(this).closest(".norm-menu-items-item").addClass("active");
        }
    });

    $("#sidebarCollapse").click(function () {
        $(".norm-menu-wrap").addClass("active");
    });

    let YaMapsShown = false;

    $(window).scroll(function () {
        if (!YaMapsShown) {
            if ($(window).scrollTop() + $(window).height() > $(document).height() - 2000) {
                showYaMaps();
                YaMapsShown = true;
            }
        }
    });

    function showYaMaps() {
        let script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A9a421540de853b065d785f0fc604e13be13cbd2e8f6e69e5346192b568227b5a&amp;width=100%25&amp;height=495&amp;lang=ru_RU&amp;scroll=true";
        script.async = true;
        document.getElementById("YaMaps").appendChild(script);
    }

    lazyload();

});





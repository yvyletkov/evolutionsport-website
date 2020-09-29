$(document).ready( () => {

    (function createPoints() {
        let map = document.getElementsByClassName('interactive-map')[0];
        for (let i = 1; i <= 47; i++) {
            let pointEl = document.createElement('div');
            pointEl.id = 'map-point-' + i;
            pointEl.className = 'map-point';
            map.appendChild(pointEl)
        }
    })();

    const mapPoints = {
        "map-point-1": "Административный корпус",
        "map-point-2": "Физкультурно оздоровительный корпус",
        "map-point-3": "Автостоянка",
        "map-point-4": "Баскетбольная площадка",
        "map-point-5": "Футбольное поле с искусственным покрытием",
        "map-point-6": "Парковая зона",
        "map-point-7": "Стадион международного класса",
        "map-point-8": "Корпус 'Учебный'",
        "map-point-9": "Дворец культуры",
        "map-point-10": "Конференц-зал",
        "map-point-11": "Футбольное поле тренировочное",
        "map-point-12": "Площадка анимации",
        "map-point-13": "Корпус 'Лабораторный'",
        "map-point-14": "Футбольное поле",
        "map-point-15": "Корпус 'Мирный'",
        "map-point-16": "Комплексная баскетбольно-волейбольная площадка",
        "map-point-17": "Корпус 'Реабилитационный'",
        "map-point-18": "Спортивный зал (малый)",
        "map-point-19": "Комплекс 'Водно-спортивный'",
        "map-point-20": "Автостоянка",
        "map-point-21": "Бассейн 50м (8 дорожек)",
        "map-point-22": "Бассейн 50м (10 дорожек)",
        "map-point-23": "Корпус 'Пограничный'",
        "map-point-24": "Спортивная площадка",
        "map-point-25": "Детская площадка",
        "map-point-26": "Корпус 'Звездный'",
        "map-point-27": "Комплексная спортивная площадка для баскетбола и волейбола",
        "map-point-28": "Гимнастическая спортивная площадка 'Воркаут'",
        "map-point-29": "Корпус 'Штормовой'",
        "map-point-30": "Виндсерфинг (эллинг)",
        "map-point-31": "Набережная",
        "map-point-32": "Пляж",
        "map-point-33": "Специальная реабилитационно-спортивная площадка",
        "map-point-34": "Метательный стадион",
        "map-point-35": "Летнаяя развлекательно-игровая площадка",
        "map-point-36": "Корпус 'Спортивный'",
        "map-point-37": "Наклонная беговая дорожка",
        "map-point-38": "Озеро 'Жемчужное'",
        "map-point-39": "Детские аттракционы, прокат велосипедов",
        "map-point-40": "КПП №1",
        "map-point-41": "Остановка общественного транспорта",
        "map-point-42": "Спасательная станция",
        "map-point-43": "КПП №2",
        "map-point-44": "Теневые навесы",
        "map-point-45": "Тренажеры уличные",
        "map-point-46": "Комплексная спортивная площадка для баскетбола и волейбола",
        "map-point-47": "Медпункт",
    };

    $(".map-point").hover(
        (e) => {
            let text = '';

            for (let key in mapPoints) {
                if (key === e.target.id) text = mapPoints[key]
            }

            const pointEl = document.getElementById(e.target.id);
            let style = window.getComputedStyle(pointEl);
            let x = style.left;
            let y = style.bottom;

            let labelEl = document.createElement('div');
            labelEl.innerHTML = text;
            labelEl.className = "map-point__label";
            labelEl.style.left = window.innerWidth < 1000 ? `calc(${x} + 9px)` : `calc(${x} + 25px)`;
            labelEl.style.bottom = window.innerWidth < 1000 ? `calc(${y} + 9px)` : `calc(${y} + 25px)`;

            let map = document.getElementsByClassName('interactive-map')[0];
            map.appendChild(labelEl);
        },
        () => {
            document.getElementsByClassName('map-point__label')[0].parentNode.removeChild(document.getElementsByClassName('map-point__label')[0]);
        })
});
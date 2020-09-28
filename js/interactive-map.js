$(document).ready( () => {

    (function createPoints() {
        let map = document.getElementsByClassName('interactive-map')[0];
        for (let i = 1; i <= 47; i++) {
            let pointEl = document.createElement('div');
            pointEl.id = 'map-point-' + i;
            pointEl.className = 'map-point';
            map.appendChild(pointEl)
        }
    })()

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
            labelEl.style.left = `calc(${x} + 25px)`;
            labelEl.style.bottom = `calc(${y} + 25px)`;

            let map = document.getElementsByClassName('interactive-map')[0];
            map.appendChild(labelEl);
        },
        () => {
            document.getElementsByClassName('map-point__label')[0].parentNode.removeChild(document.getElementsByClassName('map-point__label')[0]);
        })
});
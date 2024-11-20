import styles from "@/widgets/Stages/styles.module.scss";

interface ICarouselMobileStages {
    stages: {
        id: number;
        text: string;
        className?: string;
        image?: string;
    }[];
}

export const mobileStages: ICarouselMobileStages[] = [
    {
        stages: [
            {
                id: 1,
                text: "Строительство железнодорожной магистрали Москва-Васюки",
                className: styles.div1
            },
            {
                id: 2,
                text: "Открытие фешенебельной гостиницы «Проходная пешка» и других небоскрёбов",
                className: styles.div2
            }
        ]
    },
    {
        stages: [
            {
                id: 3,
                text: "Поднятие сельского хозяйства в радиусе на тысячу километров: производство овощей, фруктов, икры, шоколадных конфет",
                className: styles.div3
            }
        ]
    },
    {
        stages: [
            {
                id: 4,
                text: "Строительство дворца для турнира",
                className: styles.div4
            },
            {
                id: 5,
                text: "Размещение гаражей для гостевого автотранспорта",
                className: styles.div5
            }
        ]
    },
    {
        stages: [
            {
                id: 6,
                text: "Постройка сверхмощной радиостанции для передачи всему миру сенсационных результатов",
                className: styles.div6
            }
        ]
    },
    {
        stages: [
            {
                id: 7,
                text: "Создание аэропорта «Большие Васюки» с регулярным отправлением почтовых самолётов и дирижаблей во все концы света, включая Лос-Анджелес и Мельбурн",
                className: styles.div7
            }
        ]
    }
];
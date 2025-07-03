//import { districts } from "./constants"
export const routes = [
    
     {
        id: 1,
        name: 'Круг от "Кофейни номер 3", 6\u00A0км',
        desc: 'Любимый маршрут капитана клуба Шорты',
        distance: 6,
        districts: ["Центральный"],
        trafficlight: "мало",
        attractions: ["Амалиенау","Центральный парк","Дом с горгульей"],
        maplink:'https://yandex.ru/maps/-/CCUFVCd6cC',
        fotolinks:[]
    },  {
        id: 2,
        name: 'Круг от "Кофейни номер 3", 5\u00A0км',
        desc: "Не любимый маршрут капитана клуба Шорты",
        distance: 5,
        districts: ["Центральный"],
        trafficlight: "мало",
        attractions: ["Амалиенау","Центральный парк","Парк Победы", "Памятник 1200 гвардейцам"],
        maplink:'https://yandex.ru/maps/-/CCU8a2QNDD',
        fotolinks:[]
    },
           {
        id: 3,
        name: "Октябрьский остров",
        desc:'Пробежка вокруг филиала Третьяковской галереи и стадиона ',
        distance: 5,
        districts: ["Московский"],
        trafficlight: "нет",
        attractions: ["Третьяковская галерея", "Ростех арена", "Остров Канта", "Кафедральный Собор"],
        maplink:'https://yandex.com/maps/-/CHfmmS0r',
        fotolinks:[]
    },  {
        id: 4,
        name: "Марауненхоф",
        desc:'Ботсад — Верхний пруд — Музей янтаря',
        distance: 7,
        districts: ["Ленинградский"],
        trafficlight: "мало",
        attractions: ["Парк Юность", "Ботанический сад", "Музей Янтаря", "Верхний пруд"],
        maplink:'https://yandex.com/maps/-/CHfmeZ1L',
        fotolinks:[]
    },  {
        id: 10,
        name: "Веложорожка Сельма-Чкаловск",
        desc:'Пробежка без светофоров по велодорожке',
        distance: 9,
        districts: ["Центральный"],
        trafficlight: "мало",
        attractions: ["Велодорожка"],
        maplink:'https://yandex.com/maps/-/CHfmyYlX',
        fotolinks:[]
    },    {
        id: 11,
        name: "Понарт — Батальная — Летнее озеро",
        desc:'Познакомится с Балтрайоном',
        distance: 6,
        districts: ["Московский"],
        trafficlight: "мало",
        attractions: ["Понарт", "Летнее озеро", "Зимнее озеро"],
        maplink:'https://yandex.com/maps/-/CHfm5UIm',
        fotolinks:[]
    },{
        id: 6,
        name: "Полумарафон в центре",
        desc:'Посмотреть половину города за одну пробежку',
        distance: 21,
        districts: ["Центральный", "Ленинградский"],
        trafficlight: "много",
        attractions: ["Третьяковская галерея", "Ростех арена","Рыбная деревня", "Амалиенау", "Верхний пруд", "Нижний пруд", "Музей Мирового океана"],
        maplink:'https://ttrails.ru/routes/21-km-ot-amalienau-bakery-do-kofeyni-',
        fotolinks:[]
    },  {
        id: 7,
        name: "Полумарафон в Балтрайоне",
        desc:'Посмотреть вторую половину города за одну пробежку',
        distance: 21,
        districts: ["Московский", "Центральный"],
        trafficlight: "много",
        attractions: ["Балтийский парк", "Парк Родина", "Кафедральный собор", "Драматический театр", "Амалиенау"],
        maplink:'https://ttrails.ru/routes/cherez-baltrayon',
        fotolinks:[]
    },{
        id: 8,
        name: "Все хомлины",
        desc:'Увидеть всех хомлинов',
        distance: 7,
        districts: ["Московский"],
        trafficlight: "много",
        attractions: ["Все Хомлины"],
        maplink:null,
        fotolinks:[]
    },{
        id: 9,
        name: "Все ворота",
        desc:'Посмотреть все оставшиеся ворота',
        distance: 12,
        districts: ["Московский"],
        trafficlight: "много",
        attractions: ["Все ворота"],
        maplink:null,
        fotolinks:[]
    }

]

 
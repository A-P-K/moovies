export const initialSeries = {
    "series1": {
        id: "series1",
        rating: 3,
        lang: "RU",
        description: "Революционный технотриллер с Рэми Малеком",
        img: "https://images.genius.com/49ad70b2123be1205edfe119c16b5eaa.985x985x1.jpg",
        isViewed: false,
        seasons: 1,
        title: "Mr. Robot",
        genre: "MOVIE"
    },

    "series2": {
        id: "series2",
        rating: 4,
        lang: "RU",
        description: "Суровые времена Средневековья, но в иной реальности",
        img: "https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/dd78edfd-6a1f-486c-9a86-6acbca940418/600x900",
        isViewed: true,
        seasons: 1,
        title: "Игра престолов",
        genre: "MOVIE"
    },

    "series3": {
        id: "series3",
        rating: 3,
        lang: "RU",
        description: "Детективный сериал в духе «Места встречи...»",
        img: "data:image/jpeg;base64,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",
        isViewed: false,
        seasons: 3,
        title: "Ликвидация",
        genre: "MOVIE"
    },

    "series4": {
        id: "series4",
        rating: 5,
        lang: "ENG",
        description: "Многие психологи «нянчатся» с клиентами",
        img: "https://upload.wikimedia.org/wikipedia/ru/thumb/e/e6/%D0%A1%D0%B5%D1%80%D0%B8%D0%B0%D0%BB_%D0%A2%D1%80%D0%B8%D0%B3%D0%B3%D0%B5%D1%80.jpg/640px-%D0%A1%D0%B5%D1%80%D0%B8%D0%B0%D0%BB_%D0%A2%D1%80%D0%B8%D0%B3%D0%B3%D0%B5%D1%80.jpg",
        isViewed: true,
        seasons: 2,
        title: "Триггер",
        genre: "MOVIE"
    },

    "series5": {
        id: "series5",
        rating: 4,
        lang: "ENG",
        description: "Американский анимационный телесериал",
        img: "https://metarankings.ru/images/uploads/rik-i-morti-cover.jpg",
        isViewed: false,
        seasons: 8,
        title: "Rick and Morty",
        genre: "CARTOON"
    },

    "series6": {
        id: "series6",
        rating: 3,
        lang: "ENG",
        description: "Фантастический мультсериал для взрослых",
        img: "https://s1.stc.all.kpcdn.net/putevoditel/serialy/wp-content/uploads/2021/01/65KuAdebvKKLbSSw37Vrde28KgN-467x697.jpg",
        isViewed: true,
        seasons: 6,
        title: "Futurama",
        genre: "CARTOON"
    }
}
var app = new Vue({

    // DOM элемент, к которому прикреплена сущность
    el: '#app',

    // Начало модели.
    // Определяем свойства и присваиваем им необходимые значения.
    data: {
        active: 'company',
        active_feed: "false"
    },

    computed: {
        
    },

    // Функции, которые будем использовать.
    methods: {
        makeActive: function(item) {
            // Когда модель будет изменена, представление обновится.
            this.active = item;
        },
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
    },
   
});

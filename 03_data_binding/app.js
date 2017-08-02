new Vue({
    el: '#vue-app',
    data: {
        name: 'Rahad',
        interest: 'Javascript',
        website: 'https://github.com/rahaduzzaman/vue_tuts',
        websiteTag: '<a href="https://github.com/rahaduzzaman/vue_tuts">Rahads vue tutorial</a>'
    },
    methods: {
        greet: function(time) {
            return 'Good '+ time +' '+ this.name;
        }
    }
});

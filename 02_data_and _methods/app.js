new Vue({
    el: '#vue-app',
    data: {
        name: 'Rahad',
        interest: 'Javascript'
    },
    methods: {
        greet: function(time) {
            return 'Good '+ time +' '+ this.name;
        }
    }
});

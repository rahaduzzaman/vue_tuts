new Vue({
    el: '#vue-app',
    data: {
        name: 'Rahad',
        age: 25,
        X: 0,
        Y: 0
    },
    methods: {
        add: function(inc) {
            return this.age += inc;
        },
        sub: function(dec) {
            return this.age -= dec;
        },
        getCoOrdinate: function(event) {
            this.X = event.offsetX;
            this.Y = event.offsetY;
        }
    }
});

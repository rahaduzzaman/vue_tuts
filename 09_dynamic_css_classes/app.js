new Vue({
    el: '#vue-app',
    data: {
        available: false,
        adjacent: false
    },
    methods: {

    },
    computed: {
        compClasses: function(){
            return {
                available: this.available,
                adjacent: this.adjacent
            }
        }
    }
});

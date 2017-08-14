new Vue({
    el: '#vue-app',
    data: {
        title: 'Check, ref works!!'
    },
    methods: {
        getRefs: function() {
            this.title = this.$refs.input.value;
        }
    },
    computed: {

    }
});

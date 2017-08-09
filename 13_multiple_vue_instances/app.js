var first = new Vue({
    el: '#vue-app-first',
    data: {
        title: 'This is first vue instance'
    },
    methods: {

    },
    computed: {
        greet: function() {
            return "Hello from the first instance";
        }
    }
});

var second = new Vue({
    el: '#vue-app-second',
    data: {
        title: 'This is second vue instance'
    },
    methods: {
        changeTitle: function() {
            first.title = "first title changed from the second";
        }
    },
    computed: {
        greet: function() {
            return "Yeah, It's second. say hi !!";
        }
    }
});
second.title = "Title change from outside";

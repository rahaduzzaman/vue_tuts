Vue.component('greeting', {
    template: '<p>I am {{name}} <button v-on:click="changeName">Change Name</button></p>',
    data: function(){
        return {
            name: 'Oishy'
        }
    },
    methods: {
        changeName: function(){
            this.name = 'Rahad';
        }
    }
})
var first = new Vue({
    el: '#vue-app-first',
    data: {
        title: 'This is first vue instance'
    },
    methods: {

    },
    computed: {

    }
});

var second = new Vue({
    el: '#vue-app-second',
    data: {
        title: 'This is second vue instance'
    },
    methods: {

    },
    computed: {

    }
});

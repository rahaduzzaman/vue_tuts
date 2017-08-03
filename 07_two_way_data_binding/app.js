new Vue({
    el: '#vue-app',
    data: {
        name: '',
        age: ''
    },
    methods: {
        logName: function() {
            console.log('You have entered the Name.');
        },
        logAge: function() {
            console.log('You have entered the Age.');
        }
    }
});

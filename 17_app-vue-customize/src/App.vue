<template>
<div class="">
    <h1>{{title}}</h1>
    <p>{{ greeting() }}</p>
</div>
</template>

<script>
export default {
    name: 'app',
    data () {
        return {
            title: 'My first vue file'
        }
    },
    methods: {
        greeting: function() {
            return 'Hey champ, complete customization!!';
        }
    }
}
</script>

<style lang="scss">

</style>

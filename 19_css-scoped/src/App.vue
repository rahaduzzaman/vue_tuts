<template>
<div class="">
    <h1>{{title}}</h1>
    <team></team>
</div>
</template>

<script>
// for import locally
import Team from './Team.vue'

export default {
    components: {
        'team': Team
    },
    name: 'app',
    data () {
        return {
            title: 'My first vue file'
        }
    }
}
</script>

<style scoped lang="scss">
h1 {
    color: red;
}
</style>

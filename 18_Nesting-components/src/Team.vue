<template>
<ul>
    <li v-for="member in members">{{ member }}</li>
</ul>
</template>

<script>
export default {
    name: 'app',
    data () {
        return {
            members: ['Rahad','Oishy', 'Love', 'Care']
        }
    }
}
</script>

<style lang="scss">

</style>

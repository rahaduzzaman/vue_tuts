<template>
    <div class="">
        <h1>My buddy list</h1>
        <ul>
            <li v-for="member in members">{{ member }}</li>
        </ul>
    </div>
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

<style scoped lang="scss">
    h1 {
        color: blue;
    }
</style>

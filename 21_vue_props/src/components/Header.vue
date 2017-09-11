<template>
    <header>
        <h2>{{ title }}</h2>
    </header>
</template>

<script>
export default {
    data () {
        return {
            title: 'Components Examples'
        }
    }
}
</script>

<style scoped lang="scss">
    header {
        background: #0cc652;
        padding: 20px 0;
        h2 {
            color: #ffffff;
            text-align: center;
        }
    }
</style>

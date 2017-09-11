<template>
    <footer>
        <p>{{ copyright }}</p>
    </footer>
</template>

<script>
export default {
    data () {
        return {
            copyright: 'copyright 2017 @Rahad'
        }
    }
}
</script>

<style scoped lang="scss">
    footer {
        background: #262626;
        padding: 5px 0;
        p {
            color: #cdcdcd;
            text-align: center;
        }
    }
</style>

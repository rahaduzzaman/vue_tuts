<template>
    <footer>
        <p>{{ copyright }} {{ title }}</p>
    </footer>
</template>

<script>
export default {
    props: {
        title: {
            type: String
        }
    },
    data () {
        return {
            copyright: 'copyright 2017 @'
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

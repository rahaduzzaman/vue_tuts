<template>
    <div>
        <h2>Please fill out the form..</h2>
        <form class="">
            <div class="form-header">
                <slot name="form-header"></slot>
            </div>
            <div class="form-fields">
                <slot name="form-fields"></slot>
            </div>
            <div class="form-controls">
                <slot name="form-controls"></slot>
            </div>
        </form>
    </div>
</template>

<script>

export default {
    props: {

    },
    data () {
        return {

        }
    },
    methods: {

    }
}
</script>

<style scoped lang="scss">
    form {
        max-width: 500px;
        margin: 50px auto 0;
        position: relative;
        input {
            display: block;
            padding: 10px;
            border: 1px solid #ccc;
            margin: 10px 0;
        }
    }
</style>

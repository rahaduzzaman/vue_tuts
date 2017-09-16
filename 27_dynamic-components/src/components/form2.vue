<template>
    <div>
        <h2>Please fill out the form..</h2>
        <form class="">
            <h4>Form Two - login</h4>
            <hr>
            <label for="email">Email</label>
            <input type="email" name="" id="" placeholder="Enter email">
            <label for="password">Password</label>
            <input type="password" name="" id="">

            <button type="submit">Submit</button>
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
    h2 {
        text-align: center;
    }
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

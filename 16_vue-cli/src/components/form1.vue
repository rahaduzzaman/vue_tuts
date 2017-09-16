<template>
    <div>
        <h2>Please fill out the form..</h2>
        <form class="">
            <h4>Form One - Contact Us</h4>
            <hr>
            <label for="name">Your Name</label>
            <input type="text" name="" id="" placeholder="Enter Name">
            <label for="message">Your Message</label>
            <textarea type="text" placeholder="Write Message"></textarea>

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

<template>
    <div class="add-blog">
        <h2>Add a New blog post</h2>
        <form class="">
            <label for="title">Blog Title</label>
            <input type="text" name="" id="" v-model.lazy="blog.title">
            <label for="content">Blog Content</label>
            <input type="text" name="" id="" v-model.lazy="blog.content">
            <div class="checkboxes">
                <label for="vue">Vue</label>
                <input type="checkbox" value="vue" v-model="blog.categories">
                <label for="Express">Express</label>
                <input type="checkbox" value="express" v-model="blog.categories">
                <label for="Angular">Angular</label>
                <input type="checkbox" value="angular" v-model="blog.categories">
                <label for="React">React</label>
                <input type="checkbox" value="react" v-model="blog.categories">
            </div>
        </form>
        <div class="preview">
            <h3>Preview Blog</h3>
            <h5>Blog title: {{ blog.title }}</h5>
            <p>Blog content: {{ blog.content }}</p>
            <p>Blog Categories:</p>
            <ul>
                <li v-for="category in blog.categories">{{ category }}</li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    props: {

    },
    data () {
        return {
            blog: {
                title: "",
                content: "",
                categories: []
            }
        }
    },
    methods: {

    }
}
</script>

<style scoped lang="scss">
    .add-blog {
        margin: 50px auto 0;
        max-width: 500px;
        form {
            border: 1px solid #d6d6d6;
            padding: 15px;
            border-radius: 2px;
            label {
                display: inline-block;
                color: #222222;
                margin-bottom: 5px;
            }
            input {
                width: auto;
                display: block;
                margin-bottom: 20px;
                padding: 5px 15px;
                border: 1px solid #ccc;
                color: #848484;
                white-space: pre-wrap;
            }
            .checkboxes {
                input {
                    display: inline-block;
                    margin-right: 10px;
                }
            }
        }
        .preview {
            margin-top: 50px;
            border: 1px solid #d6d6d6;
            padding: 10px;
            h3 {
                margin-bottom: 20px;
            }
            h5 {
                margin-bottom: 10px;
            }
        }
    }
</style>

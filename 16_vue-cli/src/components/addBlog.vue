<template>
    <div class="add-blog">
        <h2>Add a New blog post</h2>
        <form class="">
            <label for="title">Blog Title</label>
            <input type="text" name="" id="" v-model.lazy="blog.title">
            <label for="content">Blog Content</label>
            <input type="text" name="" id="" v-model.lazy="blog.content">
        </form>
        <div class="preview">
            <h3>Preview Blog</h3>
            <h5>Blog title: {{ blog.title }}</h5>
            <p>Blog content: {{ blog.content }}</p>
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
                content: ""
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
                width: 100%;
                display: block;
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

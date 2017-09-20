<template>
    <div v-theme:column="'boxed'" class="blogs-wrapper">
        <h1>All Blogs</h1>
        <div v-for="blog in blogs" class="single-blog">
            <h3 v-rainbow>{{ blog.title }}</h3>
            <p>{{ blog.body }}</p>
        </div>
    </div>
</template>

<script>

export default {
 
    data () {
        return {
          blogs: []
        }
    },
    methods: {
        
    },
    created() {
        this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
            this.blogs = data.body.slice(0,8); 
        })
    }
}
</script>

<style scoped lang="scss">
    .blogs-wrapper {
        max-width: 800px;
        margin: 0 auto;
        h1 {
            margin-bottom: 50px;
        }
        .single-blog {
            background: #eee;
            padding: 20px;
            border-radius: 2px;
            display: block;
            margin-bottom: 20px;
            h3 {
                margin-bottom: 15px;
            }
            p {
                font-size: 14px;
                line-height: 26px;
            }
        }
    }
</style>

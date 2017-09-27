<template>
    <div class="blogs-wrapper">
        <h1>List Blogs</h1>
        <input type="text" v-model="search" placeholder="search here...">
        <div v-for="blog in filterBlogs" class="single-blog">
            <h3>{{ blog.title | to-uppercase }}</h3>
            <p v-rainbow>{{ blog.body | shorten }}</p>
        </div>
    </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin';
export default {
    
    data () {
        return {
          blogs: [],
          search: ''
        }
    },
    methods: {
        
    },
    created() {
        this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
            this.blogs = data.body.slice(0,3); 
        })
    },
    computed: {
        
    },
    filters: {
        toUppercase(value){
            return value.toUpperCase();
        },
        shorten(value){
            return value.slice(0,70)+'...';
        }
    },
    directives: {
        'rainbow': {
            bind(el, binding, vnode){
                el.style.color = '#'+Math.random().toString(16).slice(2,8);
            }
        }
    },
    mixins: [searchMixin]
}
</script>

<style scoped lang="scss">
    .blogs-wrapper {
        max-width: 800px;
        margin: 0 auto;
        h1 {
            margin-bottom: 50px;
        }
        input {
            border: 1px solid #cfcfcf;
            width: 200px;
            margin-left: auto;
            padding: 5px 10px;
            margin-bottom: 20px;
            font-size: 14px;
            color: #222;
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

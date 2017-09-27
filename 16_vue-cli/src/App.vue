<template>
    <div>
        <app-header></app-header>
        <router-view></router-view>
    </div>
</template>

<script>

import addBlog from './components/addBlog.vue';
import showBlog from './components/showBlog.vue';
import listBlog from './components/listBlog.vue';
import header from './components/header.vue';

export default {
    components: {
        'add-blog': addBlog,
        'show-blog': showBlog,
        'list-blog': listBlog,
        'app-header': header,
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
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
</style>

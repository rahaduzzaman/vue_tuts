<template>
    <div>
        <form-blog></form-blog>
    </div>
</template>

<script>

import addBlog from './components/addBlog.vue';

export default {
    components: {
        'form-blog': addBlog
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

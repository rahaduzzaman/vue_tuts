<template>
    <div>
        <show-blog></show-blog>
    </div>
</template>

<script>

import showBlog from './components/showBlog.vue';

export default {
    components: {
        'show-blog': showBlog
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

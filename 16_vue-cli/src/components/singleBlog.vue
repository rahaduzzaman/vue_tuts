<template>
    <div id="single-blog">
        <h1>{{ blog.title }}</h1>
        <p>{{ blog.body }}</p>
    </div>
</template>

<script>


export default {
    components: {
       
    },
    data () {
        return {
          id: this.$route.params.id,
          blog: {}
        }
    },
    methods: {
        
    },
    created() {
         this.$http.get('https://jsonplaceholder.typicode.com/posts/'+ this.id).then(function(data){
            this.blog = data.body; 
        })
    }
}
</script>

<style scoped lang="scss">
  #single-blog {
      max-width: 800px;
      margin:  0 auto;
  }
</style>

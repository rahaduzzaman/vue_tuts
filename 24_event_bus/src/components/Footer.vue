<template>
    <footer>
        <p>{{ copyright }} {{ title }}</p>
    </footer>
</template>

<script>
import { bus } from '../main';
export default {
    props: {
        title: {
            type: String
        }
    },
    data () {
        return {
            copyright: 'copyright 2017 @'
        }
    },
    created(){
        bus.$on('titleChange',(data) => {
            this.title = data;
        })
    }
}
</script>

<style scoped lang="scss">
    footer {
        background: #262626;
        padding: 5px 0;
        p {
            color: #cdcdcd;
            text-align: center;
        }
    }
</style>

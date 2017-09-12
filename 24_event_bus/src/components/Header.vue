<template>
    <header>
        <h2 v-on:click = "changeTitle">{{ title }}</h2>
    </header>
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

        }
    },
    methods: {
        changeTitle: function() {
            // this.$emit('changeTitle','header title changed');
            this.title = 'header title changed';
            bus.$emit('titleChange','header title changed');
        }
    }
}
</script>

<style scoped lang="scss">
    header {
        background: #0cc652;
        padding: 20px 0;
        h2 {
            color: #ffffff;
            text-align: center;
        }
    }
</style>

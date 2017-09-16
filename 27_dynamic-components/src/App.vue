<template>
    <div class="">
        <keep-alive>    
        <component v-bind:is="component"></component>
        </keep-alive>
        <button v-on:click="component ='form-one'">Show from One</button>
        <button v-on:click="component ='form-two'">Show from Two</button>
    </div>
</template>

<script>

import formHelper from './components/formHelper.vue';
import formOne from './components/form1.vue';
import formTwo from './components/form2.vue';

export default {
    components: {
        'form-helper': formHelper,
        'form-one': formOne,
        'form-two': formTwo
    },
    data () {
        return {
           component: 'form-two'
        }
    },
    methods: {
        
    }
}
</script>

<style scoped lang="scss">
 button {
     padding: 10px; 
     border: none;
     background-color: #cdcdcd;
     color: #222;
     
 }
</style>

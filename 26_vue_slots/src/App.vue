<template>
    <div class="">
        <form-helper>
            <div slot="form-header">
                <h2>This is a testing form for Vue slot</h2>
                <p>Information about the form</p>
            </div>
            <div slot="form-fields">
                <input type="text" name="" value="" placeholder="Your Name">
                <input type="email" name="" value="" placeholder="Your Email">
            </div>
            <div slot="form-controls">
                <button v-on:click="handleSubmit">Submit</button>
            </div>
        </form-helper>
    </div>
</template>

<script>

import formHelper from './components/formHelper.vue'

export default {
    components: {
        'form-helper': formHelper
    },
    data () {
        return {
            team: [
                {name: 'Rahad', speciality: 'vue js', show: false},
                {name: 'Oishy', speciality: 'Html', show: false},
                {name: 'Mazher', speciality: 'Laravel', show: false},
                {name: 'Maria', speciality: 'PHP', show: false},
                {name: 'Saddam', speciality: 'Civil', show: false},
                {name: 'Sany', speciality: 'Medical', show: false}
            ],
            title: 'Vue Event Bus'
        }
    },
    methods: {
        updateTitle: function(updatedTitle){
            this.title = updatedTitle;
        }
    }
}
</script>

<style scoped lang="scss">

</style>

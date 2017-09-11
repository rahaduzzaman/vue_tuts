<template>
    <div class="">
        <app-header v-bind:title = "title"></app-header>
        <app-team v-bind:team="team"></app-team>
        <hr>
        <app-team v-bind:team="team"></app-team>
        <app-footer v-bind:title = "title"></app-footer>
    </div>
</template>

<script>
// for import locally
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Team from './components/Team.vue'

export default {
    components: {
        'app-header': Header,
        'app-footer': Footer,
        'app-team': Team
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
            title: 'Vue Primitives and References'
        }
    }
}
</script>

<style scoped lang="scss">

</style>

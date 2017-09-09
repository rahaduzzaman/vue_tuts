<template>
    <div class="">
        <app-header></app-header>
        <app-team></app-team>
        <app-footer></app-footer>
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

        }
    }
}
</script>

<style scoped lang="scss">

</style>

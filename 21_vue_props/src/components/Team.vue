<template>
    <div class="team">
        <ul>
            <li v-for="member in team" v-on:click="member.show =!member.show">
                <h2>{{member.name}}</h2>
                <h2 v-show="member.show">{{member.speciality}}</h2>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        team: {
            type: Array,
            required: true
        }
    },
    data () {
        return {

        }
    }
}
</script>

<style scoped lang="scss">
    .team {
        width: 100%;
        max-width: 1200px;
        margin: 40px auto;
        padding: 0 20px;
        box-sizing: border-box;
        ul {
            display: flex;
            flex-wrap: wrap;
            list-style-type: none;
            padding: 0;
            li {
                flex-grow: 1;
                flex-basis: 300px;
                text-align: center;
                padding: 30px;
                border: 1px solid #cdcdcd;
                margin: 10px;
            }
        }
    }
</style>

<template>
    <div class="tile is-child box">
        <p class="title">Ausbildung und Beruf</p>
        <hr>
        <div v-for="station in stationen">
            <p class="primary">{{station[0]}}</p>
            <p><strong>{{station[1]}}</strong></p>
            <p>{{station[2]}}</p>
            <hr>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                stationen: [
                    [
                        "03.04.2017-30.06.2017",
                        "Elbgoods Internetagentur",
                        "Praktikum während der Ausbildungszeit im Bereich Webentwicklung"
                    ],
                    [
                        "2015-2018",
                        "Theodor-Schäfer Berufsbildungswerk",
                        "Ausbildung Fachinformatiker für Anwendungsentwicklung"
                    ],
                    [
                        "2003-2012",
                        "Goethe-Schule, Gymnasium der Stadt Flensburg",
                        "Mittlerer Schulabschluss"
                    ],
                ]
            }
        }
    }
</script>


<style scoped lang="sass">
.primary
    color: #00D1B2
.box
    box-shadow: 10px 10px 20px 0 rgba(46, 61, 73, 0.15)
    border-radius: 0.375rem
    transition: all 0.3s ease
.box:hover
    box-shadow: 3px 3px 3px 0 rgba(46, 61, 73, 0.15)

</style>
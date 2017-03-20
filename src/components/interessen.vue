<template>
    <div class="tile is-child box">
        <p class="title">Interessen</p>
        <hr>
        <ul>
            <li v-for="interesse in interessen">{{interesse}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                interessen: [
                    "Unternehmungen, z.B. Kino, Konzerte, Reisen",
                    "Programmieren,	z.B. Entwickeln	von Nebenprojekten	und	Ausprobieren neuer Tools und Sprachen, PairProgramming mit Freunden",
                    "Filme/Serien",
                    "Lesen z.B. Clean Code von Robert C. Martin",
                    "Musik",
                    "Mixed Martials Arts",
                    "Videospiele/E-Sport"
                ]
            }

        }
    }
</script>

<style scoped lang="sass">
    ul
        list-style: none
        padding: 0
        margin: 0

    li
        padding-left: 1em
        text-indent: -.7em

    li::before
        content: "• "
        color: #00D1B2
    .box
            box-shadow: 10px 10px 20px 0 rgba(46, 61, 73, 0.15)
            border-radius: 0.375rem
            transition: all 0.3s ease
    .box:hover
            box-shadow: 3px 3px 3px 0 rgba(46, 61, 73, 0.15)
</style>
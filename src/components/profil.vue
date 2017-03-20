<template>
    <div class="tile is-child box">
        <p class="title">Profil</p>
        <hr>
        <div class="notification is-primary">
            <p class="has-text-centered title is-4">
                Auf der Suche nach weiteren Praktikas während meiner Ausbildungszeit im Bereich der Softwareentwicklung im Großraum Hamburg</p>
        </div>
        <div class="tags">
            <span class="tag is-primary is-medium" v-for="tag in tags"><i class="fa fa-check" aria-hidden="true"></i>&nbsp;{{tag}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                tags: [
                    "Motiviert",
                    "Teamplayer",
                    "Wissbegierig",
                    "Verlässlich",
                    "Autodidakt",
                    "Analytisch",
                    "Diszipliniert",
                    "Kreativ",
                    "Sorgfältig",
                    "Traumberuf Linuxadministrator"
                ]
            }

        }
    }
</script>


<style scoped lang="sass">
    .tag
        margin: 2px
    .tags
        display: flex
        flex-wrap: wrap
        justify-content: space-between
    .box
            box-shadow: 10px 10px 20px 0 rgba(46, 61, 73, 0.15)
            border-radius: 0.375rem
            transition: all 0.3s ease
    .box:hover
            box-shadow: 3px 3px 3px 0 rgba(46, 61, 73, 0.15)
</style>
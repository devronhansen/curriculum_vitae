<template>
    <div class="notification is-primary">
        <div class="column is-offset-4">
            <a class="button is-primary is-inverted is-outlined"
               href="file:///C:/Users/Ron/Google%20Drive/Bewerbungsunterlagen-Ron-Hansen%20(2).pdf"><i
                    class="fa fa-file-pdf-o" aria-hidden="true"></i>&nbsp;Letztes Schulzeugnis herunterladen</a>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {}
        }
    }
</script>


<style scoped lang="scss">
    .notification {
        box-shadow: 10px 10px 20px 0 rgba(46, 61, 73, 0.15);
        border-radius: 0.375rem;
        transition: all 0.3s ease;
    }

    .notification:hover {
        box-shadow: 3px 3px 3px 0 rgba(46, 61, 73, 0.15);
    }
</style>

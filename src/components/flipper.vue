<template>
    <div class="flipper column is-half" v-bind:class="{'flip': flip}" id="kontakt">
        <figure class="front" v-on:click="letsFlip">
            <div class="card hero is-primary test">
                <div class="container">
                    <h1 class="title">
                        Jetzt Kontaktieren <i class="fa fa-mouse-pointer" aria-hidden="true"></i>
                    </h1>
                </div>
            </div>
        </figure>
        <figure class="back">
            <div class="card">
                <kontaktform :letsFlip="letsFlip"></kontaktform>
            </div>
        </figure>
    </div>
</template>


<script>
    import kontaktform from './kontaktform.vue';
    export default {
        data() {
            return {
                flip: false,
            }
        },
        methods: {
            letsFlip() {
                window.setTimeout(function (v, k) {
                    this.flip = !this.flip
                }.bind(this), 100)
            }
        }
    }
</script>


<style scoped lang="scss">
    .test {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }

    .flipper,
    .card {
        cursor: pointer;
        height: 500px;
    }

    .flipper,
    .card {
        margin: 100px 0 200px 0;
        height: 500px;
    }

    .flipper {
        margin-left: 25%;
    }

    @media screen and (max-width: 769px){
        .flipper,
        .card {
            margin: 0;
        }
    }

    /* 3D FLIP CARD */
    .flipper {
        transition: 0.6s;
        transform-style: preserve-3d;
        position: relative;
    }

    .flipper.flip {
        transform: rotateY(180deg);
    }

    .front,
    .back {
        margin: 0;
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        backface-visibility: hidden;
    }

    .front {
        z-index: 2;
        /* for firefox 31 */
        transform: rotateY(0deg);
    }

    .back {
        transform: rotateY(180deg);
    }

    /* STYLING SCROLLBAR */
    ::-webkit-scrollbar {
        width: 12px;
    }

    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px #9e9e9e;
    }
</style>
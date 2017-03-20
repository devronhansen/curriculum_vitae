<template>
    <div class="tile is-child box">
        <p class="title">Persönliche Daten</p>
        <hr>
        <div class="imageholder">
            <figure class="image is-128x128">
                <img class="image" src="../assets/Lars_Linden.png">
            </figure>
        </div>
        <div class="column is-9">
            <table>
                <tr>
                    <td><strong>Name</strong></td>
                    <td class="data">{{this.name}}</td>
                </tr>
                <tr>
                    <td><strong>Anschrift</strong></td>
                    <td class="data">{{this.anschrift}}</td>
                </tr>
                <tr>
                    <td><strong>Tel.</strong></td>
                    <td class="data">{{this.tel}}</td>
                </tr>
                <tr>
                    <td><strong>E-Mail</strong></td>
                    <td class="data">{{this.email}}</td>
                </tr>
                <tr>
                    <td><strong>geb.</strong></td>
                    <td class="data">{{this.geb}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                name: 'Lars Linden',
                anschrift: 'Herrmann-Tast-Straße 26, 25813 Husum',
                tel: '0176 / 24 47 03 81',
                email: 'lars.linden@outlook.de',
                geb: '08.01.1989'
            }
        }
    }
</script>


<style scoped lang="scss">
    .box {
        box-shadow: 10px 10px 20px 0 rgba(46, 61, 73, 0.15);
        border-radius: 0.375rem;
        transition: all 0.3s ease;
    }

    .image{
        width: 115px;
        height: 140px;
        margin-top: -3px;
    }

    .box:hover {
        box-shadow: 3px 3px 3px 0 rgba(46, 61, 73, 0.15);
    }

    @media screen and(max-width: 768px) {
        .data {
            text-align: right;
            padding-left: 10px;
        }
        .imageholder{
            display: flex;
            width: 100%;
            justify-content: center;
        }
    }

    @media screen and(min-width: 1000px) {
        .image {
            float: right;
        }
    }
</style>

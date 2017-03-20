<template>
    <div class="container" id="kontakt">
        <div class="add-product" :class="{'open': formOpen}">
            <div class="button-copy" v-show="!formOpen" @click="formOpen = true">Kontakt aufnehmen</div>
            <form @submit="this.sendMail">
                <div>
                    <label class="label">Email</label>
                    <p class="control has-icon has-icon-right">
                        <input class="input" type="email" placeholder="Ihre Email Addresse" value="bulma"
                               required="" v-model="email.addresse">
                    </p>
                    <label class="label">Betreff</label>
                    <p class="control has-icon has-icon-right">
                        <input class="input" type="text" placeholder="Ihr Betreff" required=""
                               v-model="email.betreff">
                    </p>
                    <label class="label">Message</label>
                    <p class="control">
                        <textarea class="textarea" rows="10" placeholder="Ihr Email Text" required=""
                                  v-model="email.message"></textarea>
                    </p>
                    <div class="g-recaptcha" data-sitekey="6LesexkUAAAAAKx3oQbqaJYTQFVOXh3X-nCuEGu9"></div>
                    <div class="control is-grouped">
                        <p class="control">
                            <input class="button is-primary" type="submit" value="Submit">
                        </p>
                        <p class="control">
                            <a class="button is-link" @click="this.cancel">Cancel</a>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>


<script>
    import swal from 'sweetalert';
    export default {
        data () {
            return {
                formOpen: false,
                email: {
                    addresse: '',
                    betreff: '',
                    message: ''
                },
            }
        },
        methods: {
            resetForm() {
                this.email = {
                    addresse: '',
                    betreff: '',
                    message: ''
                }
            },
            cancel() {
                this.formOpen = false;
                this.resetForm();
            },
            sendMail(event){
                event.preventDefault();

                if (!document.getElementById('g-recaptcha-response').value) {
                    swal("Error", "Bestätigen Sie bitte das Captcha Feld", "error")
                } else {
                    swal({
                            title: "Email wird gesendet...",
                            type: "info",
                            closeOnConfirm: false,
                            showLoaderOnConfirm: true,
                        },
                        function () {
                            emailjs.send("gmail", "Template1", {
                                message: this.email.message,
                                addresse: this.email.addresse,
                                betreff: this.email.betreff
                            }).then(function (response) {
                                swal("Erfolg!", "Email wurde erfolgreich gesendet", "success");
                            }, function (err) {
                                swal("Oops", "Bei der Übertragung der Email ist ein Fehler aufgetreten", "error")
                            });
                        }.bind(this)
                    );
                }
            },
        }
    }
</script>


<style scoped lang="scss">
    textarea {
        min-height: inherit;
        height: auto;
    }

    .container {
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
    }

    .add-product {
        &.open {
            box-shadow: 10px 10px 20px 0 rgba(46, 61, 73, 0.15);
            border-radius: 0.375rem;
            transition: all 0.3s ease;
            background-color: #FAFAFA;
            padding: 18px 32px;
            width: 800px;
            height: 700px;
            cursor: default;
            margin: 0;
            &:hover {
                box-shadow: 3px 3px 3px 0 rgba(46, 61, 73, 0.15);
            }
            form {
                opacity: 1;
                transition: opacity 0.1s ease;
                transition-delay: 0.3s;
                height: auto;
            }
        }
        transition: all 0.3s ease;
        background-color: #00D1B2;
        height: 190px;
        width: 190px;
        border-radius: 50%;
        box-shadow: 0 4px 16px 0 rgba(0, 0, 0, .07);
        cursor: pointer;
        margin: 450px 0 0 0;
        .button-copy {
            text-align: center;
            line-height: 144px;
            text-transform: uppercase;
            font-weight: bold;
            color: #f7f7f7;
        }
        form {
            transition: none;
            opacity: 0;
            height: 0;
            overflow: hidden;
        }
    }

    @media screen and (min-width: 1057px) {
        .container {
            max-width: none;
        }
    }

    @media screen and (min-width: 1192px) {
        max-width: none;
    }

    .g-recaptcha {
        margin-top: 10px;
    }

    @media screen and (max-width: 1056px) {
        .add-product {
            -webkit-transform: translate3d(0, 0, 0);
            -moz-transform: translate3d(0, 0, 0);
            -ms-transform: translate3d(0, 0, 0);
            -o-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
            margin: 0;
            &.open {
                width: 300px;
                height: 500px;
            }
        }
        .g-recaptcha {
            transform: scale(0.77);
            -webkit-transform: scale(0.77);
            transform-origin: 0 0;
            -webkit-transform-origin: 0 0;

        }
    }

</style>
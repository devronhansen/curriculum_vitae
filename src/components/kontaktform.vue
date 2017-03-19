<template>
    <div class="card-content" @click="this.letsFlip">
        <div class="contact">
            <form @submit="this.sendMail">
                <div class="field">
                    <label class="label">Email</label>
                    <p class="control has-icon">
                        <input class="input is-medium" @click.prevent="letsFlip" type="email"
                               placeholder="Ihre Email Addresse" value="bulma"
                               required v-model="email.addresse">
                        <span class="icon is-small"><i class="fa fa-envelope" aria-hidden="true"></i></span>
                    </p>
                </div>
                <div class="field" @click.prevent="letsFlip">
                    <label class="label">Betreff</label>
                    <p class="control has-icon">
                        <input class="input is-medium" type="text" placeholder="Ihr Betreff" required
                               v-model="email.betreff">
                        <span class="icon is-small"><i class="fa fa-info-circle" aria-hidden="true"></i></span>
                    </p>
                </div>
                <div class="field">
                    <label class="label">Nachricht</label>
                    <p class="control">
                        <textarea class="textarea" rows="10" placeholder="Ihr Email Text" required
                                  v-model="email.message" @click.prevent="letsFlip"></textarea>
                    </p>
                </div>
                <div class="field">
                    <div class="g-recaptcha" data-sitekey="6LesexkUAAAAAKx3oQbqaJYTQFVOXh3X-nCuEGu9"></div>
                </div>
                <div class="control is-grouped">
                    <p class="control">
                        <input class="button is-outlined is-primary" type="submit" value="Senden">
                    </p>
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
                email: {
                    addresse: '',
                    betreff: '',
                    message: ''
                },
            }
        },
        props: ['letsFlip'],
        methods: {
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
    label {
        margin-top: 10px;
    }

    .button {
        margin-top: 20px;
    }

    textarea {
        resize: none;
    }

    .g-recaptcha {
        margin-top: 20px;
    }

    @media screen and (max-width: 768px) {
        .contact {
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

        .button {
            margin-top: 0;
        }
    }
</style>
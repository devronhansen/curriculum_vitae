<template>
    <div class="tile is-child box">
        <p class="title">Kenntnisse</p>
        <hr>
        <div class="kenntnisholder">
            <div class="kenntnisholderleft">
                <div v-for="kenntniss in kenntnisse1">
                    <br>
                    <p class="primary"><strong class="primary">{{kenntniss.name}}</strong></p>
                    <ul>
                        <li v-for="skill in kenntniss.skills">{{skill}}</li>
                    </ul>
                    <br>
                </div>
            </div>
            <div class="kenntnisholderright">
                <div v-for="kenntniss in kenntnisse2">
                    <br>
                    <p class="primary"><strong class="primary">{{kenntniss.name}}</strong></p>
                    <ul>
                        <li v-for="skill in kenntniss.skills">{{skill}}</li>
                    </ul>
                    <br>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                kenntnisse1: [
                    {
                        name: "PHP",
                        skills: [
                            "Laravel",
                            "Symfony Components"
                        ]
                    },
                    {
                        name: "Javascript",
                        skills: [
                            "React",
                            "jQuery",
                            "Ajax",
                            "Vue"
                        ]
                    },
                    {
                        name: "HTML, CSS",
                        skills: [
                            "Bootstrap",
                            "Bulma",
                            "SASS"
                        ]
                    },
                    {
                        name: "Versionierung",
                        skills: [
                            "Git"
                        ]
                    },
                    {
                        name: "Queue-System",
                        skills: [
                            "Beanstalkd"
                        ]
                    }
                ],
                kenntnisse2: [
                    {
                        name: "Virtuelle Umgebung",
                        skills: [
                            "Vagrant",
                            "Docker"
                        ]
                    },
                    {
                        name: "Datenbanksystem",
                        skills: [
                            "SQL, MySQL, SQLite",
                            "Redis"
                        ]
                    },
                    {
                        name: "Webserver-Konfirugation",
                        skills: [
                            "nginx"
                        ]
                    },
                    {
                        name: "Testing",
                        skills: [
                            "PHPUnit",
                            "Mockery"
                        ]
                    },
                    {
                        name: "C#",
                        skills: [
                            "Windows Forms",
                            "Windows Presentation Foundation",
                            "Xamarin Android"
                        ]
                    },
                ]

            }

        }
    }
</script>


<style scoped lang="scss">
    .primary {
        color: #00D1B2
    }

    .box {
        box-shadow: 10px 10px 20px 0 rgba(46, 61, 73, 0.15);
        border-radius: 0.375rem;
        transition: all 0.3s ease;
        &:hover {
            box-shadow: 3px 3px 3px 0 rgba(46, 61, 73, 0.15);
        }
    }

    @media screen and(max-width: 768px) {
        .kenntnisholder {
            display: flex;
            width: 100%;
            height: 100%;
            justify-content: flex-end;
        }
        .kenntnisholderright{
            margin-left: 29%;
        }
    }

    @media screen and(min-width: 1000px) {
        .kenntnisholderright {
            float: right;
        }
        .kenntnisholderleft {
            float: left;
        }
    }

</style>
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
                        name: "Netzwerk",
                        skills: [
                            "IPv4",
                            "OSI-Modell",
                            "Cisco-Router"
                        ]
                    },
                    {
                        name: "Ubuntu Server",
                        skills: [
                            "Nginx",
                            "Apache",
                            "UFW-Firewall",
                            "Let's Encrypt SSL",
                            "FTP",
                            "SFTP",
                            "SSH"
                        ]
                    },
                    {
                        name: "Scripting",
                        skills: [
                            "Python 3.x",
                            "Shell"
                        ]
                    }

                ],
                kenntnisse2: [
                    {
                        name: "Programmiersprachen",
                        skills: [
                        "PHP",
                        "C#",
                        "HTML",
                        "CSS"
                        ]
                    },
                    {
                        name: "Datenbanktechniken",
                        skills: [
                            "MySQL",
                            "MariaDB"
                        ]
                    },
                    {
                        name: "MS Windows Server",
                        skills: [
                            "DNS",
                            "DHCP",
                            "IIS",
                            "Domain-Controller"
                        ]
                    },
                    {
                        name: "Microsoft Windows",
                        skills: [
                            "RDP",
                            "Administrierung von Clientsystemen"
                            ]
                    }

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
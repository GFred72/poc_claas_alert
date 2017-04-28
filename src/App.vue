<template>
    <div id="app" class="container-fluid no-margin">
        <v-header></v-header>
        <div class="row bar">
            <div class="filAriane"></div>
        </div>
        <div class="row">
            <div class="col-md-2 no-margin" id="menu-app">
                <nav class="navbar navbar-default navbar-default-class navbar-fixed-side">
                    <div class="container">
                        <div class="navbar-header">
                            <button class="navbar-toggle" data-target=".navbar-collapse" data-toggle="collapse">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                        </div>
                        <div class="collapse navbar-collapse">
                            <ul class="nav navbar-nav">
                                <li v-for="infosCard in cardSsMenuDatas1">
                                    <v-card-menu :item="infosCard"></v-card-menu>
                                </li>
                                <li v-for="infosCard in cardSsMenuDatas2">
                                    <v-card-menu :item="infosCard"></v-card-menu>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div class="col-md-10">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import ContainerApp from './components/ContainerApp'
import Card from './components/Card'
import CardMenu from './components/CardMenu'

export default {
    name: 'app',
    components: {
        'v-header': Header,
        'v-footer': Footer,
        'v-container-app': ContainerApp,
        'v-card': Card,
        'v-card-menu': CardMenu
    },
    data() {
        return {
            'cardMenuDatas': [
                {
                    titre: 'Gérer les alertes',
                    description: 'Créer, modifier et visualiser les alertes'
                },
                {
                    titre: 'Gérer les TA',
                    description: 'Créer, modifier et visualiser les TA'
                }
            ],
            'cardSsMenuDatas1': [
                {
                    titre: 'Créer une alerte',
                    description: '',
                    style: 'col-md-4 cardWithMargin',
                    logo: 'plus-square-o',
                    link: 'creerAlerte'
                },
                {
                    titre: 'Affecter TA sur une alerte',
                    description: '',
                    style: 'col-md-4 cardWithMargin',
                    logo: 'share-square',
                    link: 'affecterTa'
                },
                {
                    titre: 'Visualiser les TA d\'une alerte',
                    description: '',
                    style: 'col-md-4 cardWithMargin',
                    logo: 'eye'
                }
            ],
            'cardSsMenuDatas2': [
                {
                    titre: 'Saisir des TA contrôlées',
                    description: '',
                    style: 'col-md-3 cardWithMargin',
                    logo: 'pencil-square-o'
                },
                {
                    titre: 'Saisir des TA retouchées',
                    description: '',
                    style: 'col-md-3 cardWithMargin',
                    logo: 'pencil-square'
                },
                {
                    titre: 'Visualiser alertes pour TA',
                    description: '',
                    style: 'col-md-3 cardWithMargin',
                    logo: 'eye'
                },
                {
                    titre: 'Lister tous les TA bloqués',
                    description: '',
                    style: 'col-md-3 cardWithMargin',
                    logo: 'list'
                },
            ]
        }
    }
}
</script>

<style scoped>
html,
body {
    height: 100%;
    margin: 0px;
    padding: 0px;
}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

.no-margin {
    margin: 0px;
    padding: 0px;
}

.bar {
    font-family: Arial;
    background-color: #B3C618;
    height: 30px;
    padding: 5px;
}

.navbar-default-class{
    background-color: inherit;
    margin: 0;
}

body {
    margin: 0px;
    padding: 0px;
}
</style>

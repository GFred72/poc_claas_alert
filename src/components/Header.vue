<template>
    <header>
        <div class="header-claas row">
            <h2>{{titre}}</h2>
            <img src="../assets/logo-claas.png" />
        </div>
        <!--<div class="row bar">
            <div class="filAriane"></div>
        </div>-->
    </header>
</template>

<script>
export default {
    name: 'header',
    data() {
        return {
            titre: 'Suivi alertes qualité sur tracteurs'
        }
    }
}
</script>

<style scoped>
header img {
    margin-top: 7px;
    margin-right: 40px;
}

header h2 {
    font-family: "claasFont", Arial, HelveticaNeueW01-45Ligh, Helvetica;
    font-size: 1.3em;
    padding-left: 5px;
    padding-top: 10px;
}

.header-claas {
    width: 100%;
    height: 47px;
}

.header-claas>img {
    float: right;
}

.header-claas>h2 {
    display: inline-block;
    margin: 8px;
}

.bar {
    font-family: Arial;
    background-color: #B3C618;
    height: 30px;
    padding: 5px;
}
</style>
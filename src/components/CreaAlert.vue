<template>
    <form>
        <h4>Créer une alerte</h4>
        <div class="form-group">
            <label for="libelle">Libellé:</label>
            <input type="text" class="form-control" id="libelle" placeholder="libelle" v-model="alerte.Libelle">
        </div>
        <div class="form-group">
            <label for="commentaire">Commentaire: </label>
            <textarea class="form-control" id="commentaire" placeholder="Commentaire" v-model="alerte.Commentaire"></textarea>
        </div>
        <div class="form-group">
            <label for="nomRq">Nom RQ: </label>
            <input type="text" class="form-control" id="nomRq" placeholder="nomRq" v-model="alerte.NomRq">
        </div>
        <button @click="creerAlerte" type="button" class="pull-right btn btn-primary" aria-label="Créer">Créer</button>
    </form>
</template>


<script>
export default {
    name: 'creaAlert',
    data() {
        return {
            alerte: {
                Libelle: '',
                Commentaire: '',
                NomRq: ''
            }
        }
    },
    methods: {
        creerAlerte: function () {
            axios.post('http://localhost:57335/api/' + 'Alertes', this.alerte).then(response => {
                if (response.status === 201) {
                    alert("record ok")
                }
            })
        }
    }
}
</script>

<style scoped>
form {
    margin: auto;
    width: 70%;
}

label {
    float: left;
}
</style>


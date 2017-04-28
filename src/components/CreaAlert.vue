<template>
    <form>
        <h4>Créer une alerte</h4>
        <div class="form-group">
            <label for="libelle">Libellé:</label>
            <input type="text" class="form-control" id="libelle" placeholder="libelle" v-model="libelle">
        </div>
        <div class="form-group">
            <label for="commentaire">Commentaire: </label>
            <textarea class="form-control" id="commentaire" placeholder="Commentaire" v-model="commentaire"></textarea>
        </div>
        <div class="form-group">
            <label for="nomRq">Nom RQ: </label>
            <input type="text" class="form-control" id="nomRq" placeholder="nomRq" v-model="nomRq">
        </div>
        <button type="submit" class="btn btn-default">Créer</button>
    </form>
</template>


<script>
export default {
    name: 'creaAlert',
    data() {
        return {
            libelle: '',
            commentaire: '',
            nomRq: ''
        }
    }
}
</script>

<style scoped>
    form{
        margin: auto;
        width: 70%;
    }
    label{ float:left;}
</style>


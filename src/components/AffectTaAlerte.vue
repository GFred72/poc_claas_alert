<template>
    <form class="form-horizontal">
        <h4>Affecter TA à une alerte</h4>
        <div class="form-group">
            <div class="col-sm-2">
                <label for="libelle">Choix de l'alerte</label>
            </div>
            <div class="col-sm-10">
                <select class="form-control selectpicker">
                    <option>...</option>
                </select>
            </div>
        </div>
        <div class="form-group">
            <div class="col-sm-10">
                <label class="radio-inline">
                    <input type="radio" v-model="typeAff">Affectation via .xls
                </label>
                <label class="radio-inline">
                    <input type="radio" v-model="typeAff">Affectation manuelle
                </label>
            </div>
        </div>
        <div class="form-group">
            <div class="col-sm-10">
                <label class="btn btn-default btn-file">
                    <input type="file" name="file" hidden>
                </label>
            </div>
        </div>
        <div class="form-group">
            <div class="col-sm-3">
                <label for="plaque">Plaque:</label>
                <input type="plaque" class="form-control" id="plaque">
            </div>
            <div class="col-sm-3">
                <label for="pays">Pays:</label>
                <input type="pays" class="form-control" id="pays">
            </div>
            <div class="col-sm-3">
                <label for="emplact">Emplacement: </label>
                <input type="emplact" class="form-control" id="emplact">
            </div>
            <div class="col-sm-3">
                <label for="sp">SP: </label>
                <input type="sp" class="form-control" id="sp">
            </div>
        </div>
        <div class="form-group">
            <div class="col-sm-4">
                <label for="dateSt">Date ST05: </label>
                <input type="dateSt" class="form-control" id="dateSt">
            </div>
            <div class="col-sm-4">
                <label for="eapFinRet">EAP7 Fin Ret: </label>
                <input type="eapFinRet" class="form-control" id="eapFinRet">
            </div>
            <div class="col-sm-4">
                <label for="dateConfirm">Date confirm: </label>
                <input type="dateConfirm" class="form-control" id="dateConfirm">
            </div>
        </div>
        <button type="submit" class="btn btn-default">Créer</button>
    </form>
</template>


<script>
export default {
    name: 'creaAlert',
    data() {
        return {
            choix: '',
            typeAff: '',
            file: '',
            plaque: '',
            pays: '',
            emplact: '',
            sp: '',
            dateSt: '',
            eapFinRet: '',
            dateConfirm: ''
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


<template>
    <div class="card">
        <div class="card-container">
            <h4><b>{{ item.titre }}</b></h4> 
            <p>{{ item.description }}</p>
            <icon v-if="item.logo != ''" v-bind:name="item.logo" scale="1.5"></icon>
        </div>
        <div class="card-footer"></div>
    </div>
</template>

<script>
export default {
    name: 'card',
    props: ['item']
}
</script>

<style scoped>
   .card {
        margin-top: 30px;
        background-color:rgba(179, 198, 24, 0.05);; 
        box-shadow: 0 4px 8px 0 rgba(255, 0, 0, 0.66);
        transition: 0.3s;
        
    }
    .card-footer{
        height: 1.5em;
        width: 100%;
        background-color: rgba(179, 198, 24, 0.66); 
    }
    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(255, 0, 0, 0.7);
        cursor: pointer;
    }
    .card-container {
        padding: 5%;        
    }

    .cardWithMargin{
        margin: 3%;
        width:97%
    }
</style>
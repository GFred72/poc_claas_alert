<template>
    <div class="card-menu"  @click="linkTo(item.link)">
        <div class="card-menu-container">
            <p><icon class="icon-menu" v-if="item.logo != ''" v-bind:name="item.logo" scale="1"></icon> {{ item.titre }}</p>
            <p>{{ item.description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'card-menu',
    props: ['item'],
    methods: {
        linkTo: function(lien){
           this.$router.push({ name: lien}) 
        }
    }
}
</script>

<style scoped>
    .card-menu {
        background-color:rgba(179, 198, 24, 0.05);; 
        box-shadow: 0 2px 4px 0 rgba(179, 198, 24, 0.5);
        transition: 0.3s;
        
    }
    .card-menu:hover {
        box-shadow: 0 8px 16px 0 rgba(179, 198, 24, 0.66);
        cursor: pointer;
    }
    .card-menu-container {
        padding: 2%;   
        text-align: left;     
    }
    .icon-menu{
       position:relative;
       top: 3px;
    }

    .cardWithMargin{
        margin: 3%;
        width:97%
    }
    p{
        margin:0px;
    }
</style>
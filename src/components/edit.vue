<template>
    <div class="container" style="padding-top : 50px ;">
        <form>
        <div class="form-group">
            <label for="nom">nom produit</label>
            <input v-model = "data.nomProduit" type="text" class="form-control" id="nom" placeholder="nom produit">
        </div>
        <div class="form-group">
            <label for="prix">prix produit</label>
            <input v-model = "data.prixProduit" type="number" class="form-control" id="prix" placeholder="prix produit">
        </div>
        <div class="form-group">
            <label for="date">prix produit</label>
            <input v-model = "data.dateCreation" type="date" class="form-control" id="date" placeholder="date creation produit">
        </div>

        <button @click ="updateproduit" type="button" class="btn btn-primary">ajouter</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name:"newP",
    data(){
        return {
            id:this.$route.params.ID,
            data:{
                idProduit : this.id,
                nomProduit: "",
                prixProduit : 0,
                dateCreation : new Date() ,
            }
        }
    },methods:{
        updateproduit(){
            console.log("update") ;
            axios.put('http://127.0.0.1:8080/produits/api',this.data).then((rep)=>{
                console.log(rep) ;
                alert("successfuly updated !") ;
                window.location("/list") ;
            })
            
        }
    },mounted(){
        axios.get('http://127.0.0.1:8080/produits/api/'+this.id)
        .then((rep)=>{
            this.data=rep.data
    })}
}
</script>
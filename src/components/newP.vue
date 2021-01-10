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

        <button @click ="addproduit" type="button" class="btn btn-primary">ajouter</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name:"newP",
    data(){
        return {
            data:{
                
                nomProduit: "",
                prixProduit : 0,
                dateCreation : new Date()
            }
        }
    },methods:{
        addproduit(){
            axios.post('http://127.0.0.1:8080/produits/api',this.data).then((rep)=>{
                console.log(rep) ;
                window.location("/list") ;
                alert("successfuly add !") ;

            })
            
        }
    }
}
</script>
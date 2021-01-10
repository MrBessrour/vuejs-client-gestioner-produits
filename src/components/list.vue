<template>
    <div class="container" style="padding-top : 50px ;">
        <table class="table table-striped">
            <thead class="thead-dark">
                <th>ID</th>
                <th>NOM</th>
                <th>PRIX</th>
                <th>DATE</th>
                <th>EDIT</th>
                <th>DELETE</th>

            </thead>
            <tbody>
                <tr v-for = "(i, index) in data " :key="i.idProduit">
                    <td>{{i.idProduit}}</td>
                    <td>{{i.nomProduit}}</td>
                    <td>{{i.prixProduit}}</td>
                    <td>{{i.dateCreation}}</td>
                    <td>
                        <button @click="deleteProduit(index,i.idProduit)" class="btn btn-danger btn-sm" href="">Delete</button>
                    </td>
                    <td>
                        <router-link :to="`/edit/${i.idProduit}`"> <button class="btn btn-success btn-sm" href="">Edit</button></router-link>
                    </td>

                </tr>
            </tbody>
        </table>
        <hr>
        

    </div>
    
</template>
<script>
import axios from 'axios' ;

export default {

    data(){
        return {
            data : []
        }
    } ,
    mounted(){
        axios.get('http://127.0.0.1:8080/produits/api')
        .then((rep)=>{
            this.data=rep.data
    })},methods:{
        deleteProduit(index,id){
                this.data.splice(index, 1);
                axios.delete('http://127.0.0.1:8080/produits/api/'+id,{
                    idProduit:id
                })
            }
        }


}
</script>
<template>
<main >
<div>
  <input id='name' type="text" autofocus placeholder="Name"> 
  <input id='url' type="text" placeholder="Url">
  <button @click='addpoke'>Add</button>
</div>
 <!-- <div class='pokedata' :key='poke.name' v-for='(poke,index) in pokemonarr'>
    <span>{{poke.name}}</span>
    <span>{{poke.url}}</span>
    <button @click='deletepoke(index)'>Delete</button>
 </div> -->
  <table style="width:100%">
  <tr>
    <th>Name</th>
    <th>Url</th>
    
  </tr>
  <tr :key='poke.name' v-for='(poke,index) in pokemonarr'>
    <td>{{poke.name}}</td>
    <td>{{poke.url}}</td>
    <td> <button @click='editpoke(index)'>Edit</button> </td>
    <td><button @click='deletepoke(index)'>Delete</button> </td>
    
</tr>
  </table>
</main>
</template>

<script>
export default {
  data(){
return {
  pokemonarr:[]
}
  },
 methods:{
  poke(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10', {
    method: 'GET'
  })
  .then (res=>res.json())
  .then (res=>this.pokemonarr=res.results)
  .then (res=>console.log(this.pokemonarr))
  },
  editpoke(index){
console.log(index)
  },
  deletepoke(index){
console.log(index)
this.pokemonarr.splice(index,1)
  },
  addpoke(){
   let name=document.querySelector('#name').value
   let url=document.querySelector('#url').value
   this.pokemonarr.push({
     name,
     url
   })
   document.querySelector('#name').value=''
   document.querySelector('#url').value=''
  }
},
created(){
  console.log('After')
  this.poke()
},
mounted(){
  setTimeout(() => {
    console.log("mount")
  console.log(this.pokemonarr)
  }, 5000);
}
}
</script>

<style scoped>
.pokedata{
  display:flex;
  justify-content: center;
  justify-content: space-between;
  width:50vw;
  padding-left:30vw;
 
}
table{
  margin-top:10px;
   /* border:2px solid black; */
}

</style>
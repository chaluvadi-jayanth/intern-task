<template>
<main >

<div>
  <input id='name' type="text" autofocus placeholder="Name"> 
  <input id='url' type="text" placeholder="Url">
  <button @click='add' class="btn btn-primary">Add</button>
  
</div>
 
  <table style="width:100%">
  <tr>
    <th>Name</th>
    <th>Url</th>
  </tr>
  <!-- <tr> -->
  <tr :key='poke.name' v-for='(poke,index) in pokemonarray'> 
        <td  class='Bold' v-if="poke.editing">
          <input type="text" v-model='name'>
        </td>
    <td v-else class='Bold'>{{poke.name}}</td>

    <!-- <td class="Bold">{{poke.name}}</td> -->
     <td  class='Bold' v-if="poke.editing">
          <input type="text" v-model='url'>
        </td>
    <td v-else class='Bold'>{{poke.url}}</td>
    <td> 
      <div style="display:flex;">
          <div style="width:100px">
            <button @click="updatePoke(poke)" class="btn btn-primary">{{ poke.editing ? 'Update':'Edit'}}</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          <!-- {{ this.pokemonarray[index].editing ? 'Update':'Edit'}} -->
          <div>
            <button @click="del(index)" class="btn btn-danger">Delete</button> 
          </div>
      </div>
    </td>
    
</tr>
  </table>
  
</main>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  data(){
    return{
     name:'',
     url:''
      // editing: false
    }
  },

methods:{
  updatePoke(poke) {
    
    // console.log(index) 
    // console.log(this.$store.state.pokemonarr) 
    poke.editing=!poke.editing
    //console.log(this.pokemonarray)

    // console.log(this.pokemonarray[index].name)
    // console.log(this.pokemonarray[index].url)
    // console.log(this.pokemonarray[index].editing)
    // this.pokemonarray[index].editing= !this.pokemonarray[index].editing
    
      console.log(poke.editing)
        // this.editing = this.editing == true ? false : true;
      if (!poke.editing) {
        console.log(poke.editing)
        if (this.name)
        {
          poke.name=this.name
          this.name=''
        }
        if (this.url)
        {
          poke.url=this.url
          this.url=''
        }
        // poke.url=this.url
        // this.todoText = todo.title;
        // this.updateTodo(todo);
      } else {
        // todo.title = this.todoText;
        // todo.complete = this.completed;
        // this.changeCompleted();
      }
    },

  edit(index){
document.querySelector('.update').style.display='none'
  },
del(index){
  console.log(index)
this.$store.commit('deletepoke',index)
},
add(){
   let name=document.querySelector('#name').value
   let url=document.querySelector('#url').value
   this.pokemonarray.unshift({
     name,
     url
   })
   document.querySelector('#name').value=''
   document.querySelector('#url').value=''
  }
},

computed: mapGetters(['pokemonarray']),
  
  created(){
    console.log("created")
    this.$store.dispatch('poke')
  }

}
</script>

<style scoped>
.pokedata{
  display:flex;
  justify-content: center;
  justify-content: space-between;
  width:30vw;
  padding-left:30vw;
 
}
table{
  padding-left:100px;
  margin-top:10px;
  margin-bottom:30px;
  background-color: white;
  opacity:0.7;
  color:black;
  border-radius: 30px 0 30px 0;
   /* border:2px solid black; */
}
.Bold{
  font-weight: bolder;
}
td{
  padding:10px
}
th{
  color:red;
  font-size: 25px;
}
body{
  overflow: hidden;
}


</style>
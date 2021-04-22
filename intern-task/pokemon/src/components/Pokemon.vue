<template>
<main >

<div>
  <input id='name' type="text" autofocus placeholder="Name"> 
  <input id='url' type="text" placeholder="Url">
  <button @click='add'>Add</button>
  
</div>
 
  <table style="width:100%">
  <tr>
    <th>Name</th>
    <th>Url</th>
  </tr>
  <!-- <tr> -->
  <tr :key='poke.name' v-for='(poke,index) in pokemonarray'> 
    <td class="Bold">{{poke.name}}</td>
    <td class='Bold'>{{poke.url}}</td>
    <td> 
      <div style="display:flex;">
          <div style="width:100px">
            <button @click="updateTodoI(poke)" >{{ poke.editing ? 'Update':'Edit'}}</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          <!-- {{ this.pokemonarray[index].editing ? 'Update':'Edit'}} -->
          <div>
            <button @click="del(index)">Delete</button> 
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
     
      // editing: false
    }
  },

methods:{
  updateTodoI(poke) {
    // console.log(index)  
    poke.editing=!poke.editing
    // console.log(this.pokemonarray[index].name)
    // console.log(this.pokemonarray[index].url)
    // console.log(this.pokemonarray[index].editing)
    // this.pokemonarray[index].editing= !this.pokemonarray[index].editing
    

        // this.editing = this.editing == true ? false : true;
      // if (this.editing) {
      //   // this.todoText = todo.title;
      //   // this.updateTodo(todo);
      // } else {
      //   // todo.title = this.todoText;
      //   // todo.complete = this.completed;
      //   // this.changeCompleted();
      // }
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
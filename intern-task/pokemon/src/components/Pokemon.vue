<template>
<main >
    


  <!-- <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Food:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.food"
          :options="foods"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          v-model="form.checked"
          id="checkboxes-4"
          :aria-describedby="ariaDescribedby"
        >
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
 -->

<div>
  <input id='name' type="text" autofocus placeholder="Name"> 
  <input id='url' type="text" placeholder="Url">
  <button @click='add'>Add</button>
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
  <!-- <tr> -->
  <tr :key='poke.name' v-for='(poke,index) in pokemonarray'> 
    <td class="Bold">{{poke.name}}</td>
    <td class='Bold'>{{poke.url}}</td>
    <!-- <td> <button @click="$store.dispatch('poke')"> Add</button> </td> -->
    <td> <button @click='editpoke(index)'>Edit</button> </td>
    <td><button @click="del(index)">Delete</button> </td>
    
</tr>
  </table>
  <!-- <div v-for='a in array' :key='a.name'>
    <h1>{{a.name}}</h1>
  </div> -->
</main>
</template>

<script>
// import {mapState} from 'vuex'
import {mapGetters} from 'vuex'
// import {mapMutations} from 'vuex'
export default {
//   computed: mapState({
// array:state=>state.pokemonarr
//   }),  
// methods:{
//   ...mapMutations(['deletepoke'])
// },
methods:{
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
},//    let name=document.querySelector('#name').value
//    let url=document.querySelector('#url').value
//    this.$state.store.pokemonarr.push({
//      name,
//      url
//    })
//    document.querySelector('#name').value=''
//    document.querySelector('#url').value=''
//   }
// },

computed: mapGetters(['pokemonarray']),
  data(){
return {
  // pokemonarr:[]
}
  },
  created(){
    console.log("created")
    this.$store.dispatch('poke')
  }
//  methods:{
//   poke(){
//     fetch('https://pokeapi.co/api/v2/pokemon?limit=10', {
//     method: 'GET'
//   })
//   .then (res=>res.json())
//   .then (res=>this.$state.store.pokemonarr=res.results)
//   .then (res=>console.log(this.$state.store.pokemonarr))
//   },
//   editpoke(index){
// console.log(index)
//   },
//   deletepoke(index){
// console.log(index)
// this.$state.store.pokemonarr.splice(index,1)
//   },
//   addpoke(){
//    let name=document.querySelector('#name').value
//    let url=document.querySelector('#url').value
//    this.$state.store.pokemonarr.push({
//      name,
//      url
//    })
//    document.querySelector('#name').value=''
//    document.querySelector('#url').value=''
//   }
// },
// mounted(){
//   // console.log(this.$state.store.pokemonarr)
//   console.log('After')
//   // this.poke()
//   $store.dispatch('poke')
// },
// mounted(){
//   setTimeout(() => {
//     console.log("mount")
//   console.log(this.pokemonarr)
//   }, 5000);
// }
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
th{
  color:red;
  font-size: 25px;
}

</style>
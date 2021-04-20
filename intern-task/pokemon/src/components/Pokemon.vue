<template>
<main :key='poke.name' v-for='poke in pokemonarr'>

  <h1>{{poke.name}}</h1>
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
  }
},
created(){
  console.log('After')
  this.poke()
},
mounted(){
  console.log("mount")
  console.log(this.pokemonarr)
}
}
</script>

<style>

</style>
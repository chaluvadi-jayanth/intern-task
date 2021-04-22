<template>
 <Pokemon />
</template>

<script>
import Pokemon from './components/Pokemon'

export default {
  name: 'App',
  components: {
  Pokemon
  }
 

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body{
 background-image: url('./assets/bg.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
  
}
</style>

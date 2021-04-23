import { createStore } from 'vuex'

export default createStore({
  state: {
    pokemonarr: []
  },
  mutations: {
    //     pokeData(state,data){
    // state.pokemonarr
    //     },
    //Modified res data from actions is assigned to the pokemonarr in state.
    poke(state, arr) {
      // console.log(arr, "data")
      state.pokemonarr = arr
      console.log(state.pokemonarr)
    },
    //It is called from the Pokemon.vue
    deletepoke(state, index) {
      // console.log(index)
      state.pokemonarr.splice(index, 1)
    }

  },
  actions: {
    // updatePokeData({commit},data){
    //   commit('pokeData',data)
    // },
    //when the vue is created this action is called from Pokemon.vue component.
    //The api response is modified by adding the another field (editing) in the object.
    // after modifying the response the response modified data is passed to mutations by commiting the 
    // poke function in mutation.
    poke({ commit }) {
      fetch('https://pokeapi.co/api/v2/pokemon?limit=10', {
        method: 'GET'
      })
        .then(res => res.json())
        // .then(res => console.log(res.results))
        .then(res => {
          console.log(res)
          commit("poke", res.results.map(data => {
            return Object.assign(data, { editing: false });
          }))

        })
      // .then(res => $state.store.pokemonarr = res.results)
      // .then(res => console.log($state.store.pokemonarr))
    }

  },
  getters: {
    pokemonarray: state => state.pokemonarr
  },
  modules: {
  }
})

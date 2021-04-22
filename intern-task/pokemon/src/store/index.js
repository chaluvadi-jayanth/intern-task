import { createStore } from 'vuex'

export default createStore({
  state: {
    pokemonarr: []
  },
  mutations: {
    poke(state, arr) {
      // console.log(arr, "data")
      state.pokemonarr = arr
      console.log(state.pokemonarr)
    },
    deletepoke(state, index) {
      // console.log(index)
      state.pokemonarr.splice(index, 1)
    }

  },
  actions: {
    poke({ commit }) {
      fetch('https://pokeapi.co/api/v2/pokemon?limit=10', {
        method: 'GET'
      })
        .then(res => res.json())
        // .then(res => console.log(res.results))
        .then(res => {
          console.log(res.results)
          commit("poke", res.results)

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

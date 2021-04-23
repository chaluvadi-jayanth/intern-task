import { createStore } from 'vuex'

export default createStore({
  state: {
    pokemonarr: []
  },
  mutations: {
    //     pokeData(state,data){
    // state.pokemonarr
    //     },
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
    // updatePokeData({commit},data){
    //   commit('pokeData',data)

    // },
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

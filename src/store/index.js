import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    photos: [],
  },
  mutations: {
      SET_ALBUMS(state, albums){
          state.photos = albums;
      }
  },
  actions: {
      getAlbums({commit}, obj) {
          console.log(obj.search)
          axios.get(`https://pixabay.com/api/?key=${process.env.VUE_APP_KEY}&q=${obj.search}&image_type=photo&pretty=true`).then((response) => {
          commit('SET_ALBUMS', response.data.hits)
          })
      }
  },
  getters:{
      photos:(state)=>{
          return state.photos
      }
  }
})

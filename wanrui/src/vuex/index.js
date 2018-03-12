import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
  	films:[]
  },
  mutations: {
  	setFilmsDataM: function (state,data) {
  		// body...
  		state.films = data;
  	}
  },
  actions: {
  	setFilmsDataA: function ({commit},data) {
  		// body...
  		commit("setFilmsDataM",data)
  	}
  }
})

export default store;
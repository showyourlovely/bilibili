import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
	  films: ["电影一","电影二","电影三","电影四"]
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
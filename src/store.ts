import Vue from 'vue';
import Vuex from 'vuex';
import { db } from './db';

import { vuexfireMutations, firestoreAction } from 'vuexfire';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    // recipes: [],
    count: 0,
  },
  mutations: {
    // other mutations
    // ...vuexfireMutations,
    fetch(state, data) {
      // state.recipes = data;
      state.count++
    }
  },
  actions: {
  bindRecipes: firestoreAction(({ bindFirestoreRef }) => {
      // return the promise returned by `bindFirestoreRef`
      return bindFirestoreRef('todos', db.collection('recipes'));
    }),
    unbindRecipes: firestoreAction(({ unbindFirestoreRef }) => {
      unbindFirestoreRef('recipes');
    }),
  },
});

export default store;
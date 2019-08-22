import Vue from 'vue';
import Vuex from 'vuex';
import { db } from './db';

import { vuexfireMutations, firestoreAction } from 'vuexfire';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recipes: [],
  },
  mutations: {
    // other mutations
    ...vuexfireMutations,
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

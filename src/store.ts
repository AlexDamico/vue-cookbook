import Vue from 'vue';
import Vuex from 'vuex';
import { db } from './db';

import { vuexfireMutations, firestoreAction } from 'vuexfire';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    recipes: [],
  },
  getters: {
    getRecipeById: (state) => (id: Number) => {
      return state.recipes.find(recipe => recipe.id === id) 
    }
  },
  mutations: {
    // other mutations
    ...vuexfireMutations,
    fetch(state: any, data: any) {
      state.recipes = data;
    },
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

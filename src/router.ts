import Vue from 'vue';
import Router from 'vue-router';

// Views
import Home from './views/Home.vue';
import Recipe from './views/Recipe.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    }, {
    	path: '/recipe',
    	name: 'recipe',
    	component: Recipe
    }
  ],
});

<template>
  <div class="home">
    <div class="container">
      <h1>Home</h1>

      <!-- Print list of recipes from collection -->
      <ul>
      	<li :key="recipe.key" v-for="recipe in recipes">
      		<router-link to="/recipe">{{ recipe.name }}</router-link>
      	</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

// Import database
import { db } from '../db';

@Component({
  components: {
  },
})

export default class Home extends Vue {

  // Instantiate data objects
  private data() {
    return {
      recipes: [],
    };
  }

  // Mount collection data from Firestore
  private mounted() {
    db
      .collection('recipes')
      .get()
      .then((querySnapshot) => {
        const recipeCollection = querySnapshot.docs.map((doc) => doc.data());
        this.recipes = recipeCollection;
      });
  }
}
</script>

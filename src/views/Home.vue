<template>
  <div class="home">
    <div class="container">
      <h1>Home</h1>

      <!-- Print list of recipes from collection -->
      <ul>
      	<li :key="recipe.key" v-for="recipe in recipes">
      		{{ recipe.name }}
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
  data() {
    return {
      recipes: [],
    };
  }

  // Mount collection data from Firestore
  mounted() {
    db
      .collection('recipes')
      .get()
      .then(querySnapshot => {
        const recipes = querySnapshot.docs.map(doc => doc.data())
        this.recipes = recipes;
      });
  }
}
</script>

<template>
  <div class="home">
    <div class="container">
      <h1>Home</h1>

      <!-- Print list of recipes from collection -->
      <ul>
      	<li v-bind:key="{index}" v-for="(recipe, index) in recipes">
      		<router-link :to="'/recipe/' + recipe.name">{{ recipe.name }}</router-link>
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

  public tester(id) {
    console.log(id);
  }

  // Instantiate data objects
  public data() {
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
        this.recipes = querySnapshot.docs.map((doc) => doc.data());
        this.$store.commit('fetch', this.recipes);
      });
  }
}
</script>

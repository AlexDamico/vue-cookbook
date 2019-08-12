<template>
  <main class="recipe">
    <div class="container">
      <router-link to="/">< Back</router-link>
      <h1>Recipe</h1>

      <section class="row">
        <article class="col-sm-6">
          <img src="" alt="Preview">
        </article>
        <article class="col-sm-6">
          <h2>Name</h2>
          <div><strong><font-awesome-icon icon="hourglass-half" /> Prep Time:</strong> 00m</div>
          <div><strong><font-awesome-icon icon="clock" /> Cooking Time:</strong> 00m</div>
          <div><strong><font-awesome-icon icon="user" /> Serves:</strong> 0-0</div>
        </article>
      </section>

      <hr>

      <section class="row">
        <article class="col-12 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</article>
      </section>

      <hr>

      <section class="row">
        <article class="col-sm-6">
          <h4><font-awesome-icon icon="scroll" /> Ingredients</h4>

          <ul>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
          </ul>
        </article>

        <article class="col-sm-6">
          <h4><font-awesome-icon icon="list-ol" /> Instructions</h4>

          <ol>
            <li>Step</li>
            <li>Step</li>
            <li>Step</li>
          </ol>
        </article>
      </section>
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHourglassHalf, faUser, faClock, faListOl, faScroll } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// FA Icons
library.add(faHourglassHalf, faUser, faClock, faListOl, faScroll)

Vue.component('font-awesome-icon', FontAwesomeIcon)

@Component({
  components: {
  },
})

export default class Home extends Vue {

}
</script>

<template>
  <div class="home">
  	<div class="container">
  		<h1>Home</h1>
  	</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Home extends Vue {
	mounted() {
		console.log('// v Store v')
		console.log(this.$store)
	}
}
</script>

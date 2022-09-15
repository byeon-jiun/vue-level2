<template>
  <div id="root">
    <p>{{ originPrice }}</p>
    <p>{{ doublePrice }}</p>
    <p>{{ triplePrice }}</p>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Demo",
  computed: {
    ...mapGetters(['originPrice', 'doublePrice', 'triplePrice'])
  }
}
</script>

<style scoped>

</style>
<template>
  <div>
    <button @click="$q.dark.toggle()">change</button>
  </div>
</template>

<script setup>
import { useQuasar } from 'quasar'
const $q = useQuasar()
// $q.dark.set(true)

</script>

<style lang="scss" scoped>

</style>

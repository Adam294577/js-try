<template>
  <q-btn label="click" @click="bool = !bool" />
<transition
  appear
  enter-active-class="animated fadeIn"
  leave-active-class="animated fadeOut"
>

  <!-- Wrapping only one DOM element, defined by QBtn -->
  <q-btn
    v-show="bool"
    color="secondary"
    icon="mail"
    label="Email"
  />
</transition>
</template>

<script setup>
import { ref } from 'vue';
  const bool = ref(true)
</script>

<style lang="scss" scoped>

</style>

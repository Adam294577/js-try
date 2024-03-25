<template>
  <div>
    <h1 class="">{{ count }}</h1>
    <h1>{{ dbCount }}</h1>
    <button @click="add">add</button>
  </div>
</template>

<script setup>
import {ref, computed} from "vue";
 const count = ref(0);
 const dbCount = computed(()=>{
  return count.value * 2
 })
 const add = () =>{
  count.value++;
 }
</script>

<style lang="scss" scoped>

</style>

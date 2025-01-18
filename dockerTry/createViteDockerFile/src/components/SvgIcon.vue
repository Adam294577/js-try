<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  className: {
    type: String,
  },
  color: {
    type: String,
    default: "#FFF",
  },
});
const svgName = computed(() => {
  if (props.name.includes("/")) {
    return `#${props.name}`;
  } else {
    return `#/${props.name}`;
  }
});
const svgClass = computed(() =>
  props.className ? "svg-icon " + props.className : "svg-icon"
);
</script>

<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="svgName" :fill="color" />
  </svg>
</template>

<style>
.svg-icon {
  overflow: hidden;
}
</style>

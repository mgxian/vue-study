<template>
  <div>route demo b with args id {{ id }}</div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      default: 0
    }
  }
};
</script>
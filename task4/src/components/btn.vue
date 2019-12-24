<template>
  <button @click="increment">{{ name }}</button>
</template>

<script>
export default {
  props: {
    name: String,
    increment: Function
  }
};
</script>
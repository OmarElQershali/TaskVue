<template>
  <div>Hi I am Child from perant {{ test }}</div>
</template>

<script>
export default {
  inject: ["test"]
};
</script>
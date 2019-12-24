<template>
  <div>
    <input type="text" name id :value="value" />
  </div>
</template>

<script>
export default {
  props: {
    value: String
  }
};
</script>
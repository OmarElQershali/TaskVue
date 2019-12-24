<template>
  <div>
    <input name id :value="value" />
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    type: Array
  },

  data() {
    return {
      // type: "text"
    };
  }
};
</script>
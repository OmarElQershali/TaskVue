<template>
  <select>
    <option value="volvo" v-for="(option , index) in options" :key="index">{{ option }}</option>
  </select>
</template>

<script>
export default {
  props: {
    options: Array
  }
};
</script>
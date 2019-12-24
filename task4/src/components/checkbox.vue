<template>
  <div>
    <ul>
      <li v-for="(check, index) in checks " :key="index">
        <input :type="type" name="vehicle1" value="Bike" />
        <label>{{check}}</label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    checks: Array,
    type: Array
  }
};
</script>
<style scoped>
li {
  list-style-type: none;
}
</style>
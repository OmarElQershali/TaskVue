<template>
  <div>
    <ul>
      <li v-for="(check, index) in checks " :key="index">
        <input type="checkbox" name="vehicle1" value="Bike" />
        <label>{{check}}</label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    checks: Array
  }
};
</script>
<style scoped>
li {
  list-style-type: none;
}
</style>
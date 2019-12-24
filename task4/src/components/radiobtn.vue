<template>
  <div>
    <ul>
      <li v-for="(redio , index) in redios" :key="index">
        <input type="radio" name="gender" id="male" value="male" />
        <label for="male">{{ redio }}</label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    redios: Array
  }
};
</script>
<style scoped>
li {
  list-style-type: none;
}
</style>
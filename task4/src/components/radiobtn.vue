<template>
  <div>
    <ul>
      <li v-for="(redio , index) in redios" :key="index">
        <input :type="type" name="gender" id="male" value="male" />
        <label for="male">{{ redio }}</label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    redios: Array,
    type: Array
  }
  // data() {
  //   return {
  //     title: "male"
  //   };
  // }
};
</script>
<style scoped>
li {
  list-style-type: none;
}
</style>
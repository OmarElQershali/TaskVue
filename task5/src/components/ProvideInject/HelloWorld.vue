<template>
  <inject-hw></inject-hw>
</template>

<script>
import injectHW from "./injectHW";
export default {
  name: "HelloWorld",
  components: {
    "inject-hw": injectHW
  }
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

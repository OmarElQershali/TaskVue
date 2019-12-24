<template>
  <div>
    <textarea rows="4" cols="100" v-model="title"></textarea>
  </div>
</template>

<script>
export default {
  props: ["title"]
};
</script>
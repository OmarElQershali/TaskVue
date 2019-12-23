<template>
  <div>
    <h1>{{title}}</h1>
    <h1>{{Age}}</h1>
    <ul>
      <li v-for="(informaion, index) in informaions" :key="index">
        <span>{{informaion.Name}} --</span>
        <span>{{informaion.Age}} --</span>
        <span>{{informaion.Gender}}</span>
        <button @click="deleteNode(index)">deleteNode</button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    informaions: {
      type: Array
    },
    title: {
      type: String
    },
    Age: {
      type: Number
    },
    deleteNode: {
      required: true,
      type: Function
    }
  }
};
</script>
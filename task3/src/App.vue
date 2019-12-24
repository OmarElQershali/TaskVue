<template>
  <div id="app">
    <!--  Global Component -->
    <global-component :informaions="informaions" :title="title" :Age="Age" :deleteNode="deleteNode"></global-component>
    <camera name="cameraName" img="cameraImage || '../no-camera-found.jpg'" :rating="9"></camera>

    <my-btn name="Share" :handleClick="handleClick"></my-btn>
    <!-- Just Local Component -->
    <local-component></local-component>
    <!-- Example for provide and inject -->
    <child></child>
    <button @click="Age++" :title="title">INC</button>
  </div>
</template>

<script>
import LocalComponent from "./components/LocalComponent";
export default {
  name: "app",
  components: {
    "local-component": LocalComponent
  },
  provide() {
    // const test = {};
    // Object.defineProperty(test, "Age", {
    //   enumerable: true,
    //   get: () => this.Age
    // });
    return {
      test: "Age"
    };
  },
  /**
   * input
   * text area
   * btn
   * label
   * ch box
   * ra btn
   */
  data() {
    return {
      title: "Welcome in Vue JS Course",
      Age: 21,
      Gender: "Male",
      informaions: [
        { Name: "Omar", Age: 24, Gender: "Male" },
        { Name: "Mohammad", Age: 5, Gender: "Male" },
        { Name: "Wessam", Age: 27, Gender: "Male" },
        { Name: "fawzya", Age: 30, Gender: "Female" }
      ]
    };
  },
  methods: {
    handleClick() {
      this.Age++;
    },
    deleteNode(informaions, index) {
      this.informaions.splice(index, 1);
    }
  }
};
</script>

<style>
</style>

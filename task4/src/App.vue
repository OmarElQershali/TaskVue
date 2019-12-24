<template>
  <div id="app">
    <my-btn name="button"></my-btn>
    <my-checkbox :checks="checks"></my-checkbox>
    <my-textarea :title="title"></my-textarea>
    <my-label name="lable"></my-label>
    <my-radiobtn :redios="redios"></my-radiobtn>
    <my-input value="this is input "></my-input>
    <my-select :options="options"></my-select>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      title: "this is Text Area",
      checks: ["I have a bike", "I have a car", "I have a boat"],
      redios: ["Male", "Female"],
      options: ["Volvo", "Saab", "Mercedes", "Audi"]
    };
  }
};
</script>


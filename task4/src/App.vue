<template>
  <div id="app">
    {{count}}
    <br />
    <my-btn name="button" :increment="increment"></my-btn>
    <my-checkbox :checks="checks" :type="type[2]"></my-checkbox>
    <my-textarea :title="title"></my-textarea>
    <my-label name="lable"></my-label>
    <my-radiobtn :redios="redios" :type="type[1]"></my-radiobtn>
    <my-input value="this is input " :type="type[0]"></my-input>
    <my-select :options="options"></my-select>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      count: 52,
      title: "this is Text Area",
      checks: ["I have a bike", "I have a car", "I have a boat"],
      redios: ["Male", "Female"],
      options: ["Volvo", "Saab", "Mercedes", "Audi"],
      type: ["text", "radio", "checkbox"]
    };
  },
  methods: {
    increment() {
      this.count++;
    }
  }
};
</script>


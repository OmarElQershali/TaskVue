<template>
  <div id="app">
    <!-- Provide and inject  -->
    <HelloWorld :msg="msg" />
    <!-- Modal -->
    <button type="button" class="btn" @click="showModal">Open Modal!</button>

    <modal v-show="isModalVisible" @close="closeModal" />
  </div>
</template>

<script>
import HelloWorld from "./components/ProvideInject/HelloWorld";
import modal from "./components/Slots/Modal"
export default {
  name: "app",
  components: {
    HelloWorld,
    modal
  },
  provide() {
    return {
      msg: this.msg
    };
  },
  data() {
    return {
      msg: "How from provide and inject",
      isModalVisible: false
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

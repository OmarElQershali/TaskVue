import Vue from "vue";
import GlobalComponent from "./components/GlobalComponent";
import camera from "./components/camera";
import btn from "./components/Button";
import Child from "./components/Child";
Vue.component("global-component", GlobalComponent);
Vue.component("camera", camera);
Vue.component("my-btn", btn);
Vue.component("child", Child);

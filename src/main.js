import { createApp } from "vue";
import App from "./App.vue";
import MainDialog from "./components/UI/MainDialog.vue";

const app = createApp(App);

app.component("main-dialog", MainDialog);

app.mount("#app");

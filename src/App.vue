<template>
  <main-header title="Remember resources"></main-header>
  <main-resources></main-resources>
</template>

<script>
import MainHeader from "./components/layouts/MainHeader.vue";
import MainResources from "./components/sources/MainResources.vue";

export default {
  components: {
    "main-header": MainHeader,
    "main-resources": MainResources,
  },
  data() {
    return {};
  },
};
</script>

<style></style>

<template>
  <ul>
    <learning-rescource
      v-for="res in storedResources"
      v-bind:key="res.id"
      v-bind:id="res.id"
      v-bind:title="res.title"
      v-bind:description="res.description"
      v-bind:link="res.link"
    ></learning-rescource>
  </ul>
</template>

<script>
import LearningRescource from "./LearningRescource.vue";

export default {
  //props: ["storedResources"],
  inject: ["storedResources"],
  components: {
    "learning-rescource": LearningRescource,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>

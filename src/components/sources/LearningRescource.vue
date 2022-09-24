<template>
  <li>
    <div class="card" style="width: 100%">
      <div class="card-header">
        <h3>{{ title }}</h3>
      </div>
      <div class="card-body">
        <p class="card-text">
          {{ description }}
        </p>
        <a v-bind:href="link" target="_blank">View Resource</a>
      </div>
      <div class="card-body">
        <button
          type="button"
          class="btn btn-danger"
          v-on:click="deleteResource(id)"
        >
          Delete
        </button>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    id: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String, required: true },
  },
  inject: ["deleteResource"],
};
</script>

<style scoped></style>

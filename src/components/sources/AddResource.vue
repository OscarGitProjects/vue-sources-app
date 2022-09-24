<template>
  <main-dialog
    v-if="IsInputInvalid"
    title="Invalid input!"
    v-on:close="confirmDialog"
  >
    <template v-slot:default>
      <p>Some input is invalid!</p>
      <p>Please add inputs to all inputfields</p>
    </template>

    <template v-slot:buttons>
      <button v-on:click="closeDialog()" class="btn btn-primary">Close</button>
    </template></main-dialog
  >

  <div class="card" style="width: 100%">
    <div class="card-header">
      <h3>Add new resource</h3>
    </div>
    <div class="card-body">
      <form id="newResourceForm" v-on:submit.prevent="submitData">
        <div class="row">
          <div class="col">
            <label for="title" class="form-label">Title</label>
            <input
              id="title"
              name="title"
              text="text"
              ref="titleInput"
              class="form-control"
              placeholder="Add your title"
            />
          </div>
        </div>

        <div class="row">
          <div class="col">
            <label for="description" class="form-label">Description</label>
            <textarea
              id="description"
              name="description"
              rows="3"
              ref="descriptionInput"
              class="form-control"
              placeholder="Add a description"
            />
          </div>
        </div>

        <div class="row">
          <div class="col">
            <label for="link" class="form-label">Link to resource</label>
            <input
              id="link"
              name="link"
              text="url"
              ref="linkInput"
              class="form-control"
              placeholder="Add a url to the resource"
            />
          </div>
        </div>

        <div class="row">
          <div class="col">
            <button id="btnAddResource" type="submit" class="btn btn-primary">
              Add resource
            </button>
          </div>
        </div>
      </form>
      <!-- End of newResourceForm -->
    </div>
  </div>
</template>

<script>
import MainDialog from "../UI/MainDialog.vue";

export default {
  inject: ["addResurce"],
  data() {
    return {
      IsInputInvalid: false,
    };
  },
  methods: {
    submitData() {
      const enteredTitle = this.$refs.titleInput.value;
      const enteredDescription = this.$refs.descriptionInput.value;
      const enteredLink = this.$refs.linkInput.value;

      if (
        enteredTitle.trim() === "" ||
        enteredDescription.trim() === "" ||
        enteredLink.trim() === ""
      ) {
        this.IsInputInvalid = true;
        return;
      }

      // Add resource to the global array
      this.addResurce(enteredTitle, enteredDescription, enteredLink);
    },

    closeDialog() {
      this.IsInputInvalid = false;
    },
  },
  components: { MainDialog },
};
</script>

<style scoped></style>

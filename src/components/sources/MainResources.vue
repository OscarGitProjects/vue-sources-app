<template>
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <a
        v-bind:class="styleStoredResources"
        aria-current="page"
        href="#"
        v-on:click="setSelectedTab('stored-resources')"
        >Stored resources</a
      >
    </li>
    <li class="nav-item">
      <a
        v-bind:class="styleModeAddResources"
        href="#"
        v-on:click="setSelectedTab('add-resource')"
        >Add resources</a
      >
    </li>
  </ul>

  <keep-alive><component v-bind:is="selectedTab"></component></keep-alive>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import StoredResources from "./StoredResources.vue";
import AddResource from "./AddResource.vue";

export default {
  components: {
    "stored-resources": StoredResources,
    "add-resource": AddResource,
  },
  computed: {
    styleStoredResources() {
      let style =
        this.selectedTab === "stored-resources"
          ? "nav-link active"
          : "nav-link";
      return style;
    },
    styleModeAddResources() {
      let style =
        this.selectedTab === "add-resource" ? "nav-link active" : "nav-link";
      return style;
    },
  },
  data() {
    return {
      selectedTab: "stored-resources", // Kan också vara add-resource
      storedResources: [
        {
          id: uuidv4(),
          title: "Official guide",
          description: "The official Vue.js documentation",
          link: "https://vuejs.org",
        },
        {
          id: uuidv4(),
          title: "Google",
          description: "Learn to google...",
          link: "https://google.org",
        },
      ],
    };
  },
  provide() {
    return {
      storedResources: this.storedResources,
      addResurce: this.addResource,
      deleteResource: this.removeResource,
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },

    addResource(title, description, url) {
      const newResource = {
        id: uuidv4(),
        title: title,
        description: description,
        link: url,
      };

      /*
      alert(
        'Title: ' + title + ', Description: ' + description + ', Link: ' + url
      ); */

      // Add new resurce at the beginning of array
      this.storedResources.unshift(newResource);
      this.selectedTab = "stored-resources";
    },

    removeResource(id) {
      let resIndex = this.storedResources.findIndex((res) => res.id === id);
      this.storedResources.splice(resIndex, 1);

      this.selectedTab = "stored-resources";
    },
  },
};
</script>

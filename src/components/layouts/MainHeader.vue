<template>
  <div class="container">
    <header>
      <!-- Navbar -->
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">{{ title }}</a>
        </div>
      </nav>
      <!-- Navbar -->
    </header>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style scoped></style>

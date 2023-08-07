<template>
  <footer class="bg-dark text-light py-3">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          &copy; {{ new Date().getFullYear() }} - Stockalize
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FooterView",
});
</script>

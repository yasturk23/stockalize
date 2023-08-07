<template>
  <nav>
    <Header />
  </nav>

  <router-view />

  <Footer />
</template>

<script setup lang="ts">
import Header from "@/components/HeaderView.vue";
import StockForm from "@/components/Summary.vue";
import Footer from "@/components/FooterView.vue";
</script>
<style></style>

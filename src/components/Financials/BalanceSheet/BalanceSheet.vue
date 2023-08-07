<script setup lang="ts">
import Financials from "@/components/Financials/Financials.vue";
</script>

<template>
  <Financials />
  <h1>Welcome to the Balance Sheet Section</h1>

  <div class="row">
    <div class="col-3">
      <router-link to="/financials/balance/yearly">Yearly</router-link>
    </div>
    <div class="col-3">
      <router-link to="/financials/balance/quarterly">Quarterly</router-link>
    </div>
  </div>
</template>

<style scoped></style>

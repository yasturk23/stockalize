<script setup lang="ts">
import { ref } from "vue";
import router from "@/router";

import { useStocksStore } from "@/stores/stockStore";

const stockSymbol = ref(false);

const stock = useStocksStore();

function submit() {
  stock.fetchOverview();
  stockSymbol.value = true;
  router.push("/summary");
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand mx-auto" href="#">Stockalize</a>
    <form @submit.prevent="submit">
      <label>Enter Stock Ticker Symbol:</label>
      <input v-model="stock.$state.symbol" type="text" />
      <button type="submit">Submit</button>
    </form>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/login">Member Access</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/signup">Signup</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

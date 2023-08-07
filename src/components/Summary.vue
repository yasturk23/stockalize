<script setup lang="ts">
import { ref } from "vue";
// import { ref } from "vue";

import { useStocksStore } from "@/stores/stockStore";

// const symbol = ref("");

// data() {
//   return {
//     apikey: "Q7J64BXC5WZA22PY",
//   };
// },
const stockStore = useStocksStore();

function fetchFinancials() {
  stockStore.fetchFinancials();
}
</script>

<template>
  <h1>Quick Summary</h1>
  <!-- <form @submit.prevent="submit">
    <label>Enter Stock Ticker Symbol:</label>
    <input v-model="stock.$state.symbol" type="text" />
    <button type="submit">Submit</button>
  </form> -->

  <div v-if="stockStore.$state.symbol">
    <h4>Company Name: {{ stockStore.overview.Name }}</h4>

    <p>Ticker Symbol: {{ stockStore.overview.Symbol }}</p>
    <p>Exchange: {{ stockStore.overview.Exchange }}</p>

    <p>
      Market Cap:
      {{ Number(stockStore.overview.MarketCapitalization).toLocaleString() }}
    </p>
    <p>Beta: {{ stockStore.overview.Beta }}</p>

    <p>P/E Ratio: {{ stockStore.overview.PERatio }}</p>
    <p>EPS {{ stockStore.overview.EPS }}</p>

    <p>Country: {{ stockStore.overview.Country }}</p>

    <p>Sector: {{ stockStore.overview.Sector }}</p>
    <p>Indsutry: {{ stockStore.overview.Industry }}</p>

    <p>{{ stockStore.overview.Description }}</p>
    <p>{{ stockStore.overview.Address }}</p>

    <div class="row">
      <div class="col-3">
        <router-link to="/overview">Overview</router-link>
      </div>

      <div class="col-3">
        <router-link to="/financials" @click="fetchFinancials()"
          >Financials</router-link
        >
      </div>
      <div class="col-3">
        <router-link to="/statistics">Statistical Analysis</router-link>
      </div>
      <div class="col-3">
        <router-link to="/technicals">Technicals</router-link>
      </div>
    </div>
  </div>
</template>

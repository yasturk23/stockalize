<template>
  <h1>Welcome to Home</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StockSummary from "@/components/Overview.vue";

export default defineComponent({
  name: "HomeView",

  data() {
    return {
      symbol: "",
      stockData: {
        name: "",
        symbol: "",
        price: "",
        prevClose: "",
        open: "",
        dayRange: "",
      },
    };
  },
  methods: {
    getStockData() {
      fetch(`https://api.iextrading.com/1.0/stock/${this.symbol}/quote`)
        .then((response) => response.json())
        .then((data) => {
          this.stockData = data;
        });
    },
  },
});
</script>

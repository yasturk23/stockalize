<script setup lang="ts">
import Financials from "@/components/Financials/Financials.vue";

import { useStocksStore } from "@/stores/stockStore";

const stockStore = useStocksStore();
</script>

<template>
  <Financials />

  <h1>Welcome to the Cash Flow Section</h1>
  <div>
    <div
      v-for="(incomeData, incomeType) in stockStore.$state.cashFlow"
      :key="incomeType"
    >
      <h2>{{ incomeType }}</h2>
      <table class="table">
        <thead>
          <tr>
            <th
              v-for="item in stockStore.$state.cashFlow[incomeType][0]"
              :key="item"
            >
              {{ item }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(values, date) in incomeData" :key="date">
            <td v-for="value in values" :key="value">{{ value }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

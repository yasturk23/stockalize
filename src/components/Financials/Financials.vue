<script setup lang="ts"></script>

<template>
  <h1>Financials</h1>

  <div class="row">
    <div class="col-4">
      <h5>Income Statement</h5>
    </div>
    <div class="col-4">
      <h5>Balance Sheet</h5>
    </div>
    <div class="col-4">
      <h5>C/F Statement</h5>
    </div>
  </div>
  <div class="row">
    <div class="col-2">
      <router-link to="/financials/income/yearly">I/S Yearly</router-link>
    </div>
    <div class="col-2">
      <router-link to="/financials/income/quarterly">I/S Quarterly</router-link>
    </div>
    <div class="col-2">
      <router-link to="/financials/balance/yearly">B/S Yearly</router-link>
    </div>
    <div class="col-2">
      <router-link to="/financials/balance/quarterly"
        >B/S Quarterly</router-link
      >
    </div>
    <div class="col-2">
      <router-link to="/financials/cashflow/yearly">C/F Yearly</router-link>
    </div>
    <div class="col-2">
      <router-link to="/financials/cashflow/quarterly"
        >C/F Quarterly</router-link
      >
    </div>
  </div>

  <h3>Financial Health</h3>

  <!-- <div class="row">
    <div class="col-3">
      <p>Current Ratio</p>
      <p>{{ stockStore.financials.currentRatio }}</p>
    </div>
    <div class="col-3">
      <p>Quick Ratio</p>
      <p>{{ stockStore.financials.quickRatio }}</p>
    </div>
    <div class="col-3">
      <p>Debt to Equity Ratio</p>
      <p>{{ stockStore.financials.debtToEquityRatio }}</p>
    </div>
    <div class="col-3">
      <p>Debt to Assets Ratio</p>
      <p>{{ stockStore.financials.debtToAssetsRatio }}</p>
    </div> -->
</template>

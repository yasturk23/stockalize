<script setup lang="ts">
import { ref } from "vue";
import { useStocksStore } from "@/stores/stockStore";

const stockStore = useStocksStore();
</script>

<template>
  <h1>Overview</h1>

  <div>
    <div>
      <table
        class="table table-striped table-hover table-bordered table-responsive"
      >
        <!-- <thead class="thead-light">
          <tr>
            <th>Property</th>
            <th>Value</th>
          </tr>
        </thead> -->
        <tbody>
          <tr v-for="(value, key) in stockStore.$state.overview" :key="key">
            <td>{{ key }}</td>
            <td>{{ value }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

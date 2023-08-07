<script setup lang="ts">
import { defineComponent } from "vue";
import { useStocksStore } from "@/stores/stockStore";
import Financials from "@/components/Financials/Financials.vue";

const stockStore = useStocksStore();
const incomeStatement = stockStore.$state.incomeStatement.annualReports;
</script>

<template>
  <Financials />

  <div>
    <table
      class="table table-striped table-hover table-bordered table-responsive"
    >
      <thead>
        <tr>
          <th>Fiscal Year</th>
          <template
            v-for="(report, index) in incomeStatement"
            :key="report.fiscalDateEnding"
          >
            {{ report.fiscalDateEnding }}
            <th v-if="index < incomeStatement.length - 1">% Change</th>
          </template>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(value, key) in incomeStatement[0]" :key="key">
          <td>{{ key }}</td>
          <template
            v-for="(report, index) in incomeStatement"
            :key="report.fiscalDateEnding"
          >
            {{
              isFinite(report[key])
                ? Number(report[key]).toLocaleString()
                : report[key]
            }}
            <td v-if="index < incomeStatement.length - 1">
              <template
                v-if="
                  isFinite(
                    ((parseFloat(report[key]) -
                      Number(incomeStatement[index + 1][key])) /
                      Number(incomeStatement[index + 1][key])) *
                      100
                  )
                "
              >
                <p>
                  {{
                    (
                      (Number(
                        parseFloat(report[key]) -
                          Number(incomeStatement[index + 1][key])
                      ) /
                        Number(incomeStatement[index + 1][key])) *
                      100
                    ).toFixed(2)
                  }}%
                </p>
              </template>
            </td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>

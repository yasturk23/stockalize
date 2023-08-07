<script setup lang="ts">
import Financials from "../Financials.vue";
import { useStocksStore } from "@/stores/stockStore";

const stockStore = useStocksStore();

const cfStatement = stockStore.$state.cashFlow.quarterlyReports;
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
            v-for="(report, index) in cfStatement"
            :key="report.fiscalDateEnding"
          >
            <th>{{ report.fiscalDateEnding }}</th>

            <th v-if="index < cfStatement.length - 1">% Change</th>
          </template>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, key) in cfStatement[0]" :key="key">
          <td>{{ key }}</td>

          <template
            v-for="(report, index) in cfStatement"
            :key="report.fiscalDateEnding"
          >
            <td>
              {{
                isFinite(report[key])
                  ? Number(report[key]).toLocaleString()
                  : report[key]
              }}
            </td>
            <td v-if="index < cfStatement.length - 1">
              <template
                v-if="
                  isFinite(
                    ((parseFloat(report[key]) -
                      Number(cfStatement[index + 1][key])) /
                      Number(cfStatement[index + 1][key])) *
                      100
                  )
                "
              >
                <p>
                  {{
                    (
                      (Number(
                        parseFloat(report[key]) -
                          Number(cfStatement[index + 1][key])
                      ) /
                        Number(cfStatement[index + 1][key])) *
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

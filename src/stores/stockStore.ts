import { defineStore } from "pinia";
import axios from "axios";

export const useStocksStore = defineStore({
  id: "stockState",

  state: () => ({
    symbol: "",
    //yes, I know this is bad practice and the correct way is to use a dotenv file but I'm lazy
    apiKey: "Q7J64BXC5WZA22PY",
    overview: {},
    dailyData: {},
    incomeStatement: {},
    balanceSheet: {},
    cashFlow: {},
  }),
  getters: {
    getStockData(state) {
      return state.dailyData;
    },
  },
  actions: {
    async fetchOverview() {
      const { data } = await axios.get(
        `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${this.symbol}&apikey=${this.apiKey}`
      );
      console.log(data);
      this.overview = data;
    },
    async fetchDailyData() {
      console.log(this.symbol);
      const { data } = await axios.get(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${this.symbol}&apikey=${this.apiKey}&outputsize=full`
      );
      console.log(data);
      this.dailyData = data;
    },
    async fetchIncomeStatement() {
      const { data } = await axios.get(
        `https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=${this.symbol}&apikey=${this.apiKey}&outputsize=full`
      );

      console.log(data);
      this.incomeStatement = data;
    },
    async fetchBalanceSheet() {
      const { data } = await axios.get(
        `https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=${this.symbol}&apikey=${this.apiKey}&outputsize=full`
      );

      console.log(data);
      this.balanceSheet = data;
    },
    async fetchCashFlow() {
      const { data } = await axios.get(
        `https://www.alphavantage.co/query?function=CASH_FLOW&symbol=${this.symbol}&apikey=${this.apiKey}&outputsize=full`
      );

      console.log(data);
      this.cashFlow = data;
    },

    async fetchFinancials() {
      await this.fetchIncomeStatement();
      await this.fetchBalanceSheet();
      await this.fetchCashFlow();
    },

    async fetchData() {
      // await this.fetchOverview();
      // await this.fetchDailyData();
      // await this.fetchIncomeStatement();
      // await this.fetchBalanceSheet();
      // await this.fetchCashFlow();
    },
  },
});

//   state() {
//     return {
//       symbol: "",
//       apiKey: "Q7J64BXC5WZA22PY",
//       stockData: [],
//     };
//   },
//   actions: {async fetchStockData() {
//     const { data } = await axios.get(
//       `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol.value}&apikey=${this.apikey}&outputsize=full`
//     );
//     this.state.stockData = data.stockData;
//   } }

// }

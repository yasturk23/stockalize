import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import LoginView from "@/views/LoginView.vue";
import SignupView from "@/views/SignupView.vue";
import Summary from "@/components/Summary.vue";
import Overview from "@/components/Overview.vue";
import Financials from "@/components/Financials/Financials.vue";
// import Income from "@/components/Financials/Income/Income.vue";
import IncomeYearly from "@/components/Financials/Income/IncomeYearly.vue";
import IncomeQ from "@/components/Financials/Income/IncomeQ.vue";
// import BalanceSheet from "@/components/Financials/BalanceSheet/BalanceSheet.vue";
import BSYearly from "@/components/Financials/BalanceSheet/BSYearly.vue";
import BSQuarterly from "@/components/Financials/BalanceSheet/BSQuarterly.vue";
// import CashFlow from "@/components/Financials/CashFlow/CashFlow.vue";
import CashFlowYearly from "@/components/Financials/CashFlow/CashFlowYearly.vue";
import CashFlowQ from "@/components/Financials/CashFlow/CashFlowQ.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },

  {
    path: "/summary",
    name: "summary",
    component: Summary,
  },

  {
    path: "/overview",
    name: "overview",
    component: Overview,
  },

  {
    path: "/financials",
    name: "financial",
    component: Financials,
  },
  // {
  //   path: "/financials/income",
  //   name: "income",
  //   component: Income,
  // },
  {
    path: "/financials/income/yearly",
    name: "incomeyearly",
    component: IncomeYearly,
  },
  {
    path: "/financials/income/quarterly",
    name: "incomequarterly",
    component: IncomeQ,
  },
  // {
  //   path: "/financials/balance",
  //   name: "balance",
  //   component: BalanceSheet,
  // },
  {
    path: "/financials/balance/yearly",
    name: "bsyearly",
    component: BSYearly,
  },
  {
    path: "/financials/balance/quarterly",
    name: "bsquarterly",
    component: BSQuarterly,
  },
  {
    path: "/financials/cashflow/yearly",
    name: "cashflowyearly",
    component: CashFlowYearly,
  },
  {
    path: "/financials/cashflow/quarterly",
    name: "cashflowquarterly",
    component: CashFlowQ,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

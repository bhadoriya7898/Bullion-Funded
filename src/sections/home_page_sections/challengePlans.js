/* ================= FEATURES (LEFT COLUMN) ================= */
export const FEATURES = [
  { key: "profitShareChallenge", label: "Profit share from challenge Phase" },
  { key: "profitTarget", label: "Profit Target" },
  { key: "maxDailyLoss", label: "Maximum Daily Loss" },
  { key: "maxOverallLoss", label: "Maximum Overall loss" },
  { key: "drawdownType", label: "Drawdown Type" },
  { key: "timeLimit", label: "Time Limit" },
  { key: "minTradingDays", label: "Minimum Trading Days" },
  { key: "commissions", label: "Commissions" },
  { key: "profitSplitUpto", label: "Profit Split Upto" },
  { key: "leverage", label: "Trading Leverage" },
  { key: "newsTrading", label: "News Trading" },
  { key: "weekendHolding", label: "Weekend Holding" },
  { key: "firstReward", label: "First Reward" },
  { key: "tradeHedging", label: "Trade hedging" },
  { key: "resetDiscount", label: "Reset Discount" },
  { key: "fee", label: "fee" },
];

/* ================= COMMON ROW DATA (PDF MATCH) ================= */
const COMMON_VALUES = {
  profitShareChallenge: "15% [$375]",
  profitTarget: "15%",
  maxDailyLoss: "4%",
  maxOverallLoss: "8%",
  drawdownType: "Balance Based",
  timeLimit: "30 Days",
  minTradingDays: "15 Days",
  commissions: "$3 / Per Lot",
  profitSplitUpto: "95%",
  leverage: "01:00",
  newsTrading: true,
  weekendHolding: true,
  firstReward: "5%",
  tradeHedging: "No",
  resetDiscount: "10%",
  fee: "$49",
};

/* ================= ACCOUNT SIZES (PDF MATCH) ================= */
const ACCOUNT_SIZES = [
  "$2,500",
  "$5,000",
  "$10,000",
  "$25,000",
  "$50,000",
  "$100,000",
];

/* ================= HELPER ================= */
const generateRows = () =>
  ACCOUNT_SIZES.map((size) => ({
    accountSize: size,
    values: { ...COMMON_VALUES },
  }));

/* ================= PLAN DATA ================= */
export const PLAN_DATA = {
  /* -------- X-CHALLENGE (HAS STEPS) -------- */
  "x-challenge": {
    hasSteps: true,
    steps: {
      step1: generateRows(), // PDF Step-1
      step2: generateRows(), // PDF Step-2 (same data as per PDF)
    },
  },

  /* -------- EVALUATION -------- */
  evaluation: {
    hasSteps: false,
    data: generateRows(),
  },

  /* -------- EXPRESS -------- */
  express: {
    hasSteps: false,
    data: generateRows(),
  },

  /* -------- X-LITE CHALLENGE -------- */
  "x-lite": {
    hasSteps: false,
    data: generateRows(),
  },
};

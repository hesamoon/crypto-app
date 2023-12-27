const BASE_URL = "https://api.coingecko.com/api/v3";
const API_KEY = "CG-nMng9x9sJuxuSQAxbRxKB6zw";

const getCoinList = (page, currency) =>
  `${BASE_URL}/coins/markets?vs_currency=${currency}&order=market-cap-desc&per_page=20&page=${page}&x_cg_demo_api_key=${API_KEY}`;

const searchCoin = (query) => `${BASE_URL}/search?query=${query}`;

const marketChart = (coin, currency) =>
  `${BASE_URL}/coins/${coin}/market_chart?vs_currency=${currency}&days=7&x_cg_demo_api_key=${API_KEY}`;

export { getCoinList, searchCoin, marketChart };

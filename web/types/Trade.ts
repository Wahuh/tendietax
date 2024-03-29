interface Trade {
  commission: number;
  name: string;
  date: string;
  quantity: number;
  // price: number;
  symbol: string;
  total: number;
  type: TradeType;
}

export enum TradeType {
  Buy = "Buy",
  Sell = "Sell",
}

export default Trade;

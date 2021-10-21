import Trade, { TradeType } from "../types/Trade";

const Trading212Mapping = {
  ["Action"]: "",
  ["Time"]: "date",
  ["Ticker"]: "symbol",
  ["Name"]: "company",
  ["No. of shares"]: "quantity",
  ["Total (GBP)"]: "total",
  // commission transaction fee + finra fee
};

export enum Mapping {
  Custom,
  Trading212,
}

export interface CSVTrade {
  [key: string]: string;
}

export const mapTrade = (csvTrade: CSVTrade, mapping: Mapping): Trade => {
  return mapTrading212(csvTrade);
};

export const mapTrading212 = (csvTrade: CSVTrade): Trade => {
  const tradeType = csvTrade["Action"]?.endsWith("buy")
    ? TradeType.Buy
    : TradeType.Sell;

  return {
    commission: 0,
    quantity: 0,
    date: new Date(),
    symbol: "",
    name: csvTrade["Name"],
    total: 1,
    type: tradeType,
  };
};

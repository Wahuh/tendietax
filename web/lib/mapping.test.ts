import { TradeType } from "../types/Trade";
import { CSVTrade, mapTrading212 } from "./mapping";

describe("mapTrading212", () => {
  const actionCases = [
    ["Market buy", TradeType.Buy],
    ["Market sell", TradeType.Sell],
    ["Limit buy", TradeType.Buy],
    ["Limit sell", TradeType.Sell],
  ];
  it.each(actionCases)("converts action %p to %p", (action, tradeType) => {
    const csvTrade: CSVTrade = {
      Action: action,
    };
    const trade = mapTrading212(csvTrade);
    expect(trade.type).toBe(tradeType);
  });

  it("converts Name to name", () => {
    const csvTrade: CSVTrade = {
      Name: "GameStop",
    };
    const trade = mapTrading212(csvTrade);
    expect(trade.name).toBe("GameStop");
  });
});

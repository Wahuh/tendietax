interface Transaction {
  commission: number;
  date: Date;
  quantity: number;
  price: number;
  symbol: string;
  type: "Buy" | "Sell";
}

export default Transaction;

import type { NextPage } from "next";
import { ChangeEvent, useState } from "react";
import Papa from "papaparse";
import { CSVTrade, Mapping, mapTrade } from "../lib/mapping";
import Trade from "../types/Trade";
import { Table, Button, Text, SideNavigationBar, Input } from "banana-ui";
import groupBy from "lodash/groupBy";

const Home: NextPage = () => {
  const [trades, setTrades] = useState<Trade[]>([]);
  console.log(groupBy(trades, "name"));
  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files) return;
    [...files].forEach((file) => {
      Papa.parse(file, {
        complete: (results) => {
          const mappedTrades = results.data.map((obj) => {
            const csvTrade = obj as CSVTrade;
            return mapTrade(csvTrade, Mapping.Trading212);
          });
          setTrades(mappedTrades);
        },
        header: true,
      });
    });
  };
  const displayTrades = trades.map((trade) => ({
    ...trade,
    date: trade.date.toString(),
  }));
  return (
    <div className="flex">
      <div>
        <input
          type="file"
          className="cursor-pointer"
          multiple
          onChange={handleUpload}
        />
        <Table
          items={displayTrades}
          columns={[
            { name: "Symbol", field: "symbol" },
            { name: "Name", field: "name" },
            { name: "Date", field: "date" },
            { name: "Quantity", field: "quantity" },
            { name: "Commission", field: "commission" },
            { name: "Total", field: "total" },
            { name: "Type", field: "type" },
          ]}
        />
      </div>
      <div className="flex flex-col">
        <div className="bg-white p-4 rounded w-60">
          <div className="flex justify-between">
            <Text variant="body2">Tax year</Text>
            <Text variant="body2">2020 - 2021</Text>
          </div>
          <div className="flex justify-between">
            <Text variant="body2">Profit</Text>
            <Text variant="body2">£50000</Text>
          </div>
          <div className="flex justify-between">
            <Text variant="body2">CGT Allowance</Text>
            <Text variant="body2">£12,300</Text>
          </div>
          <div className="flex justify-between">
            <Text variant="label2">Total</Text>
            <Text variant="body2">£2000</Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

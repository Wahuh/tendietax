import type { NextPage } from "next";
import { ChangeEvent, useState } from "react";
import Papa from "papaparse";
import { CSVTrade, Mapping, mapTrade } from "../lib/mapping";
import Trade from "../types/Trade";

const Home: NextPage = () => {
  const [trades, setTrades] = useState<Trade[]>();

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

  return (
    <>
      <input
        type="file"
        className="cursor-pointer"
        multiple
        onChange={handleUpload}
      />
      {trades?.map((trade) => (
        <h2>{trade.name}</h2>
      ))}
    </>
  );
};

export default Home;

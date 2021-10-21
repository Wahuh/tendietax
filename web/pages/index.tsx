import type { NextPage } from "next";
import { ChangeEvent } from "react";
import Papa from "papaparse";

const Home: NextPage = () => {
  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files) return;
    [...files].forEach((file) => {
      Papa.parse(file, {
        complete: (results) => {
          console.log(results.data);
        },
        header: true,
      });
    });
  };

  return (
    <input
      type="file"
      className="cursor-pointer"
      multiple
      onChange={handleUpload}
    />
  );
};

export default Home;

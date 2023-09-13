import React, { useEffect } from "react";
import DatalistInput from "react-datalist-input";
import AlgoDataset from "../algo/AlgoDataset";
import "react-datalist-input/dist/styles.css";

export default function DynamicDataSet({ label, setSelectedProduct }) {
  const { selectedProduct, onSelect, itemsProduct } = AlgoDataset();
  // useEffect(() => {
  //   setSelectedProduct(selectedProduct);
  // }, []);

  return (
    <>
      <label className="block mb-2  text-text-gray">{label}</label>

      <DatalistInput
        id="produit"
        className=""
        placeholder="Tomates"
        onSelect={onSelect}
        items={itemsProduct}
        inputProps={{
          className:
            "bg-custom-white w-full text-text-gray border border-borde-gray  rounded-lg focus:outline-none focus:ring-borde-gray focus:border-borde-gray block h-[53px]",
          name: "productName",
          style: { fontSize: "16px" },
        }}
        listboxProps={{
          className: " h-44 overflow-y-auto text-text-gray p ",
        }}
      />
    </>
  );
}

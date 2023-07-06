import React from "react";
import { useCallback, useMemo, useState } from "react";
import data from "../../../pages/famer/data.json";

export default function AlgoDataset() {
  const allData = Object.keys(data);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const onSelect = useCallback((selectedItem) => {
    setSelectedProduct(selectedItem.value);
  }, []);

  const itemsProduct = useMemo(
    () => allData?.map((data) => ({ id: data, value: data })),
    [allData]
  );
  return { itemsProduct, selectedProduct, onSelect };
}

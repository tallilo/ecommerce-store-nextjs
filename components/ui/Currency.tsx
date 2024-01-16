"use client";

import { useEffect, useState } from "react";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

interface CurrencyPops {
  value: string | number;
}

export const Currency = ({ value }: CurrencyPops) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return <div className="fonr-semibold">{formatter.format(Number(value))}</div>;
};

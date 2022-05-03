import React, { useEffect, useState } from "react";
import axios from "axios";
import { Dropdown } from "react-bootstrap";
import { Socket } from "./socket";

export const Pair = () => {
  const [symbols, setSymbols] = useState([]);
  const [symbolName, setSymbolName] = useState("Select Pair");

  useEffect(() => {
    getSymbols();
  }, []);

  const getSymbols = () => {
    axios
      .get(`https://api.binance.com/api/v1/exchangeInfo`)
      .then((res) => {
        // console.log(res.data.symbols);
        setSymbols(res.data.symbols);
      })
      .catch((error) => console.log(error));
  };

  const symbolHandler = (e) => {
    console.log(e);
    setSymbolName(e);
  };

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="warning" id="dropdown-basic">
          {symbolName}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {symbols.map((obj, i) => (
            <Dropdown.Item key={i} onClick={() => symbolHandler(obj.symbol)}>
              {obj.symbol}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      {symbolName !== "Select Pair" ? <Socket pair={symbolName} /> : null}
    </>
  );
};

import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
export const Socket = (props) => {
  const [message, setMessage] = useState([]);
  useEffect(() => {
    let socket = new WebSocket(
      `wss://stream.binance.com:9443/ws/${props.pair.toLowerCase()}@depth10@1000ms`
    );

    socket.onmessage = function (event) {
      setMessage(event.data);
      // console.log("data received");
    };
  }, []);
  // console.log(JSON.parse(message).bids);
  // const msg = JSON.parse(message);
  // console.log(typeof message);
  // console.log(message.bids);
  return (
    <div>
      {/* {message} */}
      <Table variant="dark">
        <tr>
          <th>Buyers</th>
        </tr>
        <tr>
          <th>Price</th>
          <th>Qty</th>
          <th>Total</th>
        </tr>
        {typeof message === "string"
          ? JSON.parse(message).bids.map((arr, i) => (
              <tr key={i}>
                <th>{arr[0]}</th>
                <th>{arr[1]}</th>
                <th>{arr[0] * arr[1]}</th>
              </tr>
            ))
          : null}
      </Table>
      <Table variant="dark">
        <tr>
          <th>Sellers</th>
        </tr>
        <tr>
          <th>Price</th>
          <th>Qty</th>
          <th>Total</th>
        </tr>
        {typeof message === "string"
          ? JSON.parse(message).asks.map((arr, i) => (
              <tr key={i}>
                <th>{arr[0]}</th>
                <th>{arr[1]}</th>
                <th>{arr[0] * arr[1]}</th>
              </tr>
            ))
          : null}
      </Table>
    </div>
  );
};

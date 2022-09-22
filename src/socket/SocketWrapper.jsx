import createCandleStick from "../parser/candlestick";
import { subscriptionRequest, unsubscriptionRequest } from "./utils";
import Chart from 'react-apexcharts';
import options from "../config/chart";
import { useEffect } from "react";

export default function SocketWrapper({ children }) {
    const ws = new WebSocket('wss://stream.binance.com:9443/ws/bnbbtc@kline_1s');
    let count = 0;

    ws.addEventListener('open', () => {
        console.log('socket connection is open');

        ws.send(
            subscriptionRequest([
                "bnbbtc@aggTrade",
                "bnbbtc@depth"
            ], 1)
        );
    });

    ws.addEventListener('close', e => {
        console.log('closed the socket connection');
    });

    ws.addEventListener('message', event => {
        let data = JSON.parse(event.data);
        if (data.e !== 'kline') {
            return;
        }
        let candlestick = createCandleStick(data);
        console.log('new candlestick:', candlestick);
        count+=1;
        if (count >= 20) {
            ws.send(
                unsubscriptionRequest([
                    "bnbbtc@aggTrade",
                    "bnbbtc@depth"
                ], 1)
            )
        }
    });

    return (
        <div>{children}</div>
    )
}
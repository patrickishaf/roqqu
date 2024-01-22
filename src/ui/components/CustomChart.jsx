import { useEffect, useRef, useState } from 'react';
import '../styles/customChart';
import { ColorType, createChart } from 'lightweight-charts';
import { convertToCandles, formatDate } from '../../utils';

export default function CustomChart() {
  const activatedRef = useRef(false);
  const chartContainerRef = useRef();
  const chartRef = useRef();
  const lastKline = useRef();
  const candlestickSeriesRef = useRef();
  const socketRef = useRef();
  const [{ tradingPair, limit, interval }] = useState({
    limit: 100,
    baseCurrency:'btc',
    quoteCurrency: 'usdt',
    tradingPair: 'BTCUSDT',
    interval: '1m'
  });

  function setupChart() {
    if (activatedRef.current) return
    async function getPreviousKlines() {
      const response = await fetch(
        `https://api.binance.com/api/v3/klines?symbol=${tradingPair}&interval=${interval}&limit=${limit}`
      )
      const resJSON = await response.json()
      const candles = convertToCandles(resJSON)
      lastKline.current = candles[candles.length - 1]

      chartRef.current = createChart(chartContainerRef.current, {
        width: chartContainerRef.current.clientWidth,
        height: chartContainerRef.current.clientHeight,
        layout: {
          background: {
            type: ColorType.Solid,
            color: '#04091C'
            // color: '#FFFFFFaa'
          },
          textColor: '#A7B1BCAA'
        },
        grid: {
          vertLines: {
            color: '#1C2127',
          },
          horzLines: {
            color: '#1C2127',
          }
        },
        rightPriceScale: {
          drawTicks: true,
          borderVisible: true,
          borderColor: '#A7B1BC50'
        },
        timeScale: {
          fixLeftEdge: true,
          borderVisible: true,
          borderColor: '#A7B1BC50',
          tickMarkFormatter: function (timestamp) {
            return formatDate(new Date(timestamp))
          }
        }
      })
      candlestickSeriesRef.current = chartRef.current.addCandlestickSeries({
        upColor: '#00C076',
        downColor: '#FF6838',
        borderVisible: false,
        scaleMargins: {
          top: 0,
          bottom: 0.6
        }
      })
      candlestickSeriesRef.current.setData(candles)
      chartRef.current?.subscribeCrosshairMove((param) => {
      })

      chartRef.current.timeScale().fitContent()
      socketRef.current = new WebSocket(`wss://stream.binance.com:9443/ws/btcusdt@kline_${interval}`)
      socketRef.current.onmessage = function (event) {
        const { k: data } = JSON.parse(event.data)
        if (data.t < lastKline.current.time) return
        const newCandle = {
          time: data.t,
          open: parseFloat(data.o),
          high: parseFloat(data.h),
          low: parseFloat(data.l),
          close: parseFloat(data.c)
        }
        lastKline.current = newCandle
        candlestickSeriesRef.current?.update(newCandle)
      }
    }
    getPreviousKlines()

    activatedRef.current = true

    return function () {
      socketRef.current?.close()
      chartRef.current?.remove()
    }
  }

  useEffect(() => {
    setupChart();
  }, []);

  return (
    <div
      ref={chartContainerRef}
      className="candlestick-chart"
      style={{
        width: '950px',
        height: '400px',
        backgroundColor: '#04091C'
      }}
    />
  )
}
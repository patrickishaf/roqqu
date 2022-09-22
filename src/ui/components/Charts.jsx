import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { useContext, useEffect, useRef, useState } from "react";
import ToggleButton from "../atoms/ToggleButton";
import Balance from "@mui/icons-material/Balance";
import CameraAlt from "@mui/icons-material/CameraAlt";
import CandlestickChart from "@mui/icons-material/CandlestickChart";
import Reply from "@mui/icons-material/Reply";
import Settings from "@mui/icons-material/Settings";
import Timeline from "@mui/icons-material/Timeline";
import ZoomOutMap from "@mui/icons-material/ZoomOutMap";
import { ChartDataContext } from "../../contexts/ChartContext";
import SocketWrapper from "../../socket/SocketWrapper";
import Chart from 'react-apexcharts';
import options from "../../config/chart";
import { subscriptionRequest, unsubscriptionRequest } from "../../socket/utils";
import createCandleStick from "../../parser/candlestick";

export default function Charts() {
    const ws = new WebSocket('wss://stream.binance.com:9443/ws/bnbbtc@kline_1s');

    const [ chartType, setChartType ] = useState('price');
    const chartBox = useRef(null);
    const chartData = useContext(ChartDataContext);

    const [candlesticks, setCandlesticks] = useState([]);
    const [series, setSeries] = useState(chartData.series);

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
        setCandlesticks((candlesticks) => ([...candlesticks, candlestick]));
    });

    useEffect(() => {
        console.log('length of candlesticks: ', candlesticks.length);
        if (candlesticks.length % 20 === 0) {
            setSeries((series) => ([{
                name: series[0].name,
                data: candlesticks,
            }]));
        }
        if (candlesticks.length === 500) {
            ws.send(unsubscriptionRequest([
                "bnbbtc@aggTrade",
                "bnbbtc@depth"
            ], 1));
            ws.close();
        }
    }, [candlesticks])

    return (
        <Box sx={{ bgcolor: '#080F24', borderRadius: '10px 10px 0px 0px', paddingTop: '1.3rem', paddingLeft: '0.4rem', width: '100%', height: '530px' }}>
            <Stack direction="row" justifyContent="space-between" sx={{ paddingLeft: '1.4rem', paddingRight: '0.3rem', mb: '0.9rem' }}>
                <Typography>Charts</Typography>
                <Stack direction="row">
                    <Button 
                        onClick={(e) => setChartType('price')}
                        variant={ chartType === 'price' ? 'contained' : 'text'}
                        sx={{
                            bgcolor: chartType === 'price' && '#051955',
                            textTransform: 'none',
                            color: chartType === 'price' ? '#FFFFFFE8' : '#FFFFFFB9' 
                        }}>Price</Button>
                    <Button 
                        onClick={(e) => setChartType('depth')}
                        variant={ chartType === 'depth' ? 'contained' : 'text'}
                        sx={{
                            bgcolor: chartType === 'depth' && '#051955',
                            textTransform: 'none',
                            color: chartType === 'price' ? '#FFFFFFB9' : '#FFFFFFE8'
                        }}>Depth
                    </Button>
                </Stack>
            </Stack>
            <Stack direction="row" justifyContent="space-between" sx={{ paddingLeft: '1.4rem', paddingRight: '1.1rem' }}>
                <Stack direction="row">
                    <ToggleButton>4h</ToggleButton>
                    <Box sx={{ width: '0.4rem' }} />
                    <ToggleButton>
                        <CandlestickChart/>
                    </ToggleButton>
                    <Box sx={{ width: '0.4rem' }} />
                    <ToggleButton>
                        <Balance/>
                    </ToggleButton>
                    <Box sx={{ width: '0.4rem' }} />
                    <ToggleButton>
                        <Timeline/>
                    </ToggleButton>
                    <Box sx={{ width: '0.4rem' }} />
                    <IconButton>
                        <Reply/>
                    </IconButton>
                    <IconButton>
                        <Reply/>
                    </IconButton>
                </Stack>
                <Stack direction="row">
                    <ToggleButton>Save</ToggleButton>
                    <Box sx={{ width: '0.4rem' }} />
                    <ToggleButton>
                        <CameraAlt/>
                    </ToggleButton>
                    <Box sx={{ width: '0.4rem' }} />
                    <ToggleButton>
                        <Settings/>
                    </ToggleButton>
                    <Box sx={{ width: '0.4rem' }} />
                    <ToggleButton>
                        <ZoomOutMap/>
                    </ToggleButton>
                </Stack>
            </Stack>
            <Box sx={{ height: '1rem' }} />
            <Box ref={chartBox} sx={{ bgcolor: '#04091C', width: '100%', height: '350px' }}>
                <SocketWrapper>
                    <Chart options={options} series={series} type="candlestick" width={950} height={400} />
                </SocketWrapper>
            </Box>
        </Box>
    );
}
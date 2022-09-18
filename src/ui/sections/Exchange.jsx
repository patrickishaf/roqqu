import { Box, MenuItem, Select, Stack, Typography } from "@mui/material";
import { exchangeRootStyle } from "../styles/exchange";
import bitcoin from '../../assets/bitcoin.svg';
import { useState } from "react";
import BasicTile from "../atoms/BasicTile";
import { useContext } from "react";
import { ExchangeStateContext } from "../../contexts/ExchangeContext";
import CustomDivider from "../atoms/CustomDivider";
import Charts from "../components/Charts";
import OrderBook from "../components/OrderBook";
import { ChartDataProvider } from "../../contexts/ChartContext";

export default function Exchange() {
    const [pair, setPair] = useState('BTC/USDT');
    const exchangeData = useContext(ExchangeStateContext);

    function selectPair(event) {
        setPair(event.target.value);
    }

    const textStyle = {
        fontSize: '0.8rem',
        color: '#E4E4FA91',
        paddingLeft: '2.4rem',
        paddingTop: '1.4rem',
        paddingBottom: '1.4rem',
    }

    return (
        <Box sx={exchangeRootStyle}>
            <Box>
                <Stack direction="row" sx={{ borderRadius: '8px', bgcolor: '#0D152E', maxHeight: '100px' }}>
                    <Box sx={{ padding: '1.9rem 3.3rem 1.4rem 1.3rem', borderRight: 'solid 1px #91A0CE27', maxWidth: '300px' }}>
                        <Stack direction="row">
                            <Box sx={{ height: '33px', width: '33px' }}>
                                <img height="33px" src={bitcoin} alt="bitcoin icon" />
                            </Box>
                            <Stack direction="column">
                                <Select
                                    MenuProps={{
                                        sx: {
                                            border: 'none',
                                            outline: 'none',
                                            '& .MuiPaper-root': {
                                                backgroundColor: '#293E41',
                                            }
                                        }
                                    }}
                                    sx={{
                                        color: 'white', height: '22px', border: 'none', outline: 'none',
                                        '.MuiOutlinedInput-notchedOutline': { border: 'none', outline: 'none' } 
                                    }}
                                    label={pair}
                                    value={pair}
                                    onChange={selectPair}>
                                    <MenuItem value={'BTC/USDT'}>{'BTC/USDT'}</MenuItem>
                                    <MenuItem value={'ETH/USDT'}>{'ETH/USDT'}</MenuItem>
                                    <MenuItem value={'BNB/USDT'}>{'BNB/USDT'}</MenuItem>
                                    <MenuItem value={'ICP/USDT'}>{'ICP/USDT'}</MenuItem>
                                    <MenuItem value={'PLG/USDT'}>{'PLG/USDT'}</MenuItem>
                                </Select>
                                <Typography sx={{
                                    fontSize: '0.8rem',
                                    color: '#E4E4FA91',
                                    ml: '0.9rem'
                                }}>Bitcoin</Typography>
                            </Stack>
                        </Stack>
                    </Box>
                    <BasicTile title="Last Price" subtitle={exchangeData.lastPrice} greenText={true} />
                    <CustomDivider/>
                    <BasicTile title="High" subtitle={exchangeData.high} />
                    <CustomDivider/>
                    <BasicTile title="Low" subtitle={exchangeData.low} />
                    <CustomDivider/>
                    <BasicTile title="Volume" subtitle={exchangeData.volume} />
                    <CustomDivider/>
                    <BasicTile title="24h Change" subtitle={exchangeData.dailyChange} />
                </Stack>
                <Box sx={{ height: '1.7rem' }} />
                <Stack direction="row" sx={{ width: '100%' }}>
                    <Box sx={{ flexGrow: '2.7', alignSelf: 'stretch', height: '100%', mr: '0.8rem' }}>
                        <ChartDataProvider>
                            <Charts/>
                        </ChartDataProvider>
                    </Box>
                    <Box sx={{ flexGrow: '1', maxWidth: '340px' }}>
                        <OrderBook/>
                    </Box>
                </Stack>
                <Box sx={{ height: '2.6rem' }} />
                <Stack direction="row" justifyContent="space-between" sx={{ width: '100%' }}>
                    <Box sx={{ borderRadius: '5px', bgcolor: '#080F24', paddingTop: '2.1rem', paddingLeft: '0.25rem', paddingRight: '1.1rem', flexGrow: '2.6' }}>
                        <Typography sx={{ fontWeight: 500, mb: '0.8rem', ml: '1.3rem' }}>Market Trades</Typography>
                        <Stack direction='row' sx={{ bgcolor: '#04091C' }}>
                            <Box sx={{ flexGrow: 1 }}>
                                <Typography sx={textStyle}>TIME</Typography>
                            </Box>
                            <Box sx={{ flexGrow: 1 }}>
                                <Typography sx={textStyle}>PRICE(USDT)</Typography>
                            </Box>
                            <Box sx={{ flexGrow: 1 }}>
                                <Typography sx={textStyle}>AMOUNT (BTC)</Typography>
                            </Box>
                            <Box sx={{ flexGrow: 1 }}>
                                <Typography sx={textStyle}>TOTAL USDT</Typography>
                            </Box>
                        </Stack>
                    </Box>
                    <Box sx={{ width: '1.2rem' }} />
                    <Box sx={{ borderRadius: '5px', bgcolor: '#080F24', paddingTop: '2.1rem', paddingRight: '1rem', flexGrow: '1' }}>
                        <Typography sx={{ fontWeight: 500, mb: '0.8rem', ml: '1.3rem' }}>Market Trades</Typography>
                        <Box sx={{ bgcolor: '#04091C', width: '1fr', height: '4rem', ml: '0.8rem' }} />
                    </Box>
                </Stack>
            </Box>
        </Box>
    );
}
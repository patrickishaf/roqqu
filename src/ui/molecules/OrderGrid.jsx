import { Grid, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { ExchangeStateContext } from "../../contexts/ExchangeContext";
import useGetRequest from "../../hooks/useGetRequest";
import ProgressIndicator from "../atoms/ProgressIndicator";

export default function OrderGrid({ highlightColor, highlightTextColor, tag='bids' }) {
    const mockDataArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
    const exchangeData = useContext(ExchangeStateContext);
    const { data, isLoading, error } = useGetRequest('https://api.binance.com/api/v3/depth?symbol=LTCBTC');

    return (
        <Grid container sx={{ width: '100%' }}>
            {
                isLoading ? mockDataArray.map((item, index) => (
                    <Grid key={index} item xs={4} md={4}>
                        <ProgressIndicator
                            indicatorColor={highlightColor}
                            value={(item === 0 || item % 3 === 0) ? exchangeData.orderBook.price : exchangeData.orderBook.amount }
                            progress={exchangeData.progresses[index]}
                            textStyle={(index === 0 || index % 3 === 0) && { color: highlightTextColor }} />
                    </Grid>
                )) : data ? data[tag].slice(0, 18).map((array, index) => (
                    <Grid key={index} item xs={4} md={4}>
                        <ProgressIndicator
                            indicatorColor={highlightColor}
                            value={(index % 3 === 2) ? array[1] : array[0]}
                            progress={exchangeData.progresses[index]}
                            textStyle={(index === 0 || index % 3 === 0) && { color: highlightTextColor }} />
                    </Grid>
                )) : <Stack direction="column" alignItems="center" sx={{ width: '100%' }}>
                    <Typography color="error" sx={{ textAlign: 'center' }}>Error</Typography>
                    <Typography color="warning" sx={{ textAlign: 'center' }}>{error.message}</Typography>
                </Stack>
            }
        </Grid>
    )
}
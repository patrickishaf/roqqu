import { Box, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { ExchangeStateContext } from "../../contexts/ExchangeContext";
import ProgressIndicator from "../atoms/ProgressIndicator";

export default function OrderGrid({ highlightColor, highlightTextColor }) {
    const mockDataArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
    const exchangeData = useContext(ExchangeStateContext);

    // return (
    //     <Grid container gap={0}>
    //         {
    //             mockDataArray.map((data, index) => (
    //                 (index === 0 || index % 3 === 1) ? <Grid item xs={4}><ProgressIndicator progress="50%" /></Grid> : <Grid item><Box>
    //                     <Typography>{exchangeData.orderBook.amount}</Typography>
    //                 </Box></Grid>
    //             ))
    //         }
    //     </Grid>
    // );
    return (
        <Grid container sx={{ width: '100%' }}>
            {
                mockDataArray.map((item, index) => (
                    <Grid item xs={4} md={4}>
                        <ProgressIndicator
                            indicatorColor={highlightColor}
                            value={exchangeData.orderBook.price}
                            progress={exchangeData.progresses[index]}
                            textStyle={(index === 0 || index % 3 === 0) && { color: highlightTextColor }} />
                    </Grid>
                ))
            }
        </Grid>
    )
}
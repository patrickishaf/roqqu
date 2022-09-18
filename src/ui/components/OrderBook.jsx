import { Box, Divider, Stack, Typography } from "@mui/material";
import OrderGrid from "../molecules/OrderGrid";

export default function OrderBook() {
    const boxStyle = {
        paddingTop: '1rem',
        paddingBottom: '1.2rem',
        paddingLeft: '0.6rem',
        flexGrow: 1,
    };
    const titleStyle = {
        fontSize: '0.8rem',
        color: '#E4E4FA91',
        textAlign: 'center',
    };

    return (
        <Box sx={{ bgcolor: '#080F24', borderRadius: '5px', padding: '1.6rem 0.6rem 0.4rem 0.4rem' }}>
            <Typography sx={{ ml: '1rem', mb: '1.2rem', color: '#FFFFFFE8', }}>Order Book</Typography>
            <Box sx={{ bgcolor: '#04091C' }}>
                <Stack direction="row">
                    <Box sx={boxStyle}>
                        <Typography sx={titleStyle}>PRICE(USDT)</Typography>
                    </Box>
                    <Box sx={boxStyle}>
                        <Typography sx={titleStyle}>AMOUNT(BTC)</Typography>
                    </Box>
                    <Box sx={boxStyle}>
                        <Typography sx={titleStyle}>TOTAL (USDT)</Typography>
                    </Box>
                </Stack>
                <OrderGrid highlightColor='#F07A642F' highlightTextColor='#FF8686'/>
                <Box sx={{ height: '1.5rem' }} />
                <Divider sx={{ background: '#91A0CE27' }} />
                <Typography sx={{ textAlign: 'center', mt: '0.8rem', mb: '0.9rem' }}>128299.304781 USDT</Typography>
                <Divider sx={{ background: '#91A0CE27' }} />
                <Box sx={{ height: '0.9rem' }} />
                <OrderGrid highlightColor='#13A5831C' highlightTextColor='#13A583' />
                <Box sx={{ height: '1.3rem' }} />
            </Box>
        </Box>
    )
}
import { Box, Typography } from "@mui/material";

export default function ProgressIndicator({ progress, value, containerStyle, textStyle, indicatorColor }) {
    return (
        <Box sx={{ position: 'relative', width: '100%', height: '24px', ...containerStyle }}>
            <Box sx={{ bgcolor: indicatorColor ?? '#F07A642F', height: '24px', width: progress, position: 'absolute' }}></Box>
            <Box sx={{ paddingTop: '0.25rem' }}>
                <Typography sx={{ fontSize: '0.8rem', textAlign: 'center', ...textStyle }}>{value}</Typography>
            </Box>
        </Box>
    )
}
import { Box, Typography } from "@mui/material";

export default function BasicTile({ title, subtitle, greenText=false }) {
    return (
        <Box sx={{ padding: '1.5rem 3.3rem 1.9rem 2rem', flexGrow: '1' }}>
            <Typography sx={{ fontSize: '0.8rem', color: '#E4E4FA91', textAlign: 'end', mb: '0.3rem' }}>{title}</Typography>
            <Typography sx={{ fontSize: '1rem', fontWeight: 900, color: greenText ? '#1AC9A0' : 'white', textAlign: 'end' }}>{subtitle}</Typography>
        </Box>
    );
}
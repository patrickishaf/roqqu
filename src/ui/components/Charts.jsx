import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { useRef, useState } from "react";
import ToggleButton from "../atoms/ToggleButton";
import Balance from "@mui/icons-material/Balance";
import CameraAlt from "@mui/icons-material/CameraAlt";
import CandlestickChart from "@mui/icons-material/CandlestickChart";
import Reply from "@mui/icons-material/Reply";
import Settings from "@mui/icons-material/Settings";
import Timeline from "@mui/icons-material/Timeline";
import ZoomOutMap from "@mui/icons-material/ZoomOutMap";
import CustomChart from "./CustomChart";

export default function Charts() {

    const [chartType, setChartType] = useState('price');
    const chartBox = useRef(null);

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
                <CustomChart />
            </Box>
        </Box>
    );
}
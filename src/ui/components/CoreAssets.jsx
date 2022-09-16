import { Box, Grid, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { CoreAssetsStateContext } from "../../contexts/CoreAssetsContext";
import { imageBoxStyle, assetTileStyle } from "../styles/coreAssets";

export default function CoreAssets() {
    const coreAssets = useContext(CoreAssetsStateContext);

    return (
        <Box>
            <Grid container columnSpacing="3.7vw" rowSpacing="1.8vw">
                {
                    coreAssets.map((asset, index) => (
                        <Grid item xs={12} md={6}>
                            <Box sx={assetTileStyle}>
                                <Stack direction="row" alignItems="center" sx={{ width: '100%' }}>
                                    <Box sx={imageBoxStyle}>
                                        <img src={asset.img} alt="crypto asset" />
                                    </Box>
                                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ width: '100%' }}>
                                        <Box>
                                            <Typography sx={{ fontSize: '1rem', fontWeight: 900, color: '#FFFFFFE8' }}>{asset.name}</Typography>
                                            <Typography sx={{ fontSize: '0.9rem', fontWeight: 900, color: '#FFFFFFE8' }}>{asset.symbol}</Typography>
                                        </Box>
                                        <Box>
                                            <Typography sx={{ fontWeight: 900, textAlign: 'end' }}>{asset.rate}</Typography>
                                            <Typography sx={{ fontSize: '0.8rem', color: '#1AC9A0', letterSpacing: '0', textAlign: 'end' }}>{asset.delta}</Typography>
                                        </Box>
                                    </Stack>
                                </Stack>
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    )
}
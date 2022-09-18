import { Box, Button, Chip, Stack, Tab, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { HomeStateContext } from "../../contexts/HomeContext";
import { buttonStyle, dateStyle, rootStyle, sidebarStyle, subtitleStyle, tabLabelStyle, textBoxStyle, titleStyle, walletBalanceBoxStyle, walletBalanceTextStyle, welcomeCardImgBoxStyle, welcomeCardStyle } from "../styles/home";
import { ArrowForward } from '@mui/icons-material';
import welcomecardimg from '../../assets/welcomecardimg.svg';
import ActivityTile from "../atoms/ActivityTile";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import CoreAssets from "../components/CoreAssets";

export default function Home() {
    const homeState = useContext(HomeStateContext);
    const [selectedTabIndex, setSelectedTabIndex] = useState("1");

    function switchToTab(event, value) {
        setSelectedTabIndex(value);
    }

    return (
        <Box sx={rootStyle}>
            <Stack direction='row' justifyContent='space-between'>
                <Box>
                    <Box sx={welcomeCardStyle}>
                        <Stack direction="row" justifyContent="space-between">
                            <Box sx={textBoxStyle}>
                                <Typography sx={dateStyle}>{homeState.date}</Typography>
                                <Typography sx={titleStyle}>Welcome to Roqqu's Decentralized Exchange</Typography>
                                <Typography sx={subtitleStyle}>With an easy-to-use interface, we provide industry-leading security and deep liquidity</Typography>
                                <Box>
                                    <Button variant="contained" endIcon={<ArrowForward/>} sx={buttonStyle}>Learn more</Button>
                                </Box>
                            </Box>
                            <Box sx={welcomeCardImgBoxStyle}>
                                <img src={welcomecardimg} alt="decentralized exchange welcome" />
                            </Box>
                        </Stack>
                    </Box>
                    <Box>
                        <TabContext value={selectedTabIndex} >
                            <Box sx={{ borderBottom: 1, borderColor: '#91A0CE1A' }}>
                                <TabList onChange={switchToTab} aria-label="lab API tabs example">
                                    <Tab sx={tabLabelStyle} label="Core Assets" value="1" />
                                    <Tab sx={tabLabelStyle} label="Top Gainers" value="2" />
                                    <Tab sx={tabLabelStyle} label="Top Losers" value="3" />
                                    <Tab sx={tabLabelStyle} label="New" value="4" />
                                </TabList>
                            </Box>
                            <TabPanel value="1" sx={{ paddingLeft: '0px' }}>
                                <CoreAssets/>
                            </TabPanel>
                            <TabPanel value="2">Item Two</TabPanel>
                            <TabPanel value="3">Item Three</TabPanel>
                            <TabPanel value="4">Item Four</TabPanel>
                        </TabContext>
                    </Box>
                </Box>
                <Box sx={sidebarStyle}>
                    <Stack direction="column" alignItems="center" justifyContent="space-between" sx={walletBalanceBoxStyle}>
                        <Typography sx={walletBalanceTextStyle}>WALLET BALANCE</Typography>
                        <Chip sx={{ bgcolor: '#D17300', mt: '1.7rem' }} label={homeState.walletBalance.symbol} />
                        <Typography sx={{ mt: '0.9rem', mb: '0.4rem', fontSize: '1.9rem', fontWeight: 900 }}>{homeState.walletBalance.btc}</Typography>
                        <Typography sx={{ mb: '1.8rem' }}>{homeState.walletBalance.usd}</Typography>
                        <Button variant="contained" sx={{ bgcolor: '#0165FF', textTransform: 'none', fontSize: '1rem', fontWeight: 900 }}>Withdraw</Button>
                    </Stack>
                    <Typography sx={{ mt: '3rem', mb: '1.3rem', fontSize: '1.1rem', fontWeight: 500 }}>Latest Activites</Typography>
                    {
                        homeState.activities.map((activity, index) => (<ActivityTile key={index} activity={activity} index={index} />))
                    }
                </Box>
            </Stack>
        </Box>
    );
}
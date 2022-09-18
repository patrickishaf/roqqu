import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Stack from "@mui/material/Stack";
import SvgIcon from "@mui/material/SvgIcon";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Collapse from '@mui/material/Collapse';
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import NotificationsNoneOutlined from '@mui/icons-material/NotificationsNoneOutlined';
import { actionStyle, actionSpacingStyle, notifAvatarStyle, rootStyle, appbarStyle } from "../styles/main";
import { useEffect, useState } from "react";
import { ReactComponent as barchart } from '../../assets/barchart.svg';
import { ReactComponent as wallet } from '../../assets/wallet.svg';
import { ReactComponent as book } from '../../assets/book.svg';
import { ReactComponent as pulse } from '../../assets/pulse.svg';
import { ReactComponent as fire } from '../../assets/fire.svg';
import { ReactComponent as settings } from '../../assets/settingsalt.svg';
import { ReactComponent as bell } from '../../assets/notification.svg';
import GridView from "@mui/icons-material/GridView";
import { Icon } from "@mui/material";

const drawerItems = [
    {
        component: null,
        text: 'Home',
        childRouteName: '',
    },
    {
        component: barchart,
        text: 'Exchange',
        childRouteName: 'exchange',
    },
    {
        component: wallet,
        text: 'Wallets',
    },
    {
        component: book,
        text: 'Prices',
    },
    {
        component: pulse,
        text: 'Activities',
    },
    {
        component: fire,
        text: 'Promotions',
    },
    {
        component: settings,
        text: 'Settings',
    },
    {
        component: bell,
        text: 'Notifications',
    },
];

export default function Main() {
    const [ drawerIsOpen, setDrawerIsOpen] = useState(false);
    const [activeLinkIndex, setActiveLinkIndex] = useState(0);
    const navigateTo = useNavigate();
    let location = useLocation();

    /**
     * This function changes the active nav drawer item when the url changes.
     * In situations where the user enters the link by themselves or when they 
     * use the back button, this functi will update the active navbar item
     */
    useEffect(() => {
        if (location.pathname === '/') {
            setActiveLinkIndex(0);
        } else if (location.pathname === '/exchange') {
            setActiveLinkIndex(1);
        }
    }, [location]);

    const activeLinkStyle = {
        bgcolor: '#078CA4ED',
        borderRadius: '8px',
    };

    function openDrawer() {
        setDrawerIsOpen(true);
    }

    function closeDrawer() {
        setDrawerIsOpen(false);
    }

    function handleLinkClick(routename, index) {
        navigateTo(routename);
        setActiveLinkIndex(index);
    }

    return (
        <Box sx={rootStyle}>
            <AppBar sx={appbarStyle}>
                <Toolbar>
                    <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{ width: '100%' }}>
                        <Typography>roqqu</Typography>
                        <Box>
                            <Stack direction='row' alignItems="center">
                                <Badge variant='dot' color="secondary" invisible={false}>
                                    <Avatar sx={notifAvatarStyle}>
                                        <NotificationsNoneOutlined/>
                                    </Avatar>
                                </Badge>
                                <Box sx={actionSpacingStyle}/>
                                <Avatar sx={actionStyle}></Avatar>
                            </Stack>
                        </Box>
                    </Stack>
                </Toolbar>
            </AppBar>
            <Stack direction="row" justifyContent="flex-start" sx={{ width: '100%' }}>
                <Box sx={{ position: 'fixed', left: 0, top: 0, bgcolor: '#080F24', zIndex: '1', opacity: 1 }}>
                    <Collapse orientation="horizontal" collapsedSize={89} in={drawerIsOpen} onMouseEnter={openDrawer} onMouseLeave={closeDrawer}>
                        <Box sx={{ width: '250px', height: '100vh' }}>
                            <Box sx={{ height: '4.2rem' }}/>
                            <List sx={{ paddingLeft: '1.1rem' }}>
                                {drawerItems.map((item, index) => (
                                    <Box key={index} sx={{ mr: '1.4rem', mb: '32px', ...index === activeLinkIndex && activeLinkStyle, width : drawerIsOpen ? '200px' : '48px', cursor: 'pointer' }} onClick={() => handleLinkClick(item.childRouteName, index)}>
                                        <Stack direction="row" alignItems="center" sx={{ padding: '10px 13px 4px 13px'}}>
                                            <Box sx={{ mr: '22px' }}>
                                            {
                                                index === 0 ? <Icon color="red"><GridView/></Icon> : <SvgIcon component={item.component}/>
                                            }
                                            </Box>
                                            { drawerIsOpen && <Typography sx={{ fontSize: '0.9rem', color: index === activeLinkIndex ? 'white' : '#E4E4FA91' }}>{item.text}</Typography>}
                                        </Stack>
                                    </Box>
                                ))}
                            </List>
                        </Box>
                    </Collapse>
                </Box>
                <Box sx={{ width: 89 }} />
                <Outlet/>
            </Stack>
            
        </Box>
    )
}
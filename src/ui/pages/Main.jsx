import { AppBar, Avatar, Badge, Box, Stack, Toolbar, Typography } from "@mui/material"
import { Outlet } from "react-router-dom";
import { NotificationsNoneOutlined } from '@mui/icons-material';
import { actionStyle, actionSpacingStyle, notifAvatarStyle, rootStyle, appbarStyle } from "../styles/main";

export default function Main() {
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
            <Outlet/>
        </Box>
    )
}
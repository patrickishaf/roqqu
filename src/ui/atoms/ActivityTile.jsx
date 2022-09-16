import { Avatar, Box, Stack, Typography } from "@mui/material";
import { ArrowUpward, ArrowDownward, SyncAlt } from '@mui/icons-material';
import { avatarStyle, rootStyle } from "../styles/activityTile";

export default function ActivityTile({ activity }) {

    const typeToiconMap = {
        withdrawal: <ArrowUpward sx={{ color: '#BFC6DE91' }} />,
        exchange: <SyncAlt sx={{ color: '#BFC6DE91' }} />,
        deposit: <ArrowDownward sx={{ color: '#BFC6DE91' }} />
    };

    return (
        <Box sx={rootStyle}>
            <Stack direction="row" sx={{ width: '100%' }}>
                <Avatar sx={avatarStyle}>
                    {typeToiconMap[activity.type]}
                </Avatar>
                <Stack direction="row" justifyContent="space-between" sx={{ width: '100%' }}>
                    <Box>
                        <Typography sx={{ fontSize: '0.9rem', fontWeight: 900, }}>{activity.title}</Typography>
                        <Typography sx={{ fontSize: '0.9rem', fontWeight: 900, color: '#13A583', mt: '0.3rem', mb: '0.3rem' }}>{activity.status}</Typography>
                        <Typography sx={{ fontSize: '0.9rem', fontWeight: 900, color: '#BFC6DECB' }}>{activity.amount}</Typography>
                    </Box>
                    <Typography sx={{ fontSize: '0.7rem', color: '#91A0CED8' }}>{activity.date}</Typography>
                </Stack>
            </Stack>
        </Box>
    )
}
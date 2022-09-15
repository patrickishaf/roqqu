import { Box, Typography } from "@mui/material"
import { Outlet } from "react-router-dom"

export default function Main() {
    return (
        <Box>
            <Typography>This is the Main Route</Typography>
            <Outlet/>
        </Box>
    )
}
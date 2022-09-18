import { Box, Drawer } from "@mui/material";
import { useState } from "react";

export default function DrawerWrapper() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <Drawer 
            PaperProps={{ sx: { backgroundColor: '#080F24'} }}
            open={isOpen}
            onClose={() => setIsOpen(false)}>
                <Box variant="permanent" sx={{ width: '100px' }}/>
        </Drawer>
    );
}
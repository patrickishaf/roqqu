import { Button } from "@mui/material";

export default function ToggleButton({ children }) {
    return (
        <Button variant="contained" sx={{ bgcolor: '#21293E41', textTransform: 'none' }}>
            {children}
        </Button>
    );
}
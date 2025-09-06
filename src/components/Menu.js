import { Box, Button, Typography, Link } from "@mui/material";

function Menu() {
    return (
        <Box sx={{
            border: '2px solid black',
            width: '200px',
            height: '200px'
        }}>
            <Button
                sx={{
                    backgroundImage: 'url(/images/logo.jpg)',
                    borderRadius: '100%',
                    backgroundSize: 'cover',
                    backgroundPosition: '-2px center',
                    width: '70px',
                    height: '70px'
                }}>

            </Button>
            <Typography>Bremdfam's Site</Typography>
            <Link href='/'>Home</Link>
            <Link href='/'>About Me</Link>
            <Link href='/'>Projects</Link>
            <Link href='/'>LinkedIn</Link>
            <Link href='https://github.com/Bremdfam' target='_blank'>Github</Link>
        </Box>
    );
}

export default Menu;
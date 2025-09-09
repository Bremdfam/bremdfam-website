'use client'
import { useState } from "react";
import { Box, Button, Typography, Collapse } from "@mui/material";
import Link from 'next/link'

function Menu() {
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(prev => !prev);
    };

    return (
        <Box
            sx={{
                position: 'absolute',
                zIndex: 9999,
                border: '2px solid black',
                width: '200px',
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1
            }}
        >
            <Button
                onClick={handleToggle}
                aria-label="Toggle Menu"
                sx={{
                    backgroundImage: 'url(/images/logo.jpg)',
                    borderRadius: '100%',
                    backgroundSize: 'cover',
                    backgroundPosition: '-2px center',
                    width: '70px',
                    height: '70px'
                }}
            />
            <Collapse in={open}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 1,
                        mt: 2
                    }}
                >
                    <Typography>Bremdfam's Site</Typography>
                    <Link href='/'>Home</Link>
                    <Link href='/AboutMe'>About Me</Link>
                    <Link href='/'>Projects</Link>
                    <Link href='/'>LinkedIn</Link>
                    <Link href='https://github.com/Bremdfam' target='_blank'>Github</Link>
                </Box>
            </Collapse>
        </Box>
    );
}

export default Menu;
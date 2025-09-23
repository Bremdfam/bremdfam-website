'use client'
import { useState } from "react";
import { Box, Button, Collapse, GlobalStyles } from "@mui/material";
import Link from 'next/link'

function Menu() {
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(prev => !prev);
    };

    return (
        <>
            <GlobalStyles styles={{
                '@keyframes flash': {
                    '0%': { opacity: 1 },
                    '50%': { opacity: 0.75 },
                    '100%': { opacity: 1 }
                }
            }} />
            <Box
                sx={{
                    width: {
                        md: '250px'
                    },
                    position: 'absolute',
                    zIndex: 9999,
                    backgroundColor: open ? 'orange' : 'none',
                    p: 2,
                    display: 'flex',
                    gap: 1,
                    transition: 'background-color 0.3s ease-in-out',
                    margin: '50px',
                    borderRadius: '20px'
                }}
            >
                <Button
                    onClick={handleToggle}
                    aria-label="Toggle Menu"
                    aria-expanded={open}
                    sx={{
                        width: '70px',
                        height: '70px',
                        backgroundImage: 'url(/images/logo.jpg)',
                        borderRadius: '100%',
                        backgroundSize: 'cover',
                        backgroundPosition: '-2px center',
                        animation: open ? 'none' : 'flash 2.5s infinite'
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
                        <Link href='/'>Bremdfam's Site</Link>
                        <Link href='/AboutMe'>About Me</Link>
                        <Link href='/Projects'>Projects</Link>
                        <Link href='https://www.linkedin.com/in/brendan-bremdfam-piper/'>LinkedIn</Link>
                        <Link href='https://github.com/Bremdfam' target='_blank' >Github</Link>
                    </Box>
                </Collapse>
            </Box>
        </>
    );
}

export default Menu;
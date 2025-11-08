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
                    position: 'fixed',
                    zIndex: 9999,
                    backgroundColor: open ? 'rgb(253, 237, 224)' : 'none',
                    p: 2,
                    display: 'flex',
                    transition: 'background-color 0.3s ease-in-out',
                    borderRadius: '20px',

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
                            width: "150px",
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: 1,
                            '& a': {
                                position: 'relative',
                                color: 'black',
                                textDecoration: 'none',
                                display: 'inline-block',
                                paddingBottom: '4px',
                                transition: 'color 0.3s ease-in-out',

                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    left: '50%',
                                    bottom: 0,
                                    transform: 'translateX(-50%) scaleX(0)',
                                    transformOrigin: 'center',
                                    width: '100%',
                                    height: '2px',
                                    backgroundColor: '#4169E1',
                                    transition: 'transform 0.3s ease-in-out',
                                },

                                '&:hover': {
                                    color: '#EB5A00',
                                    '&::after': {
                                        transform: 'translateX(-50%) scaleX(1)',
                                    },
                                },
                            }
                        }}
                    >
                        <Link href='/'>Bremdfam's Site</Link>
                        <Link href='/Projects'>Projects</Link>
                        <Link href='https://github.com/Bremdfam' target='_blank' >Github</Link>
                        <Link href='/Resume'>Resume</Link>
                        <Link href='https://www.linkedin.com/in/brendan-bremdfam-piper/' target='_blank'>LinkedIn</Link>
                    </Box>
                </Collapse>
            </Box>
        </>
    );
}

export default Menu;
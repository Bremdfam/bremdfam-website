import { Box, Typography, Button, ButtonGroup } from "@mui/material";
import Link from "next/link";

function Banner({ title }) {
    return (
        <Box
            sx={{
                width: "100vw",
                height: "30vh",
                background: `linear-gradient(90deg, rgba(235, 90, 0, 1) 0%, rgba(255, 255, 255, 0.2) 65%, rgba(235, 90, 0, 1) 100%)`,
                position: "relative",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: 20,
            }}
        >

            {/* Content Box */}
            <Box
                sx={{
                    backgroundColor: "rgb(253, 237, 224)",
                    borderRadius: 2,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    padding: 2,
                    zIndex: 1,
                    width: "25%"
                }}
            >
                <Typography variant="h5" sx={{ fontWeight: "bold", color: "#EB5A00", mb: 1 }}>
                    Bremdfam's Website
                </Typography>
                <Typography variant="body1" sx={{ color: "#2C2C2C", mb: 1 }}>
                    {title}
                </Typography>
                <Typography variant="subtitle2" sx={{ fontStyle: "italic", color: "#555", mb: 2 }}>
                    Projects, Code, and Me
                </Typography>
                <ButtonGroup>
                    <Link href="/Projects" passHref>
                        <Button
                            sx={{
                                backgroundColor: "#EB5A00",
                                color: "#fff",
                                "&:hover": {
                                    backgroundColor: "#d14f00",
                                },
                            }}
                        >
                            Projects
                        </Button>
                    </Link>
                    <Button
                        component="a"
                        href="https://github.com/Bremdfam"
                        target="_blank"
                        sx={{
                            backgroundColor: "#EB5A00",
                            color: "#fff",
                            "&:hover": {
                                backgroundColor: "#d14f00",
                            },
                        }}
                    >
                        GitHub
                    </Button>
                </ButtonGroup>
            </Box>

            {/* Profile Picture Wrapper with Animated Border */}
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    right: "30%",
                    transform: "translate(-50%, -50%)",
                    width: "130px",
                    height: "170px",
                    borderRadius: "50%",
                    padding: "6px",
                    background: "linear-gradient(270deg, #EB5A00, #FFB366, #001F3F, #EB5A00)",
                    backgroundSize: "600% 600%",
                    animation: "borderFlow 6s linear infinite",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 1,
                }}
            >
                {/* Centered Profile Image */}
                <Box
                    sx={{
                        width: "100%",
                        height: "100%",
                        backgroundImage: "url('/images/pfp-bgcolor.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: "50%",
                    }}
                />
            </Box>
        </Box>
    );
}

export default Banner;
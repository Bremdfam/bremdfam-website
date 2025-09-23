import { Box, Typography, Button, ButtonGroup } from "@mui/material";

function Banner({ title }) {
    return (
        <Box
            sx={{
                width: "100vw",
                height: "30vh",
                background: `linear-gradient(90deg, rgba(235, 90, 0, 1) 0%, rgba(255, 255, 255, 0) 65%, rgba(235, 90, 0, 1) 100%)`,
                position: 'relative'
            }}
        >
            <Box
                sx={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: "white",
                }}
            >
                <Typography>Bremdfam's Website</Typography>
                <Typography>{title}</Typography>
                <ButtonGroup>
                    <Button component='a' href="/Projects">
                        Projects
                    </Button>
                    <Button component='a' href="https://github.com/Bremdfam" target="_blank">
                        Github
                    </Button>
                </ButtonGroup>
            </Box>
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "62%",
                    transform: "translate(-50%, -50%)",
                    backgroundImage: "url('/images/pfp-bgcolor.png')",
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    border: "solid 2px black",
                    borderRadius: "50%",
                    width: "150px",
                    height: "90%",
                }}
            />
        </Box>
    );
}

export default Banner;
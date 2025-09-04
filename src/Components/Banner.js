import { Box, Typography, Button, ButtonGroup, Link } from "@mui/material";

function Banner({ title }) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "25%",
        background:
          "linear-gradient(90deg,rgba(235, 90, 0, 1) 0%, rgba(255, 255, 255, 1) 65%, rgba(235, 90, 0, 1) 100%)",
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
          <Button>
            <Link href="#">Projects</Link>
          </Button>
          <Button>
            <Link href="https://github.com/Bremdfam" target="_blank">
              Github
            </Link>
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
}

export default Banner;
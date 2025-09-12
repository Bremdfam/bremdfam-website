import { Typography, Grid, Button, Box } from "@mui/material";
import Banner from "../components/Banner";
import Menu from "../components/Menu";
import ProjectCard from "../components/ProjectCard";
import projectCardData from "@/components/data/ProjectCardData";

export default function Home() {
  return (
    <>
      <Menu />
      <Banner title="Home" />
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>

        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
          width: '75%',
          border: '2px solid black',
          textAlign: 'center'
        }}>
          <Typography variant="h4" component="h1">About Me</Typography>
          <Typography variant="body1">
            Hello, I'm <strong>Brendan Piper</strong>, a game programming student at <strong>NAIT</strong> with a strong interest in building interactive digital experiences. Online, I go by <strong>"Bremdfam"</strong>—welcome to my site.
          </Typography>
          <Typography variant="body1">
            My foundation lies in <strong>JavaScript</strong> and web development, where I've created dynamic, user-focused websites. I'm currently expanding my expertise into languages like <strong>Python</strong> and <strong>C</strong>, and exploring new domains such as <strong>AI</strong>, <strong>bot development</strong>, and <strong>game design</strong>.
          </Typography>
          <Typography variant="body1">
            This site showcases my ongoing journey—projects, experiments, and the skills I'm cultivating along the way. Thank you for visiting, and I hope you find something here that inspires or intrigues you.
          </Typography>
        </Box>

        <Typography>Featured Projects</Typography>
        <Grid container spacing={2}>
          {[0, 1, 2].map((i) => (
            <Grid key={i}>
              <ProjectCard {...projectCardData[i]} />
            </Grid>
          ))}
        </Grid>
        <Button component='a' href="/">See More</Button>
      </Box>
    </>
  );
}

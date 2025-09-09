import { Typography, Grid, Button } from "@mui/material";
import Banner from "../components/Banner";
import Menu from "../components/Menu";
import ProjectCard from "../components/ProjectCard";
import projectCardData from "@/components/data/ProjectCardData";

export default function Home() {
  return (
    <>
      <Menu />
      <Banner title="Home" />
      <Typography>About Me</Typography>
      <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
      <Typography>Featured Projects</Typography>
      <Grid container spacing={2}>
        {[0, 1, 2].map((i) => (
          <Grid key={i}>
            <ProjectCard {...projectCardData[i]} />
          </Grid>
        ))}
      </Grid>
      <Button component='a' href="/">See More</Button>
    </>
  );
}

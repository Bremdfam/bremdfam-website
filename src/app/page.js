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
        alignItems: 'center',
        gap: '10px'
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
          width: '75%',
          border: '1px solid black',
          textAlign: 'center',
          marginTop: '10px',
          padding: '5px',
          backgroundColor: 'rgba(252, 116, 32, 1)',
          borderRadius: '5px',
        }}>
          <Typography variant="h4" sx={{
            fontFamily: "serif",
            display: "inline-block",
            backgroundImage: "linear-gradient(blue, blue)",
            backgroundSize: "100% 2px",
            backgroundPosition: "0 100%",
            backgroundRepeat: "no-repeat",
          }}>
            About Me
          </Typography>
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

        <Box sx={{
          marginBottom: '20px',
          padding: '20px',
          backgroundColor: "rgba(255, 98, 0, 1)",
          borderRadius: '2px',
          border: '1px solid black'
        }}>
          <Box sx={{
            position: 'relative',
            height: '60px',
          }}>
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            >
              <Typography variant="h4" sx={{
                fontFamily: "serif",
                display: "inline-block",
                backgroundImage: "linear-gradient(blue, blue)",
                backgroundSize: "100% 2px",
                backgroundPosition: "0 100%",
                backgroundRepeat: "no-repeat",
              }}>
                Featured Projects
              </Typography>
            </Box>

            <Box
              sx={{
                position: 'absolute',
                top: 0,
                right: 0,
              }}
            >
              <Button
                component="a"
                href="/Projects"
                sx={{
                  backgroundColor: "#4169E1",
                  color: "#fff",
                  boxShadow: "1.5px 1.5px 1.5px 1.5px rgba(43, 42, 42, 1)",
                  "&:hover": {
                    backgroundColor: "#3560dfff",
                    boxShadow: "1.5px 1.5px 1.5px 1.5px rgba(0, 0, 0, 1)",
                  },
                }}
              >
                See More
              </Button>
            </Box>
          </Box>

          <Grid container spacing={2}>
            {/* Change the map index numbers to display different projects. */}
            {[0, 1, 3].map((i) => (
              <Grid key={i}>
                <ProjectCard {...projectCardData[i]} />
              </Grid>
            ))}
          </Grid>
        </Box>

      </Box>
    </>
  );
}

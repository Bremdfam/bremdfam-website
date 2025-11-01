'use client'
import Banner from "@/components/Banner";
import Menu from "@/components/Menu";
import projectCardData from "@/components/data/ProjectCardData";
import { useState } from 'react';
import ProjectCard from "@/components/ProjectCard";
import { Box, Checkbox, Grid, Typography, Tooltip } from "@mui/material";
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';

export default function Page() {
    const uniqueTags = [...new Set(projectCardData.flatMap(project => project.tags))].sort((a, b) => a.localeCompare(b));;
    const [selectedTags, setSelectedTags] = useState([]);
    const handleTagToggle = (tag) => {
        setSelectedTags(prev =>
            prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
        );
    };
    const filteredProjects = selectedTags.length === 0
        ? projectCardData
        : projectCardData.filter(project =>
            project.tags.some(tag => selectedTags.includes(tag))
        );


    return (
        <>
            <Menu />
            <Banner title={"Projects"} />
            <Box sx={{
                display: 'flex',
                padding: "2% 5% 0 5%"
            }}>
                <Box sx={{
                    flexGrow: '1',
                    // border: '2px solid black'
                }}>
                    <Grid container spacing={2}>
                        {filteredProjects.map((data, i) => (
                            <Grid key={i}>
                                <ProjectCard {...data} />
                            </Grid>
                        ))}
                    </Grid>

                </Box>

                {/* Tag Content Box */}
                <Box sx={{
                    height: '100%',
                    border: "2px solid orange",
                    minWidth: "200px",
                    pt: "5px"
                }}>

                    <Typography display={'flex'} justifyContent={'center'} variant="h5">
                        Tags
                        <Tooltip placement="top" arrow title="Results include items that match at least one of the selected tags.">
                            <InfoOutlineIcon sx={{ ml: 1, cursor: 'pointer' }} />
                        </Tooltip>
                    </Typography>
                    {uniqueTags.map(tag => (
                        <Box key={tag} sx={{
                            display: "flex",
                            alignItems: "center",
                            color: "rgba(235, 90, 0, 1)",
                            '&:hover': {
                                backgroundColor: "rgba(235, 90, 0, 0.1)",
                            },
                            '&:hover .tag-label': {
                                fontWeight: 'bold',
                            },
                        }}>
                            <Checkbox
                                checked={selectedTags.includes(tag)}
                                onChange={() => handleTagToggle(tag)}
                            />
                            <Typography className="tag-label" mr={'10px'}>
                                {tag}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </>
    );
}
'use client'
import Banner from "@/components/Banner";
import Menu from "@/components/Menu";
import projectCardData from "@/components/data/ProjectCardData";
import { useState } from 'react';
import ProjectCard from "@/components/ProjectCard";
import { Box, Checkbox, Grid, Typography } from "@mui/material";

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
            <Box display={'flex'} >
                <Box sx={{
                    flexGrow: '1',
                    border: '2px solid black'
                }}>
                    <Grid container spacing={2}>
                        {filteredProjects.map((data, i) => (
                            <Grid key={i}>
                                <ProjectCard {...data} />
                            </Grid>
                        ))}
                    </Grid>

                </Box>
                <Box sx={{
                    border: "2px solid orange",
                    height: '100%',
                }}>
                    <Typography display={'flex'} justifyContent={'center'} variant="h5">Tags</Typography>
                    {uniqueTags.map(tag => (
                        <Box key={tag} display="flex" alignItems="center">
                            <Checkbox
                                checked={selectedTags.includes(tag)}
                                onChange={() => handleTagToggle(tag)}
                            />
                            <Typography>{tag}</Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </>
    );
}
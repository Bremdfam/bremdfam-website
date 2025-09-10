'use client'
import Banner from "@/components/Banner";
import Menu from "@/components/Menu";
import projectCardData from "@/components/data/ProjectCardData";
import { useState } from 'react';
import ProjectCard from "@/components/ProjectCard";
import { Box, Checkbox, Grid, Typography } from "@mui/material";

export default function page() {
    const uniqueTags = [...new Set(projectCardData.flatMap(project => project.tags))];
    const [selectedTags, setSelectedTags] = useState([]);
    const handleTagToggle = (tag) => {
        setSelectedTags((prev) =>
            prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
        );
    };
    const filteredProjects = selectedTags.length === 0
        ? projectCardData
        : projectCardData.filter(project =>
            selectedTags.every(tag => project.tags.includes(tag))
        );


    return (
        <>
            <Menu />
            <Banner title={"Projects"} />
            <Box display={'flex'}>
                <Box>
                    <Grid container spacing={2}>
                        {filteredProjects.map((project) => (
                            <Grid key={project.id}>
                                <ProjectCard {...project} />
                            </Grid>
                        ))}
                    </Grid>

                </Box>
                <Box mb={2}>
                    {uniqueTags.map((tag) => (
                        <Box key={tag} display="flex" alignItems="center" mb={1}>
                            <Typography variant="body2" mr={1}>{tag}</Typography>
                            <Checkbox
                                checked={selectedTags.includes(tag)}
                                onChange={() => handleTagToggle(tag)}
                            />
                        </Box>
                    ))}
                </Box>
            </Box>

        </>
    );
}
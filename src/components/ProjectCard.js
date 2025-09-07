import { Box, Typography, Link } from "@mui/material";

export default function ProjectCard({ title, description, img, link }) {
    return (
        <Box
            sx={{
                width: 300,
                height: 300,
                position: 'relative',
                overflow: 'hidden',
                borderRadius: 2,
                backgroundImage: `${img}`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: 3,
                '&:hover .infoBox': {
                    transform: 'translateY(0)',
                },
            }}
        >
            <Box
                className="infoBox"
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    height: '65%',
                    backgroundColor: 'white',
                    color: 'black',
                    justifyContent: 'center',
                    alignItems: 'center',
                    transform: 'translateY(80%)',
                    transition: 'transform 0.4s ease-in-out',
                    padding: 2,
                }}
            >
                <Link variant='h4' href={link} target='_blank'>{title} &gt;&gt;&gt;</Link>
                <Typography variant="body2">{description}</Typography>
            </Box>
        </Box>
    );
}
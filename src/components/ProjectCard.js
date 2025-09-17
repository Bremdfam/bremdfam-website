import { Box, Typography, Link } from "@mui/material";

export default function ProjectCard({ title, description, img, link, tags }) {
    const isUnderDevelopment = tags?.includes("Under Development");

    return (
        <Box
            sx={{
                width: 250,
                height: 250,
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
            {isUnderDevelopment ? (
                // Render grey box when a project is under construction
                <>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(128, 128, 128, 0.5)',
                            zIndex: 1,
                        }} />
                    <Typography sx={{
                        position: 'absolute',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        color: 'black',
                        zIndex: '2',
                    }}
                        variant="h4" >
                        Under Development
                    </Typography>
                </>
            ) : null}
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
                    textAlign: 'center',
                    transform: 'translateY(75%)',
                    transition: 'transform 0.4s ease-in-out',
                }}
            >
                <Box sx={{
                    //padding: '6px 0px 10px 0px'
                }}>
                    <Link variant='h5' underline="hover" color="black" href={link} target='_blank'>
                        {title} &gt;&gt;
                    </Link>
                </Box>

                <Typography variant="body2" textAlign={'left'} paddingLeft={'5%'}>{description}</Typography>
            </Box>
        </Box>
    );
}
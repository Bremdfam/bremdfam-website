import Box from '@mui/material/Box';
import { Typography, Button, ButtonGroup } from '@mui/material';

function Banner({ title }) {
    return (
        <Box sx={{
            width: '100%',
            height: '25%',
            backgroundColor: 'orange'
        }}>
            <Box sx={{
                backgroundColor: 'white',
                width: '100px',
                height: '100px'
            }}>
                <Typography>
                    Bremdfam's Website
                </Typography>
                <Typography>
                    {title}
                </Typography>
                <ButtonGroup>
                    <Button>
                        Projects
                    </Button>
                    <Button>
                        Github
                    </Button>
                </ButtonGroup>
            </Box>
        </Box>
    );
}

export default Banner;
import React from 'react';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Footer = () => {
    return (
        <Box component="footer" sx={{ p: 1, bgcolor: '#eaeff1' }}>
            <Typography variant="body2" color="text.secondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://mui.com/">
                    Insta Survey
                </Link>{' '}
                {new Date().getFullYear()}.
            </Typography>
        </Box>
    )
}

export default Footer

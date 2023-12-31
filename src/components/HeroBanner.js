import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/og_img_tw-functional-training-classes.jpg'

const HeroBanner = () => {
    return (
        <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
            <Typography color="#FF2625" fontWeight="600" fontSize="26px">
                Exercise Library
            </Typography>
            <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }}
                mb="23px" mt="30px">
                Performance, Strength <br /> Lifestyle
            </Typography>
            <Typography fontSize="22px" lineHeight="35px" mb={4}>
                Learn How To Exercise Correctly & Safely
            </Typography>
            <Button variant="contained" color="error" href="#exercises"
                sx={{ background: '#ff2625', padding: '10px' }}
            >Explore Exercises</Button>
            <Typography fontWeight={600}
                color="#ff2625"
                sx={{
                    opacity: 0.1,
                    display: { lg: 'block', xs: 'none' }
                }}
                fontSize="300px"
            >Workout</Typography>
            <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
        </Box>
    )
}

export default HeroBanner;

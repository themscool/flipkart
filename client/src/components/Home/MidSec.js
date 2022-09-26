import React from 'react'
import { Grid,styled } from '@mui/material'
import { imageURL } from '../../Constants/Data'


const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';

const SecImg= styled('img')(({theme})=>({
    width:'100%',
    marginTop:'10px',
    [theme.breakpoints.down('md')]:{
        objectFit:'cover',
        height:120
    }
}));

const MidSec = () => {
    return (
        <>
            <Grid container>

                {
                    imageURL.map((data) => (
                        <Grid item key={data.id} lg={4} md={4} sm={12} xs={12} >
                            <img style={{ width: '100%' }} src={data.url} alt="adsec" />
                        </Grid>
                    ))
                }
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <SecImg src={url} alt="sec-img" />
                </Grid>
            </Grid>
        </>
    )
}

export default MidSec
import { Box, Grid, styled } from '@mui/material'
import React from 'react'
import Slides from './Slides'

const adUrl = "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";

const ImageContainer = styled(Box)`
padding: 10px;
    background: #fff;
    text-align: center;
    overflow:hidden;
    margin: 10px;
`

const AdImg = styled('img')({
    width: '100%',
    height: 323
})


const MidSlide = ({ products, title, timer }) => {
    return (
        <>
            <Grid container>
                <Grid item lg={10} md={10} sm={12} xs={12}>
                    <Slides products={products} title={title}
                        timer={timer}
                    />
                </Grid>
                <Grid item lg={2} md={2} sm={12} xs={12}>
                    <ImageContainer>
                        <AdImg src={adUrl} alt="ad" />
                    </ImageContainer>
                </Grid>
            </Grid>
        </>
    )
}

export default MidSlide
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import {styled} from '@mui/material'
import { bannerData } from '../../Constants/Data';

const Image = styled('img')(({theme})=>({
  width:'100%',
  height:280,
  objectFit:'cover',
  [theme.breakpoints.down('md')]:{
     height:180,
     objectFit:'cover'
  }
}));

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Banner = () => {
  return (
  <>
  <Carousel responsive={responsive} 
 swipeable={false}
 draggable={false}
 infinite={true}
 autoPlay={true}
 autoPlaySpeed={4000}>
  
     {
      bannerData.map((data=>
        <Image src={data.url} key={data.id} alt={`banner${data.id}`} />
        ))
     }
</Carousel>
  </>
  )
}

export default Banner
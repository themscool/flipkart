import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import NavBar from './NavBar'
import Banner from './Banner'

import { Box, styled } from '@mui/material'
import { getProduct } from '../../redux/actions/productAction'
import { useSelector } from 'react-redux'
import Slides from './Slides';
import MidSlide from './MidSlide'
import MidSec from './MidSec'

//External import components

const Container = styled(Box)`
  padding:10px;
  background:#f2f2f2;
`



const Home = () => {
  // objec destructuring 
  const { products } = useSelector(state => state.allGetProducts);
  console.log(products);

  const dispatch = useDispatch()


  // calling the function from action so, without useeffect and use dispatch can't possible 

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch])


  return (
    <>
      <NavBar />
      <Container>
        <Banner/>

        <MidSlide products={products} title='Discounts for You'
          timer={true}
          />
          <MidSec/>
        <Slides products={products} title='Suggested Items'
          timer={false}
          />
        <Slides products={products} title='Top Selection'
          timer={false}
          />
        <Slides products={products} title='Recommended Items'
          timer={false}
          />



      </Container>

    </>
  )
}

export default Home
import { AppBar, Toolbar, styled, Box, Typography } from '@mui/material'
import {Link} from 'react-router-dom'



// component import
import Search from './Search';
import CustomeButtons from './CustomeButtons';

const Styleheader = styled(AppBar)`
    background: #2874f0;
    height: 55px;
`;

const Componets = styled(Link)`
  margin-left: 12%;
  line-hight: 0;
  color:inherit;
  text-decoration:none
`

const Subheading = styled(Typography)`
  font-size:10px;
  font-style: italic;
`
const PlusImage = styled('img')({
  width: 10,
  height: 10,
  marginLeft:4
})

const CustomeButtonWrapper = styled(Box)`
margin:0 12% 0 auto;
`

const Header = () => {

  const logoText = "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const plusSymbol = "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png";



  return (
    <>
      <Styleheader>
        <Toolbar style={{minHeight:55}}>
          <Componets to={'/'}>
            <img src={logoText} alt="logo" style={{ width: 75 }} />
            <Box style={{display:'flex'}}>
              <Subheading>Explore&nbsp;
                 <Box component="span" style={{color:'#ffe500'}}>
                   Plus
                </Box>
              </Subheading>
              <PlusImage src={plusSymbol} alt="sub-logo" />
            </Box>
          </Componets>
          <Search/>
         <CustomeButtonWrapper>
         <CustomeButtons/>
         </CustomeButtonWrapper>
        </Toolbar>
      </Styleheader>
    </>
  )
}

export default Header
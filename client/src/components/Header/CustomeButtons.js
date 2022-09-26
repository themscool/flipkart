import React, { useContext, useState } from 'react';
import { Button, Typography, Box, styled } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialog from '../Login/LoginDialog';
import { DataContext } from '../../context/DataProvider';
import Profile from './Profile';


const Wrapper = styled(Box)`
display: flex;
margin: 0 3% 0 auto;
& > button, & > p, & > div{
    margin-right:40px;
align-items:center;
    font-size:16px;
}
`

const Container = styled(Box)`
display:flex;
`

const LoginButton = styled(Button)`
  color:#2874f0;
  background:#fff;
  padding: 5px 40px;
  font-weight: 600;
  border-radius:3px;
`

const CustomeButtons = () => {

    const [open, setOpen] = useState(false);
    const {account,setAccount} = useContext(DataContext);

    const openDialog=()=>{
        setOpen(true);
    }

    return (
        <>
            <Wrapper>
                {
                    account ? <Profile account = {account} setAccount = {setAccount} /> :           <LoginButton variant="contained" onClick={()=> openDialog()}>
                    Login
                </LoginButton>
                }
      
                <Typography style={{ marginTop: 7, width: 135 }}>Become a seller</Typography>
                <Typography style={{ marginTop: 7 }}>More</Typography>

                <Container>
                    <ShoppingCartIcon />
                    <Typography>Cart</Typography>
                </Container> 
                <LoginDialog open={open} setopen={setOpen}/>
            </Wrapper>
        </>
    )
}

export default CustomeButtons
import React, { useContext, useState } from 'react';
import { Dialog, Box, Typography, TextField, styled, Button } from '@mui/material'

import { authenticateSignup, authenticateLogin } from '../../service/api';

import { DataContext } from '../../context/DataProvider';

const Component = styled(Box)`
    height: 70vh;
    width: 90vh;
    padding: 0;
    padding-top: 0;
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;


const RequestOTP = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;

const CreateAccount = styled(Typography)`
    margin: auto 0 5px 0;
    text-align: center;
    color: #2874f0;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer
`



const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;


// height: 70vh;

const Image = styled(Box)`
    background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    width: 40%;
    height: 86%;
    padding: 45px 35px;
    & > p, & > h5 {
        color: #FFFFFF;
        font-weight: 600
    }
`;

const Error = styled(Typography)`
 font-size: 10px;
 color:#ff6161;
 margin-top:10px;
 line-height:0;
`





const accountInitialValues = {
    login: {
        view: 'login',
        heading: "Login",
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here!",
        subHeading: 'Sign up with your mobile number to get started'
    }
}


const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: '',
}

const loginInitialValues = {
    username: '',
    password: ''
}



const LoginDialog = ({ open, setopen }) => {

    const [account, toggleAccount] = useState(accountInitialValues.login);
    const [signup, setsignup] = useState(signupInitialValues);
    const [error, setError] = useState(false);
    const [login, setLogin] = useState(loginInitialValues)
    const { setAccount } = useContext(DataContext);

    const handleClose = () => {
        setopen(false);
        toggleAccount(accountInitialValues.login);
        setError(false);
    }

    const togleSignup = () => {
        toggleAccount(accountInitialValues.signup);
    }

    const onInputChange = (e) => {
        setsignup({ ...signup, [e.target.name]: e.target.value });
        console.log(signup);
    }

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const signupUser = async () => {
        let response = await authenticateSignup(signup);
        if (!response) return;
        handleClose();
        setAccount(signup.firstname)
    }

    const loginUser = async () => {
        let response = await authenticateLogin(login);
        console.log(response);
        if (response.status === 200) {
            handleClose();
            setAccount(response.data.user.firstname);
        } else {
                setError(true);
        }
    }

    return (
        <>
            <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
                <Component>
                    <Box style={{ display: 'flex', height: '100%' }}>
                        <Image>
                            <Typography variant="h5">{account.heading}</Typography>
                            <Typography style={{ marginTop: 20 }}>{account.subHeading}</Typography>
                        </Image>

                        {account.view === 'login' ?
                            <Wrapper>
                                <TextField variant='standard' onChange={(e) => onValueChange(e)} name="username" label="Enter Username"></TextField>
                                {error  && <Error>Please Enter valid Username and Password</Error>}
                                <TextField variant='standard' onChange={(e) => onValueChange(e)} name="password" label="Enter Password"></TextField>
                                {/* <Typography>Forgot Password?</Typography> */}
                                <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                                <LoginButton onClick={() => loginUser()}>Login</LoginButton>
                                <Typography style={{ textAlign: 'center' }}>
                                    Or
                                </Typography>
                                <RequestOTP>Request OTP</RequestOTP>
                                <CreateAccount onClick={() => togleSignup()}>New to Flipkart? Create an account</CreateAccount>

                            </Wrapper>
                            :
                            <Wrapper>
                                <TextField variant='standard' onChange={(e) => onInputChange(e)} name="firstname" label="Enter Firstname"></TextField>
                                <TextField variant='standard' onChange={(e) => onInputChange(e)} name="lastname" label="Enter Lastname"></TextField>
                                <TextField variant='standard' onChange={(e) => onInputChange(e)} name="username" label="Enter Username"></TextField>
                                <TextField variant='standard' onChange={(e) => onInputChange(e)} name="email" label="Enter Email"></TextField>
                                <TextField variant='standard' onChange={(e) => onInputChange(e)} name="password" label="Enter Password"></TextField>
                                <TextField variant='standard' onChange={(e) => onInputChange(e)} name="phone" label="Enter Phone"></TextField>

                                <LoginButton onClick={() => signupUser()}>Continue</LoginButton>


                            </Wrapper>

                        }



                    </Box>

                </Component>
            </Dialog>
        </>
    )
}

export default LoginDialog
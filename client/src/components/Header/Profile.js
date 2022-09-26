import React, { useState } from 'react'
import { Box, Typography, Menu, MenuItem } from '@mui/material'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Profile = ({ account, setAccount }) => {

const [open, setOpen] = useState(false);

const handleClick = (event) =>{
    setOpen(event.currentTarget);
}
const handleClose = () =>{
    setOpen(false);
}

const logoutUser = () =>{
    setAccount('');
}
    return (
        <Box>
            <Typography onClick={handleClick} style={{ marginTop: 7, marginRight: 10 , cursor:'pointer'}}>{account}</Typography>
            <Menu

                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}

            >

                <MenuItem onClick={()=> {handleClose(); logoutUser();} }>
                <PowerSettingsNewIcon color="primary" fontSize="small"/>
                    <Typography style={{marginLeft:7}}> Logout</Typography>
                </MenuItem>
            </Menu>
        </Box>
    )
}

export default Profile
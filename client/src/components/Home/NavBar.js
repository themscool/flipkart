import React from 'react'
import { Typography, Box, styled } from '@mui/material'


import { navData } from '../../Constants/Data'

const ListWrapper = styled(Box)(({ theme }) => ({
    padding: '10px 0',
    background: '#fff',
    boxShadow: '0px 4px 4px #ddd',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('lg')]: {
      overflow:'overlay'
    }
}))


const CategoryList = styled(Box)`
text-align:center;
margin: 0 22px 0 22px;
`
const CategoryName = styled(Typography)`
font-size:14px;
`
const CategoryImg = styled('img')({
    width: 'auto',
    height: 90
})
const NavBar = () => {
    return (
        <>
            <ListWrapper>

                {
                    navData.map((data) => {
                        return (
                            <CategoryList key={data.id}>

                                <div className="category-img">
                                    <CategoryImg src={data.url} alt="" />
                                </div>
                                <div className="category-name">
                                    <CategoryName variant="h6" >{data.text}</CategoryName>
                                </div>
                            </CategoryList>
                        )
                    })
                }
            </ListWrapper>
        </>
    )
}

export default NavBar
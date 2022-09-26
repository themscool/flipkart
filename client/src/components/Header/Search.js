import { InputBase, Box, styled } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'


const InputBox = styled(Box)`
  width: 38%;
  border-radius:3px;
  background: #fff;
  margin-left:15px;
  display:flex
`

const InputSearch = styled(InputBase)`
  padding-left:10px;
  width:100%;
  font-size: unset;
`

const SearchIconWrapper = styled(Box)`
display:flex;
  color:blue;
  padding: 6px
`


const Search = () => {
  return (
    <>
      <InputBox>
        <InputSearch placeholder='Search for products, Brands and more' />
        <SearchIconWrapper>
          <SearchIcon/>
        </SearchIconWrapper>
      </InputBox>
    </>
  )
}

export default Search
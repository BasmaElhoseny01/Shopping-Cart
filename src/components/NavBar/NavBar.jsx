import React from 'react'

//Styles
import { Logo, NavBarContainer, NavBarTabs } from './styles'

//MUI
import { Badge, Link, Typography } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

//Assets
import LogoImg from '../../assets/logo.png'

function NavBar() {
  return (
    <NavBarContainer>
        <Logo src={LogoImg}/>
        <NavBarTabs>
            <Typography>Home</Typography>
            <Link href='./store'>Store</Link>
            <Typography>About</Typography>
        </NavBarTabs>
        <Badge  badgeContent={4} color="secondary">
            <ShoppingCartIcon color="action" fontSize='large'/>
        </Badge>
    </NavBarContainer>

  )
}

export default NavBar
import React from 'react'
import { connect } from 'react-redux'

//Styles
import { Logo, NavBarContainer, NavBarTabs } from './styles'

//MUI
import { Badge, Link, Typography } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

//Assets
import LogoImg from '../../assets/logo.png'

function NavBar(props) {
  return (
    <NavBarContainer>
        <Logo src={LogoImg}/>
        <NavBarTabs>
            <Typography>Home</Typography>
            <Link href='./store'>Store</Link>
            <Typography>About</Typography>
        </NavBarTabs>
        <Badge  badgeContent={props.itemCount} color="secondary">
            <ShoppingCartIcon color="action" fontSize='large'/>
        </Badge>
    </NavBarContainer>

  )
}
const mapStateToProps = (state) => {

  const sum=Object.keys(state).reduce((acc, value) => acc + state[value], 0);
  return {
      itemCount: sum
      // itemCount:100

  }
}
export default connect(mapStateToProps)(NavBar)
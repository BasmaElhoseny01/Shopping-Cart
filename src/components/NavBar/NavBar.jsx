import React from 'react'
import { connect } from 'react-redux'

//Styles
import { Logo, NavBarContainer } from './styles'

//MUI
import { Badge } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

//Assets
import LogoImg from '../../assets/logo.png'

//context
import { useSideBarStateContext } from '../../context/SideBarStateContext'
import theme from '../../styles'

function NavBar(props) {

  //Context
  const { setState } = useSideBarStateContext();

  return (
    <NavBarContainer>
        {/* <img src={SuperMarketBag} alt="supermarket bag" width="75px" style={{display:'hide'}}/> */}
      <Logo src={LogoImg} />
      <Badge badgeContent={props.itemCount} color="info" onClick={() => setState(true)} style={{cursor: 'pointer'}}>
        <ShoppingCartIcon color={theme.palette.avatar.light} fontSize='large' />
      </Badge>
    </NavBarContainer>

  )
}
const mapStateToProps = (state) => {

  const sum = Object.keys(state).reduce((acc, value) => acc + state[value], 0);
  return {
    itemCount: sum
    // itemCount:100
  }
}
export default connect(mapStateToProps)(NavBar)
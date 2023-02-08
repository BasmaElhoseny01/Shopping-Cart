import React from 'react'
import { connect } from 'react-redux'

//Styles
import { Logo, NavBarContainer, NavBarImages } from './styles'

//MUI
import { Badge } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

//Assets
import LogoImg from '../../assets/logo.png'
import SuperMarketBag from '../../assets/shoppingbag.png'
import SuperMarketCart from '../../assets/shoppingcartImg.png'

//context
import { useSideBarStateContext } from '../../context/SideBarStateContext'

function NavBar(props) {

  //Context
  const { setState } = useSideBarStateContext();

  return (
    <NavBarContainer>
        {/* <img src={SuperMarketBag} alt="supermarket bag" width="75px" style={{display:'hide'}}/> */}
      <Logo src={LogoImg} />
      {/* <NavBarTabs>
        <Typography>Home</Typography>
        <Link href='./store'>Store</Link>
        <Typography>About</Typography>
      </NavBarTabs> */}
      <Badge badgeContent={props.itemCount} color="secondary" onClick={() => setState(true)}>
        <ShoppingCartIcon color="action" fontSize='large' />
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
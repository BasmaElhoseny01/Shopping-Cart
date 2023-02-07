import { Box, Button, Input, Typography } from '@mui/material'
import React, { useState } from 'react'
import DropDownList from '../../DropDownList/DropDownList'

//Redux
import { connect } from 'react-redux'
//Action Creaters
import { buyItem, removeItem } from '../../../redux'


//Styles
import { AddToCart, IncDecButton, IncDecContainer, ItemCardContainer, RemoveButton } from './styles'

function ItemCard(props) {
    const { item } = props

    //state
    const [chooseQuatity, setChooseQuatity] = useState(false)
    return (
        <ItemCardContainer>
            <img src={item?.imgUrl} alt={item?.name} width="100%" />
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: '100%', margin: "15px auto" }}>
                <Typography>{item?.name}</Typography>
                <Typography>{item?.price}</Typography>
            </Box>

            {!chooseQuatity ?
                <AddToCart onClick={() => setChooseQuatity(true)}>+ Add to cart</AddToCart>
                :
                <>
                    <IncDecContainer>
                        <IncDecButton size="small">-</IncDecButton>
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                            <Typography>{props.itemCount} items in cart</Typography>
                        </Box>
                        <IncDecButton size="small">+</IncDecButton>
                    </IncDecContainer>

                    <RemoveButton>Remove</RemoveButton>
                </>
            }
        </ItemCardContainer>
    )
}

const mapStateToProps = (state, ownProps) => {
    let numOf='numOf';
    const item =  numOf.concat(ownProps.item.name,"s");

    return {
        itemCount:state[item]
    }
}
export default connect(mapStateToProps)(ItemCard)
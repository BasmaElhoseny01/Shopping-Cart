import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

//Redux
import { connect } from 'react-redux'
//Action Creaters
import { buyItem, removeItem, deleteItem } from '../../../redux'
import SnackBar from '../../SnackBar/SnackBar'


//Styles
import { AddToCart, IncDecButton, IncDecContainer, ItemCardContainer, RemoveButton } from './styles'

function ItemCard(props) {
    const { item } = props

    useEffect(()=>{},[])

    //state
    const [chooseQuatity, setChooseQuatity] = useState(false)
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const [snackBar, setSnackBar] = useState({ message: "" })
    return (
        <ItemCardContainer>
            <img src={item?.imgUrl} alt={item?.name} width="300px" height="300px" style={{objectFit:"cover"}} />
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: '100%', margin: "15px auto" }}>
                <Typography>{item?.name}</Typography>
                <Typography>{item?.price}</Typography>
            </Box>

            {!chooseQuatity ?
                <AddToCart onClick={() => setChooseQuatity(true)}>+ Add to cart</AddToCart>
                :
                <>
                    <IncDecContainer>
                        <IncDecButton size="small" disabled={props?.itemCount === 0} onClick={() => {
                            props.removeItem(1)
                            setOpenSnackBar(true)
                            setSnackBar({
                                message: item?.name + " removed from cart",
                            })
                        }}>-</IncDecButton>
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                            <Typography>{props?.itemCount} items in cart</Typography>
                        </Box>
                        <IncDecButton size="small" onClick={() => {
                            props.buyItem(1)
                            setOpenSnackBar(true)
                            setSnackBar({
                                message: item?.name + " added to cart",
                            })
                        }}>+</IncDecButton>
                    </IncDecContainer>

                    <RemoveButton onClick={() => {
                        props.deleteItem()
                        setOpenSnackBar(true)
                        setSnackBar({
                            message: item?.name + " deleted from cart",
                        })
                    }}
                        disabled={props?.itemCount === 0}>
                        Remove</RemoveButton>
                    <SnackBar open={openSnackBar} setOpen={setOpenSnackBar} message={snackBar.message} />
                </>
            }
        </ItemCardContainer >
    )
}

const mapStateToProps = (state, ownProps) => {
    let numOf = 'numOf';
    const item = numOf.concat(ownProps.item.name, "s");
    return {
        itemCount: state[item]?.count
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const item = ownProps.item.name;
    return {
        buyItem: (number) => dispatch(buyItem(item, number)),
        removeItem: (number) => dispatch(removeItem(item, number)),
        deleteItem: () => dispatch(deleteItem(item))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemCard)
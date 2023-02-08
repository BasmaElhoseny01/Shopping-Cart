import React, { useEffect, useState } from 'react'

//MUI
import { Drawer, IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'

//Icon
import CloseIcon from '@mui/icons-material/Close';

//Context
import { useSideBarStateContext } from '../../context/SideBarStateContext'
import CartItem from '../CartItem/CartItem';

//Redux
import { connect } from 'react-redux';

//Data
import itemsData from '../../data/items'

//Scripts
import Total from './scripts'

function SideBar(props) {

    const { anchor, items } = props

    //Context
    const { state, setState } = useSideBarStateContext();

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState(open);
    };


    return (
        <Drawer
            anchor={anchor}
            open={state}
            onClose={toggleDrawer(anchor, false)}
        >
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: "10px" }}>
                <Typography fontSize="24px">Items</Typography>
                <IconButton onClick={toggleDrawer(anchor, false)}>
                    <CloseIcon fontSize='meduim' />
                </IconButton>
            </Box>
            <Box
                sx={{ width: 350 }}
                onClick={toggleDrawer(anchor, false)}
            ></Box>
            {
                items ? (Object.entries(items).map(([key, value]) => {
                    return (
                        <CartItem item={itemsData[key]} count={value} key={key} />
                    )
                })) : null
            }
            <Box display="flex" justifyContent="flex-end" padding="10px 20px"><Typography fontSize="20px" fontWeight="700">Total: $ {Total(items, itemsData)}</Typography></Box>
        </Drawer>
    )
}

//mapStateToProps
const mapStateToProps = state => {

    let itemsInCart = {};
    Object.entries(state).map(([key, item]) => {
        if (state[key] > 0) {
            itemsInCart[key] = state[key]
        }
        return null
    });

    return {
        items: itemsInCart
    }
}
export default connect(mapStateToProps)(SideBar)
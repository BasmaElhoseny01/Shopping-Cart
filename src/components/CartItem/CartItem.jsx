import React from 'react'

//MUI
import { Box, IconButton, Typography } from '@mui/material'

//Icons
import DeleteIcon from '@mui/icons-material/Delete';

//Styles
import { ItemCardChild, ItemCartContainer, } from './styles'

//Redux
import { connect } from 'react-redux';
//Action creators
import { deleteItem } from '../../redux'

function CartItem(props) {
    const { item, count } = props;

    return (
        <ItemCartContainer>
            <ItemCardChild start='true'>
                <img src={item?.imgUrl} alt={item?.name} width="90px" height="90px" style={{ objectFit: "cover" }} />
                <Box display="flex" flexDirection="column">
                    <Typography fontSize="22px" fontWeight="500">{item?.name}</Typography>
                    <Typography fontSize="12px">${item?.price}</Typography>
                </Box>
            </ItemCardChild>
            <ItemCardChild>
                <Typography fontSize="18px" fontWeight="500">${count * item?.price}</Typography>
                <IconButton onClick={() => { props.deleteItem() }} >
                    <DeleteIcon color="error" />
                </IconButton>
            </ItemCardChild>
        </ItemCartContainer>
    )
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const item = ownProps.item.name;
    return {
        deleteItem: () => dispatch(deleteItem(item))
    }
}

export default connect(null, mapDispatchToProps)(CartItem)
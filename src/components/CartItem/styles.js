import { styled } from '@mui/material/styles';

import { Box } from '@mui/material'


export const ItemCartContainer = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'row',

    justifyContent: "space-between",
    alignItems: "center",

    width: "95%",
    height: "80px",
    margin: "5px auto",
}))

export const ItemCardChild = styled(Box)(({ start }) => ({
    display: 'flex',
    flexDirection: 'row',

    alignItems: start === 'true' ? "flex-start" : "center",
    justifyContent: start === 'true' ? "flex-start" : "flex-end",
    
    width: "50%",

    "& > *": {
        margin: "0px 5px"
    }
}))

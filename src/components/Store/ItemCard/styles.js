import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';

//Theme
import theme from '../../../styles';

//NavBarContainer
export const ItemCardContainer = styled(Box)(() => ({
    width: '200px',

    margin: '15px 20px',

    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center',

    backgroundColor: theme.palette.itemcard.body,
    boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
}))


//AddToCart Button
export const AddToCart = styled(Button)(() => ({
    width: '90%',
    margin: '0px 10px 10px 10px',

    backgroundColor: theme.palette.itemcard.button,

    //Text Color
    color:"#ffffff"
}))

//Increase Decrease Container
export const IncDecContainer = styled(Box)(() => ({
    width: '90%',

    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',

    "& > *":{
        margin: '10px 0px',
    }
}))
//Increase Decrease Button
export const IncDecButton = styled(Button)(() => ({


    backgroundColor: theme.palette.itemcard.button,

    //Text Color
    color:"#ffffff"
}))

//Remove Button
export const RemoveButton = styled(Button)(() => ({
    width: '50%',
    margin: '0px 10px 10px 10px',

    backgroundColor: theme.palette.itemcard.remove,

    //Text Color
    color:"#ffffff"
}))

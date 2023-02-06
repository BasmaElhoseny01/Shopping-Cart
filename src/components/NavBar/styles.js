import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';

//Theme
import theme from '../../styles';

//NavBarContainer
export const NavBarContainer = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",

    width: '100vw',
    height: "60px",

    padding: "5px 50px",

    position: 'fixed',
    top: '0px',

    backgroundColor: theme.palette.system.header,

    borderBottom: '2px solid black'
}))

//NavBarTabs
export const NavBarTabs = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems: 'center',

    // height: "100%",
    // width:"200px",

    // padding:"2px",

    '& > *': {
        margin: "0px 10px",
    },

    '& > a': {
        textDecoration: "none",
        color:"#000000"
    }
}))

//Logo
export const Logo = styled("img")(() => ({
    // height:'100%',
    width: "80px"
}));
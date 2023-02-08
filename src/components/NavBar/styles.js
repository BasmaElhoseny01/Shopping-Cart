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
    zIndex:"1",

    backgroundColor: theme.palette.system.header,
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',

    // borderBottom: '2px solid black'
}))

//Logo
export const Logo = styled("img")(() => ({
    // height:'100%',
    width: "100px"
}));
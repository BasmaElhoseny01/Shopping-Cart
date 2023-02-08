import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';

//Theme
// import theme from '../../styles';

//NavBarContainer
export const StoreContainer = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap:'wrap',

    // width: '100vw',
    height: "100vh",

    marginTop:'60px',

    // background:theme.palette.system.body
}))

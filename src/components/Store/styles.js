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

    marginTop:'60px',
    padding:"0px 50px"

    // background:theme.palette.system.body
}))

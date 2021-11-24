// import {createTheme} from "@material-ui/core/styles";
import { createTheme } from '@mui/material/styles';

const arcBlue="#0b72b9"
const arcOrange="#FFBA60"
const arcGreen="#00FF00"

export default createTheme({
    palette:{
        common:{
         black:"#000",
         white:"#fff"
        },
        primary:{
            main:`${arcBlue}`,
        },
        secondary:{
            main:`${arcOrange}`,
            contrastText:"#000"
        }

    },
    typography:{
        tab:{

        }
    },
    components: {
        // Name of the component
        MuiMenuItem: {
            styleOverrides: {
                // Name of the slot
                root: {
                    // Some CSS
                    fontSize:"1rem",
                    fontWeight: 700,
                    textTransform:"none",
                    fontFamily:"Raleway",
                    color: "theme.palette.primary.main"
                },
            },
        },
    },

});

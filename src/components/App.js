import react from "react"
import { Header, useStyles }from  "./UI/Header"
// import {ThemeProvider} from "@material-ui/styles";
import theme from "./UI/Theme"
// import {ThemeProvider} from "@material-ui/core/styles";
import { ThemeProvider } from '@mui/material/styles';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import HelloWorld from "./UI/HelloWorld"
import Services from "./UI/Services"
import Revolution from "./UI/Revolution"
import About from "./UI/About"
import Contact from "./UI/Contact"
import CreateDataSet from "./UI/CreateDataSet";




function App() {

  return (
      <ThemeProvider theme={theme}>
          <BrowserRouter>
              <Header/>
              <Switch>
                  <Route exact path="/"><HelloWorld/> </Route>
                  <Route exact path="/services"><Services/> </Route>
                  <Route exact path="/customsoftware" component={()=> <div>Custom Software</div>}/>
                  <Route exact path="/mobileapps" component={()=> <div>Mobile Apps</div>}/>
                  <Route exact path="/websites" component={()=> <div> Websites</div>}/>
                  <Route exact path="/revolution"><Revolution/> </Route>
                  <Route exact path="/about" ><About/> </Route>
                  <Route exact path="/contact" ><Contact/> </Route>
                  <Route exact path="/estimate" component={()=> <div> Estimate</div>}/>
                  <Route exact path="/createdataset"> <CreateDataSet/></Route>

              </Switch>
          </BrowserRouter>

      </ThemeProvider>
  );
}

export default App;

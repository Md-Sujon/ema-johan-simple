import './App.css';
import Header from './component/Header/Header';
import Shop from './component/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Review from './component/Review/Review';
import Inventory from './component/Inventory/Inventory';
import Notfound from './component/Notfound/Notfound';
import ProductDetails from './component/ProductDetails/ProductDetails';


function App() {
  return (
          <div>
            <Header></Header>
            
            <Router>
            <Switch>

                  <Route exact path="/">
                       <Shop></Shop>
                  </Route>

                  <Route path="/Shop">
                  <Shop></Shop>
                  </Route>

                    <Route path="/Review">
                        <Review></Review>
                    </Route>

                    <Route path="/Manage">
                    <Inventory></Inventory>
                    </Route>
                     
                        <Route path="/Product/:productKey">

                          <ProductDetails></ProductDetails>
                        </Route>
                                   
                     <Route path="/*">
                         <Notfound></Notfound>
                     </Route>

            </Switch>
          </Router>
          </div>

    
      
      
      
    
  );
}

export default App;

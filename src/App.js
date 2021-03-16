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
import Login from './component/Login/Login';
import Shipment from './component/Shipment/Shipment';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';

export const UserContext=createContext();

function App() {
 const [loggedInUser,setLoggedInUser]=useState({});
  return (
          <UserContext. Provider value={[loggedInUser,setLoggedInUser]}>
     <h3>Email:{loggedInUser.email}</h3>

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


                    <Route path="/Login">
                    <Login></Login>
                    </Route>

                    <PrivateRoute path="/Shipment">
                    <Shipment></Shipment>
                    </PrivateRoute>
                     
                        <Route path="/Product/:productKey">

                          <ProductDetails></ProductDetails>
                        </Route>
                                   
                     <Route path="/*">
                         <Notfound></Notfound>
                     </Route>

            </Switch>
          </Router>
          </UserContext. Provider>

    
      
      
      
    
  );
}

export default App;

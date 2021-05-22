import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import {ProductDetail, ProductEdit, ProductList, Reset, SignIn, SignUp} from "./templetes";
import SignUp from './templetes/SignUp'
// import Auth from "./Auth";

const RouterComp = () => {
    return (
        <Router>
          {/* <Route exact path="/signin" component={SignIn} /> */}
          {/* <Route exact path="/signin/reset" component={Reset} /> */}
          <Route exact path="/signup" component={SignUp} />
          {/* <Auth> */}
            {/* <Route exact path="(/)?" component={ProductList} /> */}
            {/* <Route exact path="/product/:id" component={ProductDetail} /> */}
            {/* <Route exact path="/product/edit(/:id)?" component={ProductEdit} /> */}
          {/* </Auth> */}
        </Router>
        
    );
};

export default RouterComp;
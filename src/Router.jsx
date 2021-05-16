import React from 'react';
import {BrowserRouter,Route, Switch} from "react-router-dom";
// import {ProductDetail, ProductEdit, ProductList, Reset, SignIn, SignUp} from "./templetes";
import SignUp from './templetes/SignUp'
// import Auth from "./Auth";

const Router = () => {
    return (
        <BrowserRouter>
          <Switch>
            {/* <Route exact path="/signin" component={SignIn} /> */}
            {/* <Route exact path="/signin/reset" component={Reset} /> */}
            <Route exact path="/signup" component={SignUp} />

            {/* <Auth> */}
                {/* <Route exact path="(/)?" component={ProductList} /> */}
                {/* <Route exact path="/product/:id" component={ProductDetail} /> */}
                {/* <Route exact path="/product/edit(/:id)?" component={ProductEdit} /> */}
            {/* </Auth> */}
          </Switch>
        </BrowserRouter>
        
    );
};

export default Router;
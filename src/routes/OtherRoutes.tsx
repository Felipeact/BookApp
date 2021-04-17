import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Calendary from '../pages/Calendary';
import Expenses from '../pages/Expenses';
import Register from '../pages/Register';

import HomePage from '../pages/HomePage';
import Profile from '../pages/Profile';

const OtherRoutes: React.FC = () => {
 return (
   <BrowserRouter>
    <Switch>
     <Route path="/" exact component={HomePage} />
     <Route  path="/register" component={Register}/>
     <Route  path="/expenses" component={Expenses}/>
     <Route  path="/expenses/:id" component={Expenses}/>
     <Route  path="/calendary/:id" component={Calendary}/>
     <Route  path="/profile" component={Profile}/>
     <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
   </BrowserRouter>
 );
};

export default OtherRoutes;
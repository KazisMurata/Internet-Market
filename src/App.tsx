import React from 'react';
import { Switch, Route } from 'react-router';
import Light from './Components/Common/Light';
import Home from './Components/Pages/Home';

const App: React.FC = () => (
    <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/lights/:id' component={Light} />
    </Switch>
);

export default App;

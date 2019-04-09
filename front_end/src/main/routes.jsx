import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter , Route,Redirect, Switch} from 'react-router-dom'

import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'
import AuthOrApp from './authOrApp'

export default props => (
    <HashRouter>
        <Switch>
            <Route path='/' exact component={AuthOrApp}/>
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/billingCycles' component={BillingCycle} />
            <Redirect from ='*' to='/' />
        </Switch>
    </HashRouter>
)
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter , Route,Redirect, Switch} from 'react-router-dom'

import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'

export default props => (
    <HashRouter>
        <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/billingCycles' component={BillingCycle} />
        </Switch>
    </HashRouter>
)
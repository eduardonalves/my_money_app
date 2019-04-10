import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { HashRouter , Route, Switch} from 'react-router-dom'
import { Redirect } from 'react-router'
import axios from 'axios'

import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'
import AuthOrApp from './authOrApp'
import { validateToken }  from '../auth/authActions'
import Auth from '../auth/auth'

class Routes extends Component{
    
    render(){
        if (this.props.auth.user) {
            
            if (this.props.auth.user && this.props.auth.validToken) {
                axios.defaults.headers.common['authorization'] = this.props.auth.user.token
            }
            return (
                <HashRouter>
                    <Switch>
                        <Route path='/' exact component={BillingCycle}/>
                        <Route path='/dashboard' component={Dashboard} />
                        <Route path='/billingCycles' component={BillingCycle} />
                        <Route path='/login' component={Auth} />
                        
                    </Switch>
                </HashRouter>
            )
        }else{
            return(
                <HashRouter>
                     <Switch>
                        <Route path='*' component={Auth} />
                        <Redirect to='/login' />
                     </Switch>
                    
                </HashRouter>
                
                
            )
        }
        
    }
}
const mapStateToProps = state => ({auth:state.auth})
const mapDispatchToProps = dispatch => bindActionCreators({validateToken}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Routes)
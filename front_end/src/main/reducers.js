import { combineReducers } from 'redux'
import {reducer as formReducer} from 'redux-form'

import DasboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'
import BillingCycleReducer from '../billingCycle/billingCycleReducer'
import {reducer as toastrReducer} from 'react-redux-toastr'

const rootReducer = combineReducers({
    dashboard: DasboardReducer,
    tab: TabReducer,
    billingCycle: BillingCycleReducer,
    form: formReducer,
    toastr:toastrReducer
})

export default rootReducer
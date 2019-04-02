import { combineReducers } from 'redux'

import DasboardReducer from '../dashboard/dashboardReducer'

const rootReducer = combineReducers({
    dashboard: DasboardReducer
})

export default rootReducer
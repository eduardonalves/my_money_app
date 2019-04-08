import React, {Component} from 'react'
import {reduxForm, Field, formValueSelector} from 'redux-form'
import {connect}  from 'react-redux'
import {bindActionCreators} from 'redux'

import {init} from './billingCycleAction'
import  labelAndInput from '../common/form/labelAndInput'
import CreditList from "./CreditList";

class BillingCycleForm extends Component {
    render(){
        const {handleSubmit, readOnly, credits} = this.props

        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={labelAndInput} cols='12 4' label='Nome' placeholder='Informe o nome' readOnly={readOnly} />
                    <Field name='month' component={labelAndInput} placeholder='Informe o mês' label='Mês'  type='number' cols='12 4' readOnly={readOnly}  />
                    <Field name='year' component={labelAndInput} cols='12 4' placeholder='Informe o ano' label='Ano' readOnly={readOnly}  />
                    <CreditList cols='12 6' list={credits} readOnly={readOnly} />   
                </div>
                
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass} pull-right`}>
                        {this.props.submitLabel}
                    </button>
                    <button type='button' className='btn btn-default pull-right' onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}
//destroyOnUnmount=false mantém os dados do formulário quando o formulário for destruido

BillingCycleForm = reduxForm({form:'billingCycleForm', destroyOnUnmount:false})(BillingCycleForm)
const selector = formValueSelector('billingCycleForm')
const mapStateToProps = state =>({credits:selector(state,'credits'), debts:selector(state,'debts')})
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)
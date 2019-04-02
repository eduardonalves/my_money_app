import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getSummary } from './dashboardActions'
import Content from '../common/template/content'
import ContentHeader from '../common/template/contentHeader'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/template/row'

class Dashboard extends Component {
        componentWillMount(){
            this.props.getSummary()
        }
        render(){
            const {credit, debt} = this.props.summary
            return (
                <div>
                    <ContentHeader title='Dashboard' small= 'Versão 1.0' />
                    <Content>
                        <Row>
                            <ValueBox cols='12 4' color='green' icon='bank' value={`R$ ${credit}`} text='Total de Créditos' />
                            <ValueBox cols='12 4' color='red' icon='credit-card' value={`R$ ${debt}`} text='Total de Débitos' />
                            <ValueBox cols='12 4' color='blue' icon='money' value={`R$ ${credit - debt}`} text='Valor Consolidado' />
                        </Row>
                    </Content>
                </div>
            )
        }
}

//Criação do método mapStateToProps recebe o estado(state) e retorna um objeto que será adicionada na props da classe dashboard
const mapStateToProps = state => ({summary: state.dashboard.summary})

//criação do método que faz o bind do action creator
const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch)

//Decorator dos métodos 
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

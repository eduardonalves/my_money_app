import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from '../common/template/header'
import Sidebar from '../common/template/sidebar'
import Footer from '../common/template/footer'
import Routes from './routes'
import Messages from '../common/msg/messages'
import { validateToken } from '../auth/authActions'
import If from '../common/if/if'

class App extends Component {
    componentWillMount() {
        if (this.props.auth.user) {
            
            this.props.validateToken(this.props.auth.user.token)
        }
    }
    render(){
        const { user, validToken } = this.props.auth
        const showMenu = user && validToken ? true : false
        const classCss = showMenu==true ? 'content-wrapper' : ''
        return(
            
            <div className='wrapper'>
                <If test= {showMenu} >
                    <Header />
                    <Sidebar />
                </If>
                <div className={classCss}>
                    <section className='content'>
                        <Routes />
                    </section>
                </div>
                <If test= {showMenu} >
                    <Footer />
                    <Messages />
                </If>
            </div>
        )
        
    }
}
const mapStateToProps = state => ({ auth: state.auth })
const mapDispatchToProps = dispatch => bindActionCreators({ validateToken },dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(App)
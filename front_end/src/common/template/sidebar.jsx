import React from 'react'
import Menu from './menu'

const pStyle ={
    'height':'auto'
}
export default props => (
    <aside className='main-sidebar'>
        <section className='sidebar' style={pStyle}> 
            <Menu />
        </section>
    </aside>
)
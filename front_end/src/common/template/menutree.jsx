import React from 'react'

export default props => (
    <ul className='sidebar-menu tree' data-widget='tree'>
        <li className='treeview' >
            <a href="">
                <i className={`fa fa-${props.icon}`}></i> {props.label}
                <i className='fa fa-angle-left pull-right'></i>
            </a>
            <ul className='treeview-menu' data-widget='tree'>
                {props.children}
            </ul>
        </li>
    </ul>
    
)
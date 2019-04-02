import React from 'react'
import MenuItem from './menuitem'
import MenuTree from './menutree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='#/' icon='dashboard' label='Dashboard'/>
        <MenuTree label='Cadastro' icon='edit'>
            <MenuItem path='#billingCycles' label='Ciclos de Pagamento' icon='usd' />
        </MenuTree>
    </ul>
)
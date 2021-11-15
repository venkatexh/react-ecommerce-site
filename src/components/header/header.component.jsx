import React from 'react'
import './header.styles.scss'

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, LogoComponent} from "./header.styles";
import { connect } from 'react-redux'
import { auth } from '../../firebase/firebase.utils'

const Header = ({ currentUser, hidden }) => (
	<HeaderContainer>
		<LogoContainer to='/'>
			<LogoComponent />
		</LogoContainer>
		<OptionsContainer >
			<OptionLink to='/shop' >SHOP</OptionLink>
			{
				currentUser ?
					<OptionLink as={'div'} onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
					: <OptionLink to='/signin' >SIGN IN</OptionLink>
			}
			<CartIcon />
		</OptionsContainer>
			{
				hidden ? 
					null
					: <CartDropdown />
			}
	</HeaderContainer>
)

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
	currentUser,
	hidden
})

export default connect(mapStateToProps)(Header)
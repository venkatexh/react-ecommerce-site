import './App.css';
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Homepage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInSignupPage from './pages/signin-signup/signin-signup.component'
import { auth } from './firebase/firebase.utils'

class App extends React.Component {
	constructor() {
		super()
		
		this.state = {
			currentUser: null
		}
	}
	
	unsubscribeFromAuth = null;
	
	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
			this.setState({currentUser: user})
			console.log(user)
		})
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth()
	}
	
	render() {
		return (
		<div>
			<Header currentUser={this.state.currentUser} />
			<Switch>
				<Route exact path='/' component={Homepage} />
				<Route path='/shop' component={ShopPage} />
				<Route path='/signin' component={SignInSignupPage} />
			</Switch>
		</div>
	)
	}
	
}
export default App;

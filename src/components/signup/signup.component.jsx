import React from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import './signup.styles.scss'

class SignUp extends React.Component {
	constructor() {
		super()
		
		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		}
	}
	
	handleSubmit = async e => {
		e.preventDefault()
		
		const { displayName, email, password, confirmPassword } = this.state
		
		if(password !== confirmPassword) {
			alert("Passwords don't match!")
			return
		}
		
		try {
			const { user } = auth.createUserWithEmailAndPassword(email, password)
			await createUserProfileDocument(user, { displayName })
			
			this.setState({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: ''
			})
		} catch(error) {
			console.log('error: ', error)
		}
	}
	
	handleChange = e => {
		const { name, value } = e.target
		this.setState({[name]: value})
	}
	
	render() {
		const { displayName, email, password, confirmPassword } = this.state
		return (
			<div className='signup'>
				<h2 className='title'>Don't have an account?</h2>
				<span>Sign up now</span>
				<form className='signup-form' onSubmit={this.handleSubmit}>
					
					<FormInput type='text' name='displayName' value={displayName} 
						onChange={this.handleChange} label='Name' required />
					
					<FormInput type='email' name='email' value={email} 
						onChange={this.handleChange} label='Email' required />
					
					<FormInput type='password' name='password' value={password} 
						onChange={this.handleChange} label='Password' required />
					
					<FormInput type='password' name='confirmPassword' value={confirmPassword} 
						onChange={this.handleChange} label='Confirm Password' required />
					
					<CustomButton type="submit"> SIGN UP </CustomButton>
				</form>
			</div>
		)
	}
}

export default SignUp
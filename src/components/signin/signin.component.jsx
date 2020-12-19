import React from 'react'
import './signin.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

class SignIn  extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			password: ''
		}
	}
	
	handleSubmit = e => {
		e.preventDefault()
		this.setState({ email: '', password: ''})
	}

	handleChange = e => {
		const { value, name } = e.target
		
		this.setState({[name]: value})
	}
	
	render() {
		return (
		<div className='sign-in'>
			<h2>Already have an account?</h2>
			<span>Sign in with email</span>
			
				<form onSubmit={this.handleSubmit}>
					
					<FormInput handleChange={this.handleChange} name='email' label='email'
						value={this.state.email} required />
					
					<FormInput handleChange={this.handleChange} name='password' type='password' label='password'
						value={this.state.password} required />
					
					<CustomButton type='submit'>Sign in</CustomButton>
					
				</form>
		</div>
		)
	}
}

export default SignIn
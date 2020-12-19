import React from 'react'
import './signin.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth, signInWithGoogle} from '../../firebase/firebase.utils'

class SignIn  extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			password: ''
		}
	}
	
	handleSubmit = async e => {
		e.preventDefault()
		const { email, password } = this.state
		
		try {
			await auth.signInWithEmailAndPassword(email, password)
			this.setState({ email: '', password: ''})
		} catch(error) {
			console.log(error)
			
		}
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
						value={this.state.email} />
					
					<FormInput handleChange={this.handleChange} name='password' type='password' label='password'
						value={this.state.password}/>
					
					<div className='buttons'>
						<CustomButton type='submit'>Sign in</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn={true}>Sign in with Google
						</CustomButton>
					</div>
					
					
				</form>
		</div>
		)
	}
}

export default SignIn
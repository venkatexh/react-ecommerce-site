import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDJ0jqHM_4MgbpN9FuBD2gvvbEGY_E2rdU",
    authDomain: "react-ecom-5b918.firebaseapp.com",
    projectId: "react-ecom-5b918",
    storageBucket: "react-ecom-5b918.appspot.com",
    messagingSenderId: "587217462408",
    appId: "1:587217462408:web:ed1391ac366c9c4893ab3d"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if(!userAuth) {
		return
	}
	
	const userRef = firestore.doc(`users/${userAuth.uid}`)
	const snapshot = await userRef.get()
	
	if(!snapshot.exists) {
		const { displayName, email } = userAuth
		const createdAt = new Date()
		
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			})
		} catch(error) {
			console.log('user creation error:', error.message)
		}
	}
	
	return userRef
} 

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({ prompt: 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase

import { createContext, useEffect, useState } from 'react';
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
} from 'firebase/auth';
import auth from '../Config/Firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
	// State
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	// Firebase Manage

	// Cretae a new user
	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	// Login
	const logIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	// LogOut
	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	};

	// Update user profile
	const updateUserProfile = (name, photo) => {
		setLoading(true);
		return updateProfile(auth.currentUser, {
			displayName: name,
			photoURL: photo,
		});
	};

	// Observer

	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, currentUser => {
			setLoading(true);
			setUser(currentUser);
			setLoading(false);
			console.log('Observer', currentUser);
		});

		return () => {
			unSubscribe();
		};
	}, []);

	const authInfo = {
		user,
		loading,
		createUser,
		logIn,
		logOut,
		updateUserProfile,
	};
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;

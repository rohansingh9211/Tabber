import React from 'react';
import {auth , provider} from '../firebase.js';

const Login = () => {

	// Sign in with google
	const signin = () => {
		auth.signInWithPopup(provider).catch(alert);
	}
	
	return (
		<div>
			<center>
				<button style={{"marginTop" : "200px"}}
				onClick={signin}>Sign In with Google</button>
			</center>
		</div>
	);
}

export default Login;

// import React from 'react'
// import { signInWithGoogle } from './firebase'
// const Glogin = () => {
//     return (
//         <div>
//             <button onClick={signInWithGoogle}>login</button>
//         </div>
//     )
// }

// export default Glogin

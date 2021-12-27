import React from 'react';
import {auth} from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import Login from './components/Login';
import Mainpage from './components/Mainpage';

function App() {
const [user] = useAuthState(auth);
return (
	user ? <Mainpage/> : <Login/>
);
}

export default App;

// import React from 'react'
// import { signInWithGoogle } from './firebase'
// const App = () => {
//     return (
//         <div>
//             <button onClick={signInWithGoogle}>login</button>
//         </div>
//     )
// }

// export default App
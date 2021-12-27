import firebase from "./firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAQqU_C5Ed_eJd7zVqNgDpgZ61hdH05VAM",
    authDomain: "login-g-auth.firebaseapp.com",
    projectId: "login-g-auth",
    storageBucket: "login-g-auth.appspot.com",
    messagingSenderId: "739671893274",
    appId: "1:832824101837:web:c8c6a353cb658edabf1284",
    measurementId: "1:739671893274:web:84cdb429c21acc0f34f8a3"
};
export default firebaseConfig;

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};
// import firebase from './firebase';
// import { initializeApp } from 'firebase/app';
//  const firebaseConfig ={
// 	apiKey: "AIzaSyAQqU_C5Ed_eJd7zVqNgDpgZ61hdH05VAM",

//   authDomain: "login-g-auth.firebaseapp.com",

//   projectId: "login-g-auth",

//   storageBucket: "login-g-auth.appspot.com",

//   messagingSenderId: "739671893274",

//   appId: "1:739671893274:web:84cdb429c21acc0f34f8a3"

// };
// export default firebaseConfig;


// const app=initializeApp(firebaseConfig);
// var auth = app.auth();
// var provider = new app.auth.GoogleAuthProvider();
// export  {auth , provider};

// import firebase from "firebase/app";
// import "firebase/auth"
// const app=firebase.initializeApp({
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId:process.env.REACT_APP_APP_ID,
// });
// export const auth=firebase.auth();
// const googleProvider=new firebase.auth.googleauthProvider();
// export const signInWithGoogle=()=>{
//     auth.signInWithGoogle(googleProvider).then((res)=>{
//         console.log(res.user)
//     }).catch((error)=>{
//         console.log(error.message);
//     })
// }
// export default firebase
// // import firebase from "./firebase";
// // var firebaseconfig={
// //   apiKey: "AIzaSyAQqU_C5Ed_eJd7zVqNgDpgZ61hdH05VAM",

// //   authDomain: "login-g-auth.firebaseapp.com",

// //   projectId: "login-g-auth",

// //   storageBucket: "login-g-auth.appspot.com",

// //   messagingSenderId: "739671893274",

// //   appId: "1:739671893274:web:84cdb429c21acc0f34f8a3"

// // };
// // const fire=firebase.InitialzeApp(firebaseconfig);
// // export default fire;
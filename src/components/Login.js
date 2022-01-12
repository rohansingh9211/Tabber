import React,{useState} from 'react'
import GoogleLogin from 'react-google-login'
//import { useDispatch } from 'react-redux';
import {BsGoogle }from "react-icons/bs"
//import { login } from '../Features/Userslice';
const Login = () => {
	const [name,setName]=useState("");
	const responseGoogle=(response)=>{
		setName(response.profileObj.givenName);
	    console.log(response);
	    console.log(response.profiledata);
	}
	// const dispatch = useDispatch();
	// const handleClick=(e)=>{
	// 	e.preventDefault();
	// 	dispatch(login({
	// 		name:name,
	// 		logedin:true,
	// 	}));
	// }
	return (
		<div >
			<h6 style={{color:"aliceblue",position:"relative",top:"21px",right:"90px",fontfamily:"auto"}}>Welcome<br/>{name}</h6> 
			<GoogleLogin 
			clientId='1006355096392-d2a8ljlt39o7ef5clbfebop7l615dd8c.apps.googleusercontent.com'
            Client secret="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"
			render={renderProps=>(
				<button 
				onClick={renderProps.onClick}style={{background: "aliceblue",
					padding: "10px 10px",
					fontWeight: "800",
					fontsize: "inherit",
					color: "black",
					border:"1px solid grey",
					borderRadius:"10px",
					position:"relative",
					bottom:"2rem"		
					}}>
					LOGIN WITH <BsGoogle/></button>
			)}
            //buttonText='LOGIN'
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}/>
			
		</div>
	)
}

export default Login



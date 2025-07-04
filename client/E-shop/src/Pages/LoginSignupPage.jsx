import React, { useState } from 'react';
import './CSS/LoginSignup.css'

const LoginSignupPage = () => {

  const[state, setState] = useState("Login");
  const [formData, setFormData]= useState({
    username:"",
    email:"",
    password:""
  })
  const changeHandler = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const login = async()=>{
    console.log("login function",formData);
    let responseData;
    await fetch('http://localhost:5007/login',{
      method:'POST',
      headers:{
        Accept:"application/form-data",
        'Content-type':"application/json"
      },
      body:JSON.stringify(formData)
    })
    .then((response)=>response.json())
    .then((data)=> responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/")
    }
    else{
      alert(responseData.errors)
    }

  }


  const signup = async()=>{
    console.log("signup function", formData);
    let responseData;
    await fetch('https://e-shopping-lhmq.onrender.com/signup',{
      method:'POST',
      headers:{
        Accept:"application/form-data",
        'Content-type':"application/json"
      },
      body:JSON.stringify(formData)
    })
    .then((response)=>response.json())
    .then((data)=> responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/")
    }
    else{
      alert(responseData.errors)
    }

  }

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
         {state==="Signup" ? <input type="text" name='username' value={formData.username} onChange={changeHandler} placeholder='enter name' />: <></>}
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='enter email' />
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='enter password' />
        </div>
        <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
        {state === "Signup"?
        <p className='loginsignup-login'>
          Already have an account? <span onClick={()=>{setState("Login")}}>Login here</span>
        </p>
        :
        <p className='loginsignup-login'>
          Create an account? <span onClick={()=>{setState("Signup")}}>Click here</span>
        </p>}
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
      
    </div>
  )
}

export default LoginSignupPage

// import React from 'react'
import { GoogleLogin } from 'react-google-login'

const clientId = "211839551661-oef0iafjb9upjtk5a9q9j96ka48mb89c.apps.googleusercontent.com"

function Login() {
    const HandleSuccess = (res) => {
        console.log(res)
        console.log("LOGIN SUCCESS! Current User:", res.profileObj)
    }

    const HandleFailure = (res) => {
        console.log(res)
        console.log("LOGIN FAILED! res:", res)
    }

  return (
    <div className='signInButton'>
        <h1>Login</h1>
        <GoogleLogin 
            clientId={clientId} 
            buttonText='Login' 
            onSuccess={HandleSuccess} 
            onFailure={HandleFailure} 
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
        />
    </div>
  )
}

export default Login
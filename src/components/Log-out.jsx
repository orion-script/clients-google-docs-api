// import React from 'react'
import { GoogleLogout } from 'react-google-login'

const clientId = "211839551661-oef0iafjb9upjtk5a9q9j96ka48mb89c.apps.googleusercontent.com"

function Logout() {
  const HandleLogoutSuccess = () => {
    console.log("LOG OUT SUCCESSFULL!")
  }

  return (
    <div className='signOutButton'>
      <h1>Logout</h1>
      <GoogleLogout 
        clientId={clientId}
        buttonText={"Logout"}
        onLogoutSuccess={HandleLogoutSuccess}
      />
    </div>
  )
}

export default Logout
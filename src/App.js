import { useEffect } from 'react'
import './App.css'
import Login from './components/Log-in';
import Logout from './components/Log-out';
import { gapi } from "gapi-script"

const CLIENT_ID = "211839551661-oef0iafjb9upjtk5a9q9j96ka48mb89c.apps.googleusercontent.com";
const API_KEY = "AIzaSyAiB3h7O1LjgB0SXmvpv4K2kPHb7TFcxGk";
const SCOPES = "https://www.googleapis.com/auth/drive";


function App() {

  useEffect(() => {
    const start = () => {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        scope: SCOPES
      })
    };

    gapi.load("client:auth2", start)
  }, [])

  function zeroFill(i) {
    return (i < 10 ? '0' : '') + i; // 10
  }

  function getDateString() {
    const date = new Date();
    const year = date.getFullYear();
    const month = zeroFill(date.getMonth()+1);
    const day = zeroFill(date.getDate());
    return year + '-' + month + '-' + day;
  }

  function getTimeString() {
    const date = new Date();
    return date.toLocaleTimeString();
  }

  function createFile(tag) {
    const accessToken = gapi.auth.getToken().access_token;
    const fileName = tag + " Notes, " + getDateString() + " " + getTimeString();
    
    fetch("https://docs.googleapis.com/v1/documents?title=" +  fileName, {
      method: "POST",
      headers: new Headers({ "Authorization": "Bearer " + accessToken})
    }).then((res) => {
      return res.json();
    }).then( function(val) {
      console.log(val)
      console.log(val.documentId)
      window.open("https://docs.google.com/document/d/" + val.documentId + "/edit", "_blank");
    })
   }

  return (
    <>
      <h1>GOOGLE DOCS API</h1>
      <Login />
      <Logout />
      <button onClick={() => createFile("JOHN 200")}>Create JOHN 200 Notes</button>
      <button onClick={() => createFile("JOHN 201")}>Create JOHN 201 Notes</button>
      <button onClick={() => createFile("JOHN 202")}>Create JOHN 202 Notes</button>
    </>
  )
}

export default App

import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'
import './App.css'

function App() {

  const clientId = import.meta.env.VITE_CLIENT_ID;

  return (
    <>
      <h1>Tela de Login</h1>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={credentialResponse => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </GoogleOAuthProvider>
    </>
  )
}

export default App

import { useApolloClient } from '@apollo/client';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { LOGIN_USER } from '../../service/user.service';
import { useNavigate } from 'react-router';

function Login() {
  const navigate = useNavigate();
  const clientId = import.meta.env.VITE_CLIENT_ID;
  const client = useApolloClient(); // acesso direto ao Apollo Client

  return (
    <>
      <h1>Tela de Login</h1>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={async ({ credential }) => {
            try {
              if (credential) {
                console.log(credential)
                const { data } = await client.query({
                  query: LOGIN_USER,
                  variables: { token: credential },
                  fetchPolicy: 'no-cache', // garante que não usa cache
                });
                const payload = JSON.stringify(data.token);
                localStorage.setItem("Payload", payload)
                console.log(credential, data);
                navigate('/home');
              }
            } catch (error) {
              console.error('Erro ao fazer login:', error);
            }
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </GoogleOAuthProvider>
    </>
  );
}

export default Login;

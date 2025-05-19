


import { useLazyQuery, useQuery } from '@apollo/client';
import { useNavigate } from 'react-router';
import { GET_USERS, LOGOUT_USER } from './service/user.service';
import './App.css'

function Home() {
  const navigate = useNavigate();
  const {loading, error} = useQuery(GET_USERS)

  const [logoutUser] = useLazyQuery(LOGOUT_USER, {
  fetchPolicy: 'no-cache',
  onCompleted: () => {
    navigate('/');
  },
  onError: (err) => {
    console.error('Erro ao fazer logout:', err.message);
  }
});

if(loading) return <p>Loading...</p>
  if(error?.message == "User is not authenticated") navigate("/")
    
    
    
    
  return (
    <>
      <h1>Página inicial</h1>
      <button onClick={() => logoutUser()}>Sair</button>
    </>
  );
}


export default Home


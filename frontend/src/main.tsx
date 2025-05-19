import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ApolloProvider } from '@apollo/client'
import client from './apolloClient/config.ts'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Login from './pages/login/index.tsx'
import Home from './App.tsx'


const router = createBrowserRouter([
{
  path: "/",
  element: <Login/>
},
{
  path: "/home",
  element: <Home/>
}
])

createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </ApolloProvider>
)

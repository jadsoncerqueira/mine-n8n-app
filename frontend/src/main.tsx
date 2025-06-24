import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ApolloProvider } from '@apollo/client'
import client from './apolloClient/config.ts'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Login from './pages/login/index.tsx'
import Editor from './pages/editor/index.tsx'
import './index.css'


const router = createBrowserRouter([
{
  path: "/",
  element: <Login/>
},
{
  path: "/editor",
  element: <Editor/>
}
])

createRoot(document.getElementById('root')!).render(
      <ApolloProvider client={client}>
          <StrictMode>
          <RouterProvider router={router} />
        </StrictMode>
      </ApolloProvider>
)

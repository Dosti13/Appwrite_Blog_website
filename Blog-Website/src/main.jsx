import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './Store/Store.js'
import Home from './Pages/Home.jsx'
import Allpost from './Pages/Allpost.jsx'
import PageSignup from './Pages/Signup.jsx'
import Authlayout from './component/authLayout.jsx'
import AddPost from './Pages/AddPost.jsx'
import EditPost from './Pages/EdiitPost.jsx'
import Post from './Pages/Post.jsx'
import PLogin from './Pages/login.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Container } from './component/index.js'

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
          {
              path: "/",
              element: <Home />,
          },
          {
              path: "/login",
              element: (
                  <Authlayout authentication={false}>
                      <PLogin />
                  </Authlayout>
              ),
          },
          {
              path: "/signup",
              element: (
                <Authlayout authentication={false}>
                      <PageSignup />
                  </Authlayout>
              ),
          },
          {
              path: "/all-posts",
              element: (
                  <Authlayout authentication>
                      {" "}
                      <Allpost />
                  </Authlayout>
              ),
          },
          {
              path: "/add-post",
              element: (
                  <Authlayout authentication>
                      {" "}
                      <AddPost />
                  </Authlayout>
              ),
          },
          {
              path: "/edit-post/:slug",
              element: (
                <Authlayout authentication>
                      {" "}
                      <EditPost />
                  </Authlayout>
              ),
          },
          {
              path: "/post/:slug",
              element: <Post />,
            },
      ],
  },
])
createRoot(document.getElementById('root')).render(
<Provider store={store}>
<Container>
<RouterProvider router={router}/>
</Container>
</Provider>
)

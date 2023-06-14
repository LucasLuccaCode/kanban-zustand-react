import { createBrowserRouter } from 'react-router-dom'

import Root from '../pages/Root'
import Tasks from '../pages/Tasks'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Tasks />
      },
      {
        path: '/notes',
        element: <h1>Notas</h1>
      },
      {
        path: '/activities',
        element: <h1>Atividades</h1>
      },
      {
        path: '/about',
        element: <h1>Sobre</h1>
      },
    ],
  }
])
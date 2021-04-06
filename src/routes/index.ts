import Home from '@/views/Home'
import User from '@/views/User'

interface Route {
  compontent: React.ComponentType
  path: string
  exact?: boolean
}

const routes: Route[] = [
  {
    path: '/Home',
    compontent: Home,
  },
  {
    path: '/User',
    compontent: User,
  },
]

export default routes

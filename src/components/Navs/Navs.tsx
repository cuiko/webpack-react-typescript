import React from 'react'
import {
  Link
} from 'react-router-dom'

const Navs: React.FC = () => (
  <ul>
    <li>
      <Link to="/Home">首页</Link>
    </li>
    <li>
      <Link to="/User">用户</Link>
    </li>
  </ul>
)

export default Navs
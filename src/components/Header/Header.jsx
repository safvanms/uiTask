import React from 'react'
import './header.css'
import { CiSearch } from 'react-icons/ci'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { FiSettings } from 'react-icons/fi'

export default function Header() {
  return (
    <div className="header">
      <h3>App Title</h3>
      <div className="header-right-side">

        <div className="icons">
          <span>
            <CiSearch />
          </span>
          <span>
            <IoIosNotificationsOutline />
          </span>
          <span>
            <FiSettings />
          </span>
          
        </div>

        <div className="admin-profile">
          <img src="https://picsum.photos/300/300" alt="admin" />
          <h4>Super Admin</h4>
        </div>

      </div>
    </div>
  )
}

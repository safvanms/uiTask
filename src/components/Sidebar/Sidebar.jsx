import React, { useState } from 'react'
import './sidebar.css'
import { RxDashboard } from 'react-icons/rx'
import { FaUserTie } from 'react-icons/fa'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'

const dropdownList = [
  {
    link: '/',
    name: 'Inhouse',
  },
  {
    link: '#',
    name: 'Ex-Employees',
  },
  {
    link: '#',
    name: 'Add-Employees',
  },
]

export default function Sidebar() {
  const [spreadOption, setSpreadOption] = useState(false)

  const viewOptions = () => {
    setSpreadOption(!spreadOption)
  }

  return (
    <div className="sidebar">
      <div className="sidebar-sec">
        <div className="sidebar-option">
          <div className="dashboard">
            <RxDashboard fontSize={'22px'} />
            <h4>Dashboard</h4>
          </div>
        </div>

        <div
          className="sidebar-option"
          onClick={viewOptions}
          style={{
            backgroundColor: spreadOption && '#556ee6',
            color: spreadOption && 'white',
          }}
        >
          <div className="employee-option">
            <div>
              <FaUserTie fontSize={'22px'} />
              <h4>Employee</h4>
            </div>
            <div className="arrows">
              {spreadOption ? <BiChevronUp /> : <BiChevronDown />}{' '}
            </div>
          </div>
        </div>
        <div className="list">
          {spreadOption &&
            dropdownList.map((list) => (
              <ul key={list.name}>
                <NavLink
                  activeClassName="active"
                  to={list.link}
                  style={{ textDecoration: 'none' }}
                >
                  <li>{list.name}</li>
                </NavLink>
              </ul>
            ))}
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { BsPencil } from 'react-icons/bs'
import { BiLockAlt } from 'react-icons/bi'
import ThemeSwitch from './them-switch'

const SidebarIcons = ({ icon }) => {
  return <div className='icon'>{icon}</div>
}

const Sidebar = () => {
  return (
    <nav>
      <button onClick={() => window.open('/', '_self')}>
        <SidebarIcons icon={<AiOutlineHome />} />
      </button>
      <button
        onClick={() => window.open('/create', '_self')}
      >
        <SidebarIcons icon={<BsPencil />} />
      </button>
      <button
        onClick={() => window.open('/login', '_self')}
      >
        <SidebarIcons icon={<BiLockAlt />} />
      </button>
      <ThemeSwitch />
    </nav>
  )
}

export default Sidebar

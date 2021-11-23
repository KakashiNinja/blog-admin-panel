import React from 'react'
import Link from 'next/link'
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
      <Link href='/'>
        <a>
          <SidebarIcons icon={<AiOutlineHome />} />
        </a>
      </Link>

      <Link href='/create'>
        <a>
          <SidebarIcons icon={<BsPencil />} />
        </a>
      </Link>

      <Link href='/login'>
        <a>
          <SidebarIcons icon={<BiLockAlt />} />
        </a>
      </Link>
      <ThemeSwitch />
    </nav>
  )
}

export default Sidebar

import React from "react"
import Link from "next/link"
import { AiOutlineHome } from "react-icons/ai"
import { BsPencil, BsTwitter } from "react-icons/bs"
import { BiLockAlt } from "react-icons/bi"
import ThemeSwitch from "./them-switch"
import { RiGithubLine } from "react-icons/ri"

const SidebarIcons = ({ icon }) => {
  return <div className='icon'>{icon}</div>
}

const Sidebar = ({ userAuth }) => {
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

      <Link href={userAuth ? "/logout" : "/login"}>
        <a>
          <SidebarIcons icon={<BiLockAlt />} />
        </a>
      </Link>

      <Link href='https://github.com/DevChaudhary78' target='_blank'>
        <a target='_blank'>
          <SidebarIcons icon={<RiGithubLine />} />
        </a>
      </Link>

      <Link href='https://twitter.com/smashydevz7854'>
        <a target='_blank'>
          <SidebarIcons icon={<BsTwitter />} />
        </a>
      </Link>
      <ThemeSwitch />
    </nav>
  )
}

export default Sidebar

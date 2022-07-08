import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs"
import { FaFire, FaPoo } from "react-icons/fa"

const Sidebar = () => {
  return (
    <div className="fixed top-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white">
      <SidebarIcon icon={<FaFire size="28" />} text="home" />
      <SidebarIcon icon={<BsPlus size="32" />} text="add server" />
      <SidebarIcon
        icon={<BsFillLightningFill size="20" />}
        text="supercharge"
      />
      <SidebarIcon icon={<FaPoo size="20" />} text="poop" />
    </div>
  )
}

const SidebarIcon = ({ icon, text = " tooltip 💡" }) => {
  return (
    <div className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  )
}

export default Sidebar

import { List, X } from '@phosphor-icons/react';
import { useState } from 'react';
import { IconSize } from '../../constants/icon-size.constants';
import { SideBarItems } from '../../data/SidebarData';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const Sidebar = () => {
    const location = useLocation();
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };
    return (
        <div>
            <span
                className="absolute text-white text-4xl top-5 left-4 cursor-pointer lg:hidden"
                onClick={toggleSidebar}
            >
                <div className='size-8'>
                    <List color='black' size={IconSize.M} />
                </div>
            </span>

            <div
                className={`sidebar fixed top-0 bottom-0 lg:left-0 ${isSidebarOpen ? 'left-0' : '-left-[var(--sidebar-width)]'} duration-1000
        p-2 w-[var(--sidebar-width)] overflow-y-auto text-center bg-[#11151e] shadow h-screen`}
            >
                <div className="text-gray-100 text-xl">
                    <div className="p-2.5 my-2 flex items-center rounded-md justify-between mb-5">
                        <img src="https://taiyo.ai/wp-content/uploads/Taiyo-logo.png" alt="" className='w-20' />
                        <X size={IconSize.S} className=" cursor-pointer lg:hidden" onClick={toggleSidebar} />
                    </div>
                    {SideBarItems.map((item) => {
                        return (
                            <Link key={item.title} to={item.link} onClick={toggleSidebar}>
                                <div className={`p-3.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer ${location.pathname !== item.link && "hover:bg-[#374151]"} ${location.pathname === item.link ? 'bg-[#fff]' : ''}`}>
                                    <div style={{ color: `${location.pathname === item.link ? 'black' : 'white'}` }}>
                                        {item.icon}
                                    </div>
                                    <span className={`text-[15px] ml-4 ${location.pathname === item.link ? 'text-black' : 'text-gray-200'} `}>{item.title}</span>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'

type Props = {
    children: React.ReactNode
}

const  DashboardLayout =({children}: Props)=> {
  return (
    <div className='flex '>
      <div className='w-[var(--sidebar-width)] lg:w-[var(--sidebar-width)] z-[10000] fixed sm:w-11 '>
        <Sidebar/>
      </div>
      <main className='lg:pl-[var(--sidebar-width)] sm:pl-11 w-full h-screen' >
          {children}
      </main>
    </div>
  )
}

export default DashboardLayout
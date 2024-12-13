import React from 'react'
import Sidebar from '../SuperAdminMain/Sidebar'
import Report from '../ReportManagement/Report'


const ReportPage = () => {
  return (
    <section className="w-full flex">
        <Sidebar/>
        <Report/>
    </section>
  )
}

export default ReportPage
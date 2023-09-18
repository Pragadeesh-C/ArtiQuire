import React from 'react'
import '../../Styles/Dashboard.css'
import Table from '../../components/Table'
import Navbar from '../../components/Navbar'

const Dashboard = () => {
  return (
 
    <Table title={'Shipments'} status={'Active Shipments'} job={'VendorName'} product={"Product"}/>

  )
}

export default Dashboard

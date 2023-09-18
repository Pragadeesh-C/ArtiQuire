import React from 'react'
import '../../Styles/Dashboard.css'
import Table from '../../components/Table'
import Navbar from '../../components/Navbar'

const Orders = () => {
  return (
 
    <Table title={'Orders'} status={'Current Orders'} job={'SupplierName'} product={"Material"} details={'Company'} credentials={'Email'} Location={'Location'}/>

  )
}

export default Orders
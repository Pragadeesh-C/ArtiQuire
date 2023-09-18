import React from 'react'
import '../../Styles/Dashboard.css'
import Table from '../../components/Table'
import Navbar from '../../components/Navbar'

const SuppliersList = () => {
  return (
    <Table title={'Suppliers'} status={'Active Suppliers'} job={'SupplierName'} product={"Material"} details={'PhoneNumber'} credentials={'Email'} Location={'Location'}/>

  )
}

export default SuppliersList
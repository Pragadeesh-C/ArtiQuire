import React from 'react'
import '../../Styles/Dashboard.css'
import Table from '../../components/Table'
import Navbar from '../../components/Navbar'

const ManufacturersList = () => {
  return (
 
    <Table title={'Manufracturer'} status={"Active Manufracturer’s"} job={'Supplier Name'} product={"Products"} details={'PhoneNumber'} credentials={'Email'} Location={'Location'}/>

  )
}

export default ManufacturersList
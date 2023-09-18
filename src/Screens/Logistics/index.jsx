import React from 'react'
import '../../Styles/Dashboard.css'
import Table from '../../components/Table'
import Navbar from '../../components/Navbar'

const Logistics = () => {
  return (
 
    <Table title={'Logistics'} status={''} job={'DriverName'} product={"Vehicle License Plate"} details={'PhoneNumber'} credentials={'Email'} Location={'Location'}/>

  )
}

export default Logistics
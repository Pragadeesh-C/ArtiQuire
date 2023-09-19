import React, { useEffect, useState } from 'react';
import '../../Styles/Dashboard.css';
import Table from '../../components/Table';
import SplineChart from '../../components/Graph';
import { db } from '../../utils/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import ManufracturerOrder from '../Manufacturers';

const Dashboard = () => {
  const [IsVisible, setIsVisible] = useState(true);
  const [producerData, setProducerData] = useState([]);

  // useEffect(() => {
  //   if (location.pathname === '/' || location.pathname === '/register') {
  //     setIsVisible(false);
  //   } else {
  //     setIsVisible(true);
  //   }

  //   const fetchProducerData = async () => {
  //     const q = query(collection(db, 'UsersData'), where('role', '==', 'Producer'));

  //     try {
  //       const querySnapshot = await getDocs(q);

  //       const producerDataArray = [];
  //       querySnapshot.forEach((doc) => {
  //         producerDataArray.push(doc.data());
  //       });

  //       setProducerData(producerDataArray);
  //       console.log('Producer Data:', producerDataArray);
  //     } catch (error) {
  //       console.error('Error fetching producer data:', error);
  //     }
  //   };

  //   fetchProducerData();
  // }, []);

  return (
    <div className='dashboard'>
      <SplineChart />
      <ManufracturerOrder></ManufracturerOrder>
    </div>
  );
};

export default Dashboard;

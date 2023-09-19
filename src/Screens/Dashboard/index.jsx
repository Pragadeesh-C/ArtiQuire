<<<<<<< HEAD
import React, { useEffect } from "react";
import "../../Styles/Dashboard.css";
import Table from "../../components/Table";
import SplineChart from "../../components/Graph";

const Dashboard = () => {
  const getProducerData = async () => {
    try {
      const querySnapshot = await db
        .collection("UsersData")
        .where("role", "==", "Producer")
        .get();

      const producerDataArray = [];
      querySnapshot.forEach((doc) => {
        producerDataArray.push(doc.data());
      });

      setProducerData(producerDataArray);
      console.log("Producer Data:", producerDataArray);
    } catch (error) {
      console.error("Error fetching producer data:", error);
    }
  };

  useEffect(() => {
    // fetchData();
  }, []);

  return (
    <div className="dashboard">
      <SplineChart />
      <Table
        title={"Shipments"}
        status={"Active Shipments"}
        job={"VendorName"}
        product={"Product"}
        details={"PhoneNumber"}
        credentials={"Email"}
        Location={"Location"}
      />
=======
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

  useEffect(() => {
    if (location.pathname === '/' || location.pathname === '/register') {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    const fetchProducerData = async () => {
      const q = query(collection(db, 'UsersData'), where('role', '==', 'Producer'));

      try {
        const querySnapshot = await getDocs(q);

        const producerDataArray = [];
        querySnapshot.forEach((doc) => {
          producerDataArray.push(doc.data());
        });

        setProducerData(producerDataArray);
        console.log('Producer Data:', producerDataArray);
      } catch (error) {
        console.error('Error fetching producer data:', error);
      }
    };

    fetchProducerData();
  }, []);

  return (
    <div className='dashboard'>
      <SplineChart />
      <ManufracturerOrder></ManufracturerOrder>
>>>>>>> dd046037cf198b6cbce4562ab8914da79edccda6
    </div>
  );
};

export default Dashboard;

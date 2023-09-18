import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {
  Sidebar,
  Menu,
  MenuItem,
  useProSidebar,
  SubMenu,
} from "react-pro-sidebar";
import {BsMinecartLoaded} from 'react-icons/bs'

const Navbar = () => {
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
    useProSidebar();
  const toggle = () => {
    toggleSidebar();
    if (toggled) {
      console.log(true);
      collapseSidebar();
    } else {
      console.log(false);
      collapseSidebar();
    }
  };
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    if (location.pathname === "/") {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, []);

  return (
    <>
      {isVisible && (
        <Sidebar
          backgroundColor="rgb(0, 249, 249)"
          rtl={false}
          style={{ height: "100vh", position: "absolute", left: 0 }}
          breakPoint="sm"
          transitionDuration={800}
        >
          <Menu>
            <MenuItem
              icon={<MenuOutlinedIcon />}
              onClick={() => {
                collapseSidebar();
              }}
              style={{ textAlign: "center" }}
            >
              {" "}
              <h2>Dashboard</h2>
            </MenuItem>
            <MenuItem icon={<BsMinecartLoaded />}>Dashboard</MenuItem>
            <SubMenu icon={<BsMinecartLoaded />} label="Vendors">
              <MenuItem icon={<BsMinecartLoaded />}>List</MenuItem>
              <MenuItem icon={<BsMinecartLoaded />}>Orders</MenuItem>
            </SubMenu>
            <SubMenu icon={<BsMinecartLoaded />} label="Suppliers">
              <MenuItem icon={<BsMinecartLoaded />}>List</MenuItem>
              <MenuItem icon={<BsMinecartLoaded />}>Orders</MenuItem>
            </SubMenu>
            <SubMenu icon={<BsMinecartLoaded />} label="Manufacturer">
              <MenuItem icon={<BsMinecartLoaded />}>List</MenuItem>
              <MenuItem icon={<BsMinecartLoaded />}>Orders</MenuItem>
            </SubMenu>
            <SubMenu icon={<BsMinecartLoaded />} label="Finance">
              <MenuItem icon={<BsMinecartLoaded />}>List</MenuItem>
              <MenuItem icon={<BsMinecartLoaded />}>Orders</MenuItem>
            </SubMenu>
            <SubMenu icon={<BsMinecartLoaded />} label="Logistics">
              <MenuItem icon={<BsMinecartLoaded />}>List</MenuItem>
              <MenuItem icon={<BsMinecartLoaded />}>Orders</MenuItem>
            </SubMenu>
            <SubMenu icon={<BsMinecartLoaded />} label="Inventory Management">
              <MenuItem icon={<BsMinecartLoaded />}>List</MenuItem>
              <MenuItem icon={<BsMinecartLoaded />}>Orders</MenuItem>
            </SubMenu>
            <SubMenu icon={<BsMinecartLoaded />} label="Returns">
              <MenuItem icon={<BsMinecartLoaded />}>List</MenuItem>
              <MenuItem icon={<BsMinecartLoaded />}>Orders</MenuItem>
            </SubMenu>
            <SubMenu icon={<BsMinecartLoaded />} label="Income">
              <MenuItem icon={<BsMinecartLoaded />}>List</MenuItem>
              <MenuItem icon={<BsMinecartLoaded />}>Orders</MenuItem>
            </SubMenu>
            <MenuItem icon={<HelpOutlineOutlinedIcon />}>FAQ</MenuItem>
            <MenuItem icon={<ReceiptOutlinedIcon />}>Profile</MenuItem>
          </Menu>
        </Sidebar>
      )}
    </>
  );
};

export default Navbar;

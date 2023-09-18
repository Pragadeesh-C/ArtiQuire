import React, { useEffect, useState } from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  useProSidebar,
  SubMenu,
} from "react-pro-sidebar";
import { BsMinecartLoaded } from "react-icons/bs";
import { FiTruck, FiBox } from "react-icons/fi";
import { AiOutlineBank } from "react-icons/ai";
import { VscTools } from "react-icons/vsc";
import { LiaWalletSolid } from "react-icons/lia";
import { MdOutlineDashboard } from "react-icons/md";
import { TbMessageReport, TbTruckReturn } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import "../../Styles/Navbar.css";
import { HiMenuAlt1 } from "react-icons/hi";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";

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
          backgroundColor="#FFF"
          rtl={false}
          style={{ height: "100vh", position: "absolute", left: 0 }}
          breakPoint="sm"
          transitionDuration={800}
        >
          <Menu>
            <MenuItem
              icon={<HiMenuAlt1 />}
              onClick={() => {
                collapseSidebar();
              }}
              style={{
                textAlign: "center",
                fontFamily: "Poppins",
                fontWeight: "600",
                fontSize: 20,
              }}
            >
              {""}
              ArtiQuire
            </MenuItem>
            <MenuItem
              rootStyles={{ color: "#9197B3" }}
              className="submenu"
              icon={<MdOutlineDashboard size={20} color="#9197B3" />}
            >
              Dashboard
            </MenuItem>
            <SubMenu
              rootStyles={{ color: "#9197B3" }}
              className="submenu"
              icon={<HiOutlineBuildingStorefront size={20} color="#9197B3" />}
              label="Vendors"
            >
              <MenuItem color="black">List</MenuItem>
              <MenuItem>Orders</MenuItem>
            </SubMenu>
            <SubMenu
              rootStyles={{ color: "#9197B3" }}
              className="submenu"
              icon={<BsMinecartLoaded size={20} color="#9197B3" />}
              label="Suppliers"
            >
              <MenuItem>List</MenuItem>
              <MenuItem>Orders</MenuItem>
            </SubMenu>
            <SubMenu
              rootStyles={{ color: "#9197B3" }}
              className="submenu"
              icon={<VscTools size={20} color="#9197B3" />}
              label="Manufacturer"
            >
              <MenuItem>List</MenuItem>
              <MenuItem>Orders</MenuItem>
            </SubMenu>
            <SubMenu
              rootStyles={{ color: "#9197B3" }}
              className="submenu"
              icon={<AiOutlineBank size={20} color="#9197B3" />}
              label="Finance"
            >
              <MenuItem>List</MenuItem>
              <MenuItem>Orders</MenuItem>
            </SubMenu>
            <SubMenu
              rootStyles={{ color: "#9197B3" }}
              className="submenu"
              icon={<FiTruck size={20} color="#9197B3" />}
              label="Logistics"
            >
              <MenuItem>List</MenuItem>
              <MenuItem>Orders</MenuItem>
            </SubMenu>
            <SubMenu
              rootStyles={{ color: "#9197B3" }}
              className="submenu"
              icon={<FiBox size={20} color="#9197B3" />}
              label="Inventory Management"
            >
              <MenuItem>List</MenuItem>
              <MenuItem>Orders</MenuItem>
            </SubMenu>
            <SubMenu
              rootStyles={{ color: "#9197B3" }}
              className="submenu"
              icon={<TbTruckReturn size={20} color="#9197B3" />}
              label="Returns"
            >
              <MenuItem>List</MenuItem>
              <MenuItem>Orders</MenuItem>
            </SubMenu>
            <SubMenu
              rootStyles={{ color: "#9197B3" }}
              className="submenu"
              icon={<LiaWalletSolid size={20} color="#9197B3" />}
              label="Income"
            >
              <MenuItem>List</MenuItem>
              <MenuItem>Orders</MenuItem>
            </SubMenu>
            <MenuItem
              className="submenu"
              rootStyles={{ color: "#9197B3" }}
              icon={<TbMessageReport size={20} color="#9197B3" />}
            >
              FAQ
            </MenuItem>
            <MenuItem
              className="submenu"
              rootStyles={{ color: "#9197B3" }}
              icon={<CgProfile size={20} color="#9197B3" />}
            >
              Profile
            </MenuItem>
          </Menu>
        </Sidebar>
      )}
    </>
  );
};

export default Navbar;

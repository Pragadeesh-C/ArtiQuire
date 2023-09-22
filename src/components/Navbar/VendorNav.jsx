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
import { Link } from "react-router-dom";

const VendorNav = () => {
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
    if (location.pathname === "/" || location.pathname === "/register") {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, [location.pathname]);

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
              component={<Link to="/dashboard" />}
            >
              Dashboard
            </MenuItem>
            <SubMenu
              rootStyles={{ color: "#9197B3" }}
              className="submenu"
              icon={<VscTools size={20} color="#9197B3" />}
              label="Producer"
            >
              <MenuItem component={<Link to="/manufacturerlist" />}>
                List
              </MenuItem>
              <MenuItem component={<Link to="/vendorOrder" />}>
                Orders
              </MenuItem>
            </SubMenu>
          </Menu>
        </Sidebar>
      )}
    </>
  );
};

export default VendorNav;

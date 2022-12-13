import React, { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="global-layout">
      <Navbar />
      <Sidebar />
      <div className="children">
        {children}
      </div>
    </div>
  );
};

export default Layout;

/**<Header/>
        <Sidebar/> */

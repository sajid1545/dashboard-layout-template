import { Outlet } from "react-router-dom";
import DashboardNavbar from "../components/DashboardNav";


const MainLayout = () => {
  return (
    <>
      <DashboardNavbar />
      <Outlet />
    </>
  );
};

export default MainLayout;
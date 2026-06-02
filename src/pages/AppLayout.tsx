import { Outlet } from "react-router";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";

const AppLayout = () => {
  return (
    <>
      <Banner />
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <p>Footer</p>
      <p>cart sidebar</p>
    </>
  );
};

export default AppLayout;

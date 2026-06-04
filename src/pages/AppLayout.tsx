import { Outlet } from "react-router";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AppLayout = () => {
  return (
    <>
      <Banner />
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      {/* <p>cart sidebar</p> */}
    </>
  );
};

export default AppLayout;

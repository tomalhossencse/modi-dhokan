import { Outlet } from "react-router";
import Banner from "../components/Banner";

const AppLayout = () => {
  return (
    <>
      <Banner />
      <p>Navbar</p>
      <main className="min-h-screen">
        <Outlet />
      </main>
      <p>Footer</p>
      <p>cart sidebar</p>
    </>
  );
};

export default AppLayout;

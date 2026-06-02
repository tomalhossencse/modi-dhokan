import { Outlet } from "react-router";

const AppLayout = () => {
  return (
    <>
      <p>banner</p>
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

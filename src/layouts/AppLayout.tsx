import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavMenu from "../components/NavMenu";
import Logo from "../components/Logo";

export default function AppLayout() {
  return (
    <>
       <header className="bg-gray-800 py-5" >
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-between items-center">
            <Logo />
            <NavMenu />
        </div>
       </header>
       <section className="max-w-screen-2xl mx-auto mt-10 p-5 bg-#141414">
        <Outlet />
       </section>
       <footer className="py-5 bg-gray-800 text-white">
        <p className="text-center">
            ANIME STACK - Todos los derechos reservados { new Date().getFullYear() }
        </p>
       </footer>
       <ToastContainer 
          pauseOnHover={false}
          pauseOnFocusLoss={false}
       />
    </>
  )
}

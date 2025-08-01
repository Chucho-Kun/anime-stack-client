import { Link, NavLink } from "react-router-dom"
import animeStackLogo from "../assets/logo.svg"

export default function Logo() {
  return (
    <nav className="flex flex-col sm:flex-row items-center px-6 h-auto sm:h-16 mb-5"
      style={{ minWidth: 0 }}
    >
      <Link to="/" className="flex-shrink-0">
        <img src={animeStackLogo} alt="Anime Stack Logo" className="h-20 sm:mr-8 mb-2 sm:mb-0" />
      </Link>

      <div className="flex flex-row ">
        <NavLink
          to="/"
          className="text-pink-400 uppercase font-bold mx-4 text-base hover:text-orange-400"
        >
          Inicio
        </NavLink>
        <NavLink
          to="/"
          className="text-pink-400 uppercase font-bold mx-4 text-base hover:text-orange-400"
        >
          Animes
        </NavLink>
        <NavLink
          to="/anime/add"
          className="text-pink-400 uppercase font-bold mx-4 text-base hover:text-orange-400"
        >
          Agregar
        </NavLink>
      </div>
    </nav>
  )
}
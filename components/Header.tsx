'use client'; // Necesario para componentes que usan hooks como useState

import Link from "next/link";
import { Car, Menu, X } from "lucide-react"; // Agregamos Menu y X para el ícono hamburguesa
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm border-b fixed top-0 left-0 w-full z-10 min-h-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Car className="h-8 w-8 text-[#CE987E]" />
            <span className="text-2xl font-bold text-gray-900">
              Troncone Motors
            </span>
          </div>

          {/* Botón hamburguesa - visible solo en mobile */}
          <button
            className="md:hidden z-20"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-900" />
            ) : (
              <Menu className="h-6 w-6 text-gray-900" />
            )}
          </button>

          {/* Menú de navegación */}
          <nav
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none items-center space-y-4 md:space-y-0 md:space-x-8 py-4 md:py-0 transition-all duration-300 ease-in-out`}
          >
            <Link
              href="#inicio"
              className="text-gray-700 hover:text-[#CE987E] font-medium hover:scale-105 transition-transform"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/autos"
              className="text-gray-700 hover:text-[#CE987E] font-medium hover:scale-105 transition-transform"
              onClick={() => setIsMenuOpen(false)}
            >
              Autos
            </Link>
            <Link
              href="#servicios"
              className="text-gray-700 hover:text-[#CE987E] font-medium hover:scale-105 transition-transform"
              onClick={() => setIsMenuOpen(false)}
            >
              Servicios
            </Link>
            <Link
              href="#nosotros"
              className="text-gray-700 hover:text-[#CE987E] font-medium hover:scale-105 transition-transform"
              onClick={() => setIsMenuOpen(false)}
            >
              Nosotros
            </Link>
            <Link
              href="#contacto"
              className="text-gray-700 hover:text-[#CE987E] font-medium hover:scale-105 transition-transform"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

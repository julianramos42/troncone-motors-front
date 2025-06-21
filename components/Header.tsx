"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; // 1. Importa el hook correcto
import { Car, Menu, X } from "lucide-react";
import { useState } from "react";

// (Mejora) Definimos los enlaces de navegación en un array para un código más limpio
const navLinks = [
  { href: "/autos", label: "Autos" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#nosotros", label: "Nosotros" },
  { href: "/#contacto", label: "Contacto" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 2. Usa el hook usePathname para obtener la ruta actual de forma segura
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Función para cerrar el menú al hacer clic en un enlace (en móvil)
  const handleLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-sm border-b fixed top-0 left-0 w-full z-50 min-h-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2"
            onClick={handleLinkClick}
          >
            <Car className="h-8 w-8 text-[#CE987E]" />
            <span className="text-2xl font-bold text-gray-900">
              Troncone Motors
            </span>
          </Link>

          {/* Botón hamburguesa - visible solo en mobile */}
          <button
            className="md:hidden z-50"
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
            } md:flex flex-col md:flex-row absolute md:static top-0 left-0 w-full h-screen md:h-auto md:w-auto bg-white md:bg-transparent items-center justify-center md:justify-end space-y-6 md:space-y-0 md:space-x-8 transition-all duration-300 ease-in-out`}
          >
            {pathname === "/" && (
              <Link
                href={"#inicio"}
                className={`text-lg md:text-base font-medium transition-colors text-[#CE987E]`}
              >
                Inicio
              </Link>
            )}
            {pathname.startsWith("/autos") && (
              <Link
                href={"/"}
                className={`text-lg md:text-base font-medium transition-colors text-gray-700`}
              >
                Inicio
              </Link>
            )}
            {/* 3. (Mejora) Mapeamos el array de enlaces para generar el menú */}
            {navLinks.map((link) => {
              // Comprueba si el enlace actual es la página activa
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-lg md:text-base font-medium transition-colors ${
                    pathname.startsWith('/autos') && link.href === "/autos"
                      ? "text-[#CE987E]"
                      : "text-gray-700 hover:text-[#CE987E]"
                  }`}
                  onClick={handleLinkClick}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}

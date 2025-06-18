import { Button } from "@/components/ui/button"
import Link from "next/link";
import { Car, Phone } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Car className="h-8 w-8 text-[#CE987E]" />
            <span className="text-2xl font-bold text-gray-900">
              Elite Motors
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#inicio"
              className="text-gray-700 hover:text-[#CE987E] font-medium"
            >
              Inicio
            </Link>
            <Link
              href="#inventario"
              className="text-gray-700 hover:text-[#CE987E] font-medium"
            >
              Inventario
            </Link>
            <Link
              href="#servicios"
              className="text-gray-700 hover:text-[#CE987E] font-medium"
            >
              Servicios
            </Link>
            <Link
              href="#nosotros"
              className="text-gray-700 hover:text-[#CE987E] font-medium"
            >
              Nosotros
            </Link>
            <Link
              href="#contacto"
              className="text-gray-700 hover:text-[#CE987E] font-medium"
            >
              Contacto
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="h-4 w-4" />
              <span>(555) 123-4567</span>
            </div>
            <Button className="bg-[#363435] hover:bg-[#2a2829]">
              Financiamiento
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

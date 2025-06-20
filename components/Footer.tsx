import {
  Car,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Car className="h-8 w-8 text-[#CE987E]" />
                <span className="text-2xl font-bold">Troncone <span className="text-amber-500">Motors</span></span>
              </div>
              <p className="text-gray-400 mb-4">Tu concesionaria de confianza para autos nuevos y usados.</p>
              <div className="flex space-x-4">              
                <Link href={''}><Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" /></Link>
                <Link href={''}><Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" /></Link>
                <Link href={''}><Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" /></Link>               
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/autos" className="hover:text-white">
                    Autos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Financiamiento
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Garantías
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Venta de Autos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Financiamiento
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Servicio Técnico
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Repuestos
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contacto</h3>
              <div className="space-y-2 text-gray-400">
                <div>Av. Hipolito Yrigoyen 14832, Burzaco, Buenos Aires</div>
                <div>+54 9 11 3743-7882</div>
                <div>----------</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Troncone Motors. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
  )
}

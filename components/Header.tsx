import Link from "next/link";
import { Car } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b fixed top-0 left-0 w-full z-10">
      <div>
        <div className="flex items-center justify-between h-16">
            {/* PONER LOGO EN IMAGEN  */}
          <div className="absolute ml-5 flex items-center space-x-2">
            <Car className="h-8 w-8 text-[#CE987E]" />
            <span className="text-2xl font-bold text-gray-900">
              Troncone Motors
            </span>
          </div>

          <nav className="flex-1 flex justify-center items-center space-x-8 w-auto">
            <Link
              href="#inicio"
              className="text-gray-700 hover:text-[#CE987E] font-medium"
            >
              Inicio
            </Link>
            <Link
              href="#garage"
              className="text-gray-700 hover:text-[#CE987E] font-medium"
            >
              Garage
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

        </div>
      </div>
    </header>
  );
}

{/* <Link
                href={
                  "https://api.whatsapp.com/send?phone=+5491137437882&text=Hola,%20me%20gustaría%20obtener%20más%20información"
                }
                target="_blank"
                className="hover:scale-105"
              >
                <Image
                  src={"/whatsapp.png"}
                  alt="whatsapp logo"
                  width={30}
                  height={30}
                  className="rounded-lg"
                ></Image>
              </Link> */}
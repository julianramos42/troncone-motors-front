import { Button } from "@/components/ui/button"
import { Car } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <Car className="h-24 w-24 text-[#CE987E] mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Vehículo no encontrado</h1>
        <p className="text-xl text-gray-600 mb-8">
          Lo sentimos, el vehículo que buscas no está disponible o no existe.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/autos">
            <Button className="bg-[#363435] hover:bg-[#2a2829]">Ver Autos Disponibles</Button>
          </Link>
          <Link href="/">
            <Button variant="outline">Volver al Inicio</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

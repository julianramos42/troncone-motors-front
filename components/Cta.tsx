import { Button } from "./ui/button"

export default function Cta() {
  return (
    <section className="py-16 bg-[#363435] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">¿Listo para Encontrar tu Auto Ideal?</h2>
          <p className="text-xl mb-8 text-[#E3E3E3]">
            Contáctanos hoy y te ayudaremos a encontrar el vehículo perfecto para ti
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 px-8">
              Ver Inventario Completo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#363435] px-8"
            >
              Solicitar Cotización
            </Button>
          </div>
        </div>
      </section>
  )
}

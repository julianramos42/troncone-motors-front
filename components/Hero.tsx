import { Button } from "@/components/ui/button"
import { Badge } from '@/components/ui/badge'

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-16 from-[#363435] to-[#2a2829] text-white bg-[url('/bg.svg')] bg-cover bg-no-repeat bg-center ">
        <div className="absolute inset-0 backdrop-blur-sm bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-amber-500 text-white px-4 py-2 cursor-default">Más de 15 años de experiencia</Badge>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Encontrá tu
                <span className="text-amber-400"> Auto Perfecto</span>
              </h1>
              <p className="text-xl text-[#E3E3E3] leading-relaxed">
                La mayor selección de autos usados y nuevos con garantía, financiamiento flexible y el mejor servicio al
                cliente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white px-8 hover:scale-105">
                  Ver Disponbiles
                </Button>
                <Button
                  size="lg"
                  className="bg-amber-500 hover:bg-amber-600 text-white px-8 hover:scale-105"
                >
                  Solicitar Financiamiento
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 pt-8">
                <div className="text-center md:text-start">
                  <div className="text-3xl font-bold text-amber-400">500+</div>
                  <div className="text-sm text-[#E3E3E3]/80">Autos Vendidos</div>
                </div>
                <div className="text-center md:text-start">
                  <div className="text-3xl font-bold text-amber-400">98%</div>
                  <div className="text-sm text-[#E3E3E3]/80">Clientes Satisfechos</div>
                </div>
                <div className="text-center md:text-start">
                  <div className="text-3xl font-bold text-amber-400">15+</div>
                  <div className="text-sm text-[#E3E3E3]/80">Años de Experiencia</div>
                </div>
              </div>
            </div>

            {/* <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Auto destacado"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="font-semibold">4.9/5</span>
                  <span className="text-gray-600">• 250+ reseñas</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
  )
}

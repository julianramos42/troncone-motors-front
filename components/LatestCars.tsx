import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Car, Calendar } from "lucide-react"
import Image from "next/image"

export default function LatestCars() {
  return (
    <section id="inventario" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Vehículos Destacados</h2>
            <p className="text-xl text-gray-600">Nuestra selección premium de autos usados y nuevos</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Toyota Camry 2022",
                price: "$24,999",
                mileage: "15,000 km",
                fuel: "Gasolina",
                transmission: "Automático",
                condition: "Usado",
                image: "/placeholder.svg?height=250&width=400",
              },
              {
                title: "Honda Civic 2023",
                price: "$28,500",
                mileage: "8,000 km",
                fuel: "Gasolina",
                transmission: "Manual",
                condition: "Seminuevo",
                image: "/placeholder.svg?height=250&width=400",
              },
              {
                title: "Ford Explorer 2024",
                price: "$45,000",
                mileage: "0 km",
                fuel: "Gasolina",
                transmission: "Automático",
                condition: "Nuevo",
                image: "/placeholder.svg?height=250&width=400",
              },
            ].map((car, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={car.image || "/placeholder.svg"}
                    alt={car.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                  <Badge
                    className={`absolute top-4 left-4 ${
                      car.condition === "Nuevo"
                        ? "bg-green-500"
                        : car.condition === "Seminuevo"
                          ? "bg-[#CE987E]"
                          : "bg-amber-500"
                    }`}
                  >
                    {car.condition}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{car.title}</h3>
                  <div className="text-2xl font-bold text-[#CE987E] mb-4">{car.price}</div>

                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {car.mileage}
                    </div>
                    <div className="flex items-center">
                      <Car className="h-4 w-4 mr-2" />
                      {car.fuel}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1 bg-[#363435] hover:bg-[#2a2829]">Ver Detalles</Button>
                    <Button variant="outline" className="flex-1">
                      Contactar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="px-8">
              Ver Todo el Inventario
            </Button>
          </div>
        </div>
      </section>
  )
}

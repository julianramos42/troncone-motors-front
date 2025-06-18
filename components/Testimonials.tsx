import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function Testimonials() {
  return (
    <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Lo Que Dicen Nuestros Clientes</h2>
            <p className="text-xl text-gray-600">Testimonios reales de clientes satisfechos</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "María González",
                rating: 5,
                comment:
                  "Excelente servicio y atención. Encontré el auto perfecto para mi familia y el proceso de financiamiento fue muy fácil.",
                car: "Honda CR-V 2021",
              },
              {
                name: "Carlos Rodríguez",
                rating: 5,
                comment:
                  "Muy profesionales y honestos. Me ayudaron a encontrar un auto usado en excelentes condiciones dentro de mi presupuesto.",
                car: "Toyota Corolla 2020",
              },
              {
                name: "Ana Martínez",
                rating: 5,
                comment:
                  "La mejor experiencia comprando un auto. El equipo fue muy paciente y me explicaron todo el proceso paso a paso.",
                car: "Nissan Sentra 2022",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.comment}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">Compró: {testimonial.car}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
  )
}

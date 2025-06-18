import { Card, CardContent } from "@/components/ui/card"
import {
  Shield,
  Wrench,
  CreditCard,
  Award,
} from "lucide-react"

export default function Services() {
  return (
    <section id="servicios" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-gray-600">Todo lo que necesitas en un solo lugar</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <CreditCard className="h-12 w-12 text-[#CE987E]" />,
                title: "Financiamiento",
                description: "Opciones flexibles de financiamiento con las mejores tasas del mercado",
              },
              {
                icon: <Shield className="h-12 w-12 text-[#CE987E]" />,
                title: "Garantía Extendida",
                description: "Protege tu inversión con nuestras garantías extendidas",
              },
              {
                icon: <Wrench className="h-12 w-12 text-[#CE987E]" />,
                title: "Servicio Técnico",
                description: "Mantenimiento y reparaciones con técnicos certificados",
              },
              {
                icon: <Award className="h-12 w-12 text-[#CE987E]" />,
                title: "Certificación",
                description: "Todos nuestros autos pasan por rigurosas inspecciones",
              },
            ].map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="flex justify-center">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
  )
}

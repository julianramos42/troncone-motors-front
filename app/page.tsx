'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Car,
  Phone,
  Mail,
  MapPin,
  Star,
  Shield,
  Wrench,
  CreditCard,
  Facebook,
  Instagram,
  Twitter,
  Search,
  Calendar,
  Award,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CarDealershipPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-[#CE987E]" />
              <span className="text-2xl font-bold text-gray-900">Elite Motors</span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#inicio" className="text-gray-700 hover:text-[#CE987E] font-medium">
                Inicio
              </Link>
              <Link href="#inventario" className="text-gray-700 hover:text-[#CE987E] font-medium">
                Inventario
              </Link>
              <Link href="#servicios" className="text-gray-700 hover:text-[#CE987E] font-medium">
                Servicios
              </Link>
              <Link href="#nosotros" className="text-gray-700 hover:text-[#CE987E] font-medium">
                Nosotros
              </Link>
              <Link href="#contacto" className="text-gray-700 hover:text-[#CE987E] font-medium">
                Contacto
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center space-x-2 text-sm text-gray-600">
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </div>
              <Button className="bg-[#363435] hover:bg-[#2a2829]">Financiamiento</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative bg-gradient-to-r from-[#363435] to-[#2a2829] text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-amber-500 text-white px-4 py-2">Más de 15 años de experiencia</Badge>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Encuentra tu
                <span className="text-amber-400"> Auto Perfecto</span>
              </h1>
              <p className="text-xl text-[#E3E3E3] leading-relaxed">
                La mayor selección de autos usados y nuevos con garantía, financiamiento flexible y el mejor servicio al
                cliente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white px-8">
                  Ver Inventario
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-red-900"
                >
                  Solicitar Financiamiento
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400">500+</div>
                  <div className="text-sm text-[#E3E3E3]/80">Autos Vendidos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400">98%</div>
                  <div className="text-sm text-[#E3E3E3]/80">Clientes Satisfechos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400">15+</div>
                  <div className="text-sm text-[#E3E3E3]/80">Años de Experiencia</div>
                </div>
              </div>
            </div>

            <div className="relative">
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
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-5 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Marca</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#CE987E]">
                    <option>Todas las marcas</option>
                    <option>Toyota</option>
                    <option>Honda</option>
                    <option>Ford</option>
                    <option>Chevrolet</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Modelo</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#CE987E]">
                    <option>Todos los modelos</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Año</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#CE987E]">
                    <option>Cualquier año</option>
                    <option>2024</option>
                    <option>2023</option>
                    <option>2022</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Precio máximo</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#CE987E]">
                    <option>Sin límite</option>
                    <option>$10,000</option>
                    <option>$20,000</option>
                    <option>$30,000</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <Button className="w-full bg-[#363435] hover:bg-[#2a2829] h-12">
                    <Search className="h-4 w-4 mr-2" />
                    Buscar
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Vehicles */}
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

      {/* Services */}
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

      {/* Testimonials */}
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

      {/* About Us */}
      <section id="nosotros" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">¿Por Qué Elegir Premium Motors?</h2>
              <p className="text-lg text-gray-700 mb-6">
                Con más de 15 años en el mercado automotriz, nos hemos consolidado como la concesionaria de confianza
                para miles de familias. Nuestra misión es hacer que la compra de tu próximo vehículo sea una experiencia
                excepcional.
              </p>

              <div className="space-y-4">
                {[
                  "Inspección rigurosa de 150 puntos en cada vehículo",
                  "Garantía en todos nuestros autos usados",
                  "Financiamiento aprobado en 24 horas",
                  "Servicio post-venta de calidad",
                  "Precios justos y transparentes",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#CE987E] rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Button className="mt-8 bg-[#363435] hover:bg-[#2a2829]">Conoce Más Sobre Nosotros</Button>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Nuestro equipo"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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

      {/* Contact */}
      <section id="contacto" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contáctanos</h2>
            <p className="text-xl text-gray-600">Estamos aquí para ayudarte</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="p-6">
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                      <Input placeholder="Tu nombre completo" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                      <Input placeholder="Tu número de teléfono" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <Input type="email" placeholder="tu@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                    <textarea
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#CE987E]"
                      rows={4}
                      placeholder="¿En qué podemos ayudarte?"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-[#363435] hover:bg-[#2a2829]">Enviar Mensaje</Button>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="p-6">
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-[#CE987E]" />
                    <div>
                      <div className="font-semibold">Dirección</div>
                      <div className="text-gray-600">Av. Principal 123, Ciudad</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-[#CE987E]" />
                    <div>
                      <div className="font-semibold">Teléfono</div>
                      <div className="text-gray-600">(555) 123-4567</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-[#CE987E]" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-gray-600">info@elitemotors.com</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent>
                  <h3 className="font-semibold mb-4">Horarios de Atención</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Lunes - Viernes</span>
                      <span>9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sábados</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Domingos</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Car className="h-8 w-8 text-[#CE987E]" />
                <span className="text-2xl font-bold">Elite Motors</span>
              </div>
              <p className="text-gray-400 mb-4">Tu concesionaria de confianza para autos nuevos y usados.</p>
              <div className="flex space-x-4">
                <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Inventario
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
                <div>Av. Principal 123, Ciudad</div>
                <div>(555) 123-4567</div>
                <div>info@elitemotors.com</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Elite Motors. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Car,
  Fuel,
  Calendar,
  Gauge,
  Settings,
  Palette,
  DoorOpen,
  Phone,
  Mail,
  MapPin,
  Heart,
  Share2,
  Calculator,
  Shield,
  Wrench,
  Award,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import axios from "axios";
import Footer from "@/components/Footer";

interface ICar {
  nombre: string;
  marca: string;
  modelo: string;
  anio: number;
  km: number;
  motor: number;
  color: string;
  combustible: string;
  transmision: string;
  puertas: number;
  imagenesURLS: string[];
  slug: string;
  disponible: boolean;
  precio?: number;
  descripcion?: string;
}

// Función para obtener el auto por slug
async function getCarBySlug(slug: string): Promise<ICar | undefined> {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/cars/${slug}`;
    const response = await axios.get(url);
    const carData: ICar = response.data;

    return carData;
  } catch (err) {
    console.log(err);
  }
}

// Generar metadata dinámica
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const car = await getCarBySlug(params.slug);

  if (!car) {
    return {
      title: "Vehículo no encontrado - Troncone Motors",
    };
  }

  return {
    title: `${car.nombre} ${car.anio} - Troncone Motors | ${car.marca} ${car.modelo}`,
    description: `${car.nombre} ${
      car.anio
    } con ${car.km.toLocaleString()} km. ${car.combustible}, ${
      car.transmision
    }. ${car.descripcion?.substring(0, 150)}...`,
    keywords: `${car.marca}, ${car.modelo}, ${car.anio}, auto usado, concesionaria, ${car.combustible}`,
    openGraph: {
      title: `${car.nombre} ${car.anio}`,
      description: car.descripcion,
      images: [car.imagenesURLS[0]],
      type: "website",
    },
  };
}

function formatPrice(price: number): string {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  }).format(price);
}

function formatKilometers(km: number): string {
  if (km === 0) return "0 km (Nuevo)";
  return `${km.toLocaleString()} km`;
}

function getConditionBadge(km: number, year: number) {
  const currentYear = new Date().getFullYear();
  if (km === 0) return { text: "Nuevo", className: "bg-green-500" };
  if (year >= currentYear - 1 && km < 20000)
    return { text: "Seminuevo", className: "bg-[#CE987E]" };
  return { text: "Usado", className: "bg-amber-500" };
}

export default async function CarDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const car = await getCarBySlug(params.slug);

  if (!car) {
    notFound();
  }

  const condition = getConditionBadge(car.km, car.anio);

  return (
    <>
      {/* Header */}
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Breadcrumbs */}
        <nav className="bg-white border-b pt-20 py-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-[#CE987E]">
                Inicio
              </Link>
              <span>/</span>
              <Link href="/autos" className="hover:text-[#CE987E]">
                Autos
              </Link>
              <span>/</span>
              <span className="text-gray-900">{car.nombre}</span>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Columna principal - Imágenes y detalles */}
            <div className="lg:col-span-2 space-y-6">
              {/* Galería de imágenes */}
              <Card className="overflow-hidden">
                <div className="relative">
                  <Image
                    src={car.imagenesURLS[0] || "/placeholder.svg"}
                    alt={car.nombre}
                    width={800}
                    height={500}
                    className="w-full h-[50rem] object-cover object-top"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className={condition.className}>
                      {condition.text}
                    </Badge>
                    {car.combustible === "Híbrido" && (
                      <Badge className="bg-green-600">Eco</Badge>
                    )}
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    {" "}
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white/90"
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Thumbnails */}
                {car.imagenesURLS.length > 1 && (
                  <div className="p-4">
                    <div className="flex gap-2 overflow-x-auto">
                      {car.imagenesURLS.map((image, index) => (
                        <Image
                          key={index}
                          src={image || "/placeholder.svg"}
                          alt={`${car.nombre} - Imagen ${index + 1}`}
                          width={100}
                          height={75}
                          className="w-20 h-16 object-cover rounded cursor-pointer hover:opacity-75 transition-opacity"
                        />
                      ))}
                    </div>
                  </div>
                )}
              </Card>

              {/* Información del vehículo */}
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl text-gray-900">
                        {car.nombre}
                      </CardTitle>
                      <p className="text-lg text-gray-600 mt-1">
                        {car.marca} {car.modelo} {car.anio}
                      </p>
                    </div>
                    {car.precio && (
                      <div className="text-right">
                        <div className="text-3xl font-bold text-[#CE987E]">
                          {formatPrice(car.precio)}
                        </div>
                        <div className="text-sm text-gray-600">
                          Precio de venta
                        </div>
                      </div>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Especificaciones técnicas */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Especificaciones Técnicas
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <Calendar className="h-5 w-5 text-[#CE987E]" />
                        <div>
                          <div className="font-medium">Año</div>
                          <div className="text-gray-600">{car.anio}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <Gauge className="h-5 w-5 text-[#CE987E]" />
                        <div>
                          <div className="font-medium">Kilometraje</div>
                          <div className="text-gray-600">
                            {formatKilometers(car.km)}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <Settings className="h-5 w-5 text-[#CE987E]" />
                        <div>
                          <div className="font-medium">Motor</div>
                          <div className="text-gray-600">{car.motor}L</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <Fuel className="h-5 w-5 text-[#CE987E]" />
                        <div>
                          <div className="font-medium">Combustible</div>
                          <div className="text-gray-600">{car.combustible}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <Car className="h-5 w-5 text-[#CE987E]" />
                        <div>
                          <div className="font-medium">Transmisión</div>
                          <div className="text-gray-600">{car.transmision}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <Palette className="h-5 w-5 text-[#CE987E]" />
                        <div>
                          <div className="font-medium">Color</div>
                          <div className="text-gray-600">{car.color}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <DoorOpen className="h-5 w-5 text-[#CE987E]" />
                        <div>
                          <div className="font-medium">Puertas</div>
                          <div className="text-gray-600">{car.puertas}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Descripción */}
                  {car.descripcion && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        Descripción
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {car.descripcion}
                      </p>
                    </div>
                  )}

                  {/* Características incluidas */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Lo que incluye
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Garantía extendida</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Wrench className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Servicio técnico</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-green-500" />
                        <span className="text-sm">
                          Certificación 150 puntos
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar - Formulario de contacto */}
            <div className="space-y-6">
              {/* Formulario de interés */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">
                    ¿Te interesa este vehículo?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <Input placeholder="Nombre" />
                    <Input placeholder="Apellido" />
                  </div>
                  <Input type="email" placeholder="Email" />
                  <Input type="tel" placeholder="Teléfono" />
                  <Textarea placeholder="Mensaje (opcional)" rows={3} />
                  <Button className="w-full bg-[#363435] hover:bg-[#2a2829]">
                    Solicitar Información
                  </Button>
                  <hr />
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1">
                      <Phone className="h-4 w-4 mr-2" />
                      Llamar
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Mail className="h-4 w-4 mr-2" />
                      Email
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Calculadora de financiamiento */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Calculator className="h-5 w-5 text-[#CE987E]" />
                    Financiamiento
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Enganche
                    </label>
                    <Input type="number" placeholder="$5,000" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Plazo (meses)
                    </label>
                    <select className="w-full p-2 border border-gray-300 rounded-lg">
                      <option>36 meses</option>
                      <option>48 meses</option>
                      <option>60 meses</option>
                      <option>72 meses</option>
                    </select>
                  </div>
                  <Button variant="outline" className="w-full">
                    Calcular Pago Mensual
                  </Button>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-600">Pago estimado</div>
                    <div className="text-2xl font-bold text-[#CE987E]">
                      $450/mes
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Información de contacto */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">
                    Información de Contacto
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-[#CE987E]" />
                    <div>
                      <div className="font-medium">Dirección</div>
                      <div className="text-sm text-gray-600">
                        Av. Hipolito Yrigoyen 14832, Burzaco, Buenos Aires
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-[#CE987E]" />
                    <div>
                      <div className="font-medium">Teléfono</div>
                      <div className="text-sm text-gray-600">
                        +54 9 11 3743-7882
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-[#CE987E]" />
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-sm text-gray-600">---------</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

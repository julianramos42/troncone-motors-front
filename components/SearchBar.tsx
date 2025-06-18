import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search } from "lucide-react"

export default function SearchBar() {
  return (
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
  )
}

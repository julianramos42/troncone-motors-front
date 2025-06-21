export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Skeleton para imagen principal */}
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="w-full h-96 bg-gray-200 animate-pulse"></div>
              <div className="p-4">
                <div className="flex gap-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-20 h-16 bg-gray-200 rounded animate-pulse"></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Skeleton para información */}
            <div className="bg-white rounded-lg p-6">
              <div className="h-8 bg-gray-200 rounded animate-pulse mb-4"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse mb-6"></div>
              <div className="grid md:grid-cols-2 gap-4">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-16 bg-gray-100 rounded-lg animate-pulse"></div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Skeleton para formulario */}
            <div className="bg-white rounded-lg p-6">
              <div className="h-6 bg-gray-200 rounded animate-pulse mb-4"></div>
              <div className="space-y-3">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-10 bg-gray-100 rounded animate-pulse"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

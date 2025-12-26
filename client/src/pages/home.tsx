import { Layout } from "@/components/layout";
import { CategoryRail } from "@/components/category-rail";
import { ProductCard } from "@/components/product-card";
import { PRODUCTS } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Truck, ShieldCheck } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  // Get featured/random products (just taking first 8 for demo)
  const featuredProducts = PRODUCTS.slice(0, 8);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-zinc-900 text-white overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/attached_assets/Fondo_web_Grupo_Carpo_1766787303047.png')"}}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/90 via-zinc-800/80 to-primary/30" />
        
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-2xl animate-in slide-in-from-left duration-700">
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-3 py-1 mb-6 text-primary-foreground/90 text-sm font-medium">
              <Star className="h-3.5 w-3.5 fill-current" />
              <span>Tu aliado #1 en Insumos</span>
            </div>
            <h1 className="font-heading font-extrabold text-4xl md:text-6xl mb-6 leading-tight">
              Calidad que impulsa <br />
              <span className="text-primary">tu negocio</span>
            </h1>
            <p className="text-zinc-300 text-lg mb-8 leading-relaxed max-w-lg">
              Distribuimos los mejores insumos gastronómicos para tu restaurante, panadería o negocio. Salsas, lácteos, carnes y mucho más.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/categoria/todos">
                <Button size="lg" className="rounded-full text-base font-bold h-12 px-8 bg-primary hover:bg-primary/90 w-full sm:w-auto">
                  Ver Catálogo
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="rounded-full text-base font-bold h-12 px-8 border-zinc-700 text-white hover:bg-white hover:text-black w-full sm:w-auto">
                Contactar Asesor
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-white border-b py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Truck className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-sm">Domicilios Rápidos</h3>
              <p className="text-xs text-muted-foreground">Cobertura en Belén y Calasanz</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-sm">Calidad Garantizada</h3>
              <p className="text-xs text-muted-foreground">Productos frescos y certificados</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Star className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-sm">Precios Mayoristas</h3>
              <p className="text-xs text-muted-foreground">Descuentos por volumen</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categorias" className="py-12 bg-zinc-50/50">
        <div className="container mx-auto px-4 mb-8">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-center">Nuestras Categorías</h2>
          <p className="text-center text-muted-foreground mt-2">Todo lo que necesitas en un solo lugar</p>
        </div>
        <div className="container mx-auto">
          <CategoryRail />
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-heading font-bold text-2xl md:text-3xl">Productos Destacados</h2>
          <Link href="/categoria/todos">
            <Button variant="link" className="text-primary font-semibold">
              Ver todos <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">¿Tienes un negocio de comida?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Únete a cientos de emprendedores que confían en Grupo Carpo para abastecer sus cocinas. Atención personalizada y entregas a tiempo.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-zinc-100 font-bold rounded-full h-14 px-8 text-lg shadow-xl">
            Hacer Pedido Ahora
          </Button>
        </div>
      </section>
    </Layout>
  );
}

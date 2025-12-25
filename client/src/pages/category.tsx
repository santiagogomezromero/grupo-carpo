import { Layout } from "@/components/layout";
import { CategoryRail } from "@/components/category-rail";
import { ProductCard } from "@/components/product-card";
import { PRODUCTS, CATEGORIES } from "@/lib/data";
import { useRoute } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function CategoryPage() {
  const [match, params] = useRoute("/categoria/:id");
  const categoryId = match ? params.id : null;
  
  const categoryName = categoryId === "todos" 
    ? "Todos los Productos" 
    : CATEGORIES.find(c => c.id === categoryId)?.name || "Categoría";

  const products = categoryId === "todos" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === categoryId);

  return (
    <Layout>
      <div className="bg-zinc-50 border-b">
        <div className="container mx-auto px-4 py-8">
          <Link href="/">
            <Button variant="ghost" className="pl-0 mb-4 hover:bg-transparent hover:text-primary">
              <ArrowLeft className="mr-2 h-4 w-4" /> Volver al inicio
            </Button>
          </Link>
          <h1 className="font-heading font-bold text-3xl md:text-4xl mb-6">{categoryName}</h1>
          <CategoryRail activeCategory={categoryId || undefined} />
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {products.length === 0 ? (
          <div className="text-center py-20 bg-secondary/30 rounded-2xl border border-dashed">
            <p className="text-xl font-medium text-muted-foreground">No hay productos en esta categoría aún.</p>
            <Link href="/">
              <Button className="mt-4">Explorar otras categorías</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}

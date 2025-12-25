import { Product, useCart } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export function ProductCard({ product }: { product: Product }) {
  const addToCart = useCart((state) => state.addToCart);

  const handleAdd = () => {
    addToCart(product);
    toast({
      title: "Producto agregado",
      description: `${product.name} se agregó al carrito.`,
      duration: 2000,
    });
  };

  return (
    <div className="group bg-card rounded-2xl border hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full">
      <div className="relative aspect-square overflow-hidden bg-secondary">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-zinc-100 text-zinc-300">
            <span className="font-heading font-bold text-2xl opacity-20">CARPO</span>
          </div>
        )}
        <div className="absolute top-2 right-2">
          <Button 
            size="icon" 
            className="rounded-full h-9 w-9 shadow-md bg-white text-foreground hover:bg-primary hover:text-white transition-colors"
            onClick={handleAdd}
          >
            <Plus className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      <div className="p-4 flex flex-col flex-1">
        <div className="flex-1">
          <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">{product.category}</p>
          <h3 className="font-heading font-semibold text-base leading-tight mb-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-muted-foreground text-xs">{product.unit}</p>
        </div>
        
        <div className="mt-4 flex items-end justify-between">
          <span className="font-heading font-bold text-lg">
            {new Intl.NumberFormat("es-CO", {
              style: "currency",
              currency: "COP",
              maximumFractionDigits: 0,
            }).format(product.price)}
          </span>
        </div>
      </div>
    </div>
  );
}

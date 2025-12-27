import { Link, useLocation } from "wouter";
import { Search, ShoppingCart, Menu, X, Facebook, Instagram, Settings } from "lucide-react";
import { useCart } from "@/lib/store";
import { useAuth } from "@/lib/auth";
import { logoUrl } from "@/lib/assets";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CartDrawer } from "./cart-drawer";
import { useState } from "react";

export function Layout({ children }: { children: React.ReactNode }) {
  const cartCount = useCart((state) => state.itemCount());
  const isAuthenticated = useAuth((state) => state.isAuthenticated);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
          {/* Mobile Menu & Logo */}
          <div className="flex items-center gap-2">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-lg font-semibold hover:text-primary transition-colors">
                    Inicio
                  </Link>
                  <Link href="/#categorias" onClick={() => setIsMenuOpen(false)} className="text-lg font-semibold hover:text-primary transition-colors">
                    Categorías
                  </Link>
                  <div className="mt-8 border-t pt-4">
                    <p className="text-sm text-muted-foreground mb-2">Contacto</p>
                    <p className="text-sm font-medium">Sedes: Belén y Calasanz</p>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>

            <Link href="/" className="flex items-center group">
              <img 
                src={logoUrl}
                alt="Grupo Carpo Logo"
                className="h-16 w-auto group-hover:scale-110 transition-transform"
              />
            </Link>
          </div>

          {/* Search Bar - Hidden on small mobile */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar productos..."
                className="w-full bg-secondary pl-9 rounded-full border-transparent focus:bg-background transition-colors"
              />
            </div>
          </div>

          {/* Cart & Actions */}
          <div className="flex items-center gap-2">
            {!isAuthenticated ? (
              <Link href="/login">
                <Button variant="ghost" size="icon" className="relative hover:bg-secondary rounded-full w-10 h-10">
                  <Settings className="h-5 w-5" />
                </Button>
              </Link>
            ) : (
              <Link href="/admin">
                <Button variant="ghost" size="icon" className="relative hover:bg-secondary rounded-full w-10 h-10 bg-primary/10 text-primary">
                  <Settings className="h-5 w-5" />
                </Button>
              </Link>
            )}
            <CartDrawer>
              <Button variant="ghost" size="icon" className="relative hover:bg-secondary rounded-full w-10 h-10">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center animate-in zoom-in">
                    {cartCount}
                  </span>
                )}
              </Button>
            </CartDrawer>
          </div>
        </div>
        
        {/* Mobile Search Bar */}
        <div className="md:hidden px-4 pb-3">
          <div className="relative w-full">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar productos..."
              className="w-full bg-secondary pl-9 rounded-full border-transparent"
            />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-zinc-900 text-zinc-100 py-12 mt-auto">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src={logoUrl}
                alt="Grupo Carpo Logo"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-zinc-400 text-sm max-w-xs">
              Tu aliado #1 de Insumos Gastronómicos. Calidad y servicio para tu negocio.
            </p>
          </div>
          
          <div>
            <h3 className="font-heading font-bold mb-4 text-lg">Sedes</h3>
            <ul className="space-y-2 text-zinc-400 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                Belén
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                Calasanz
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold mb-4 text-lg">Síguenos</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-zinc-800 text-center text-zinc-500 text-sm">
          © {new Date().getFullYear()} Grupo Carpo. Todos los derechos reservados.
        </div>
      </footer>

      {/* Floating Cart Button */}
      {cartCount > 0 && (
        <CartDrawer>
          <Button className="fixed bottom-6 right-6 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 bg-primary hover:bg-primary/90 text-white gap-2 px-6 z-40">
            <ShoppingCart className="h-5 w-5" />
            <span className="font-semibold text-sm">Realizar pedido</span>
            <span className="absolute -top-2 -right-2 h-6 w-6 bg-white text-primary text-xs font-bold rounded-full flex items-center justify-center shadow-md animate-pulse">
              {cartCount}
            </span>
          </Button>
        </CartDrawer>
      )}
    </div>
  );
}

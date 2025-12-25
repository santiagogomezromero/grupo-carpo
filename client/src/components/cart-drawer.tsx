import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetFooter, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useCart } from "@/lib/store";
import { Minus, Plus, Trash2, Send } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function CartDrawer({ children }: { children: React.ReactNode }) {
  const { items, removeFromCart, updateQuantity, totalPrice } = useCart();

  const handleWhatsAppCheckout = () => {
    // Format the message
    const header = "Hola Grupo Carpo, me gustaría realizar el siguiente pedido:\n\n";
    const body = items
      .map(
        (item) =>
          `- ${item.quantity}x ${item.name} (${new Intl.NumberFormat("es-CO", {
            style: "currency",
            currency: "COP",
            maximumFractionDigits: 0,
          }).format(item.price)})`
      )
      .join("\n");
    const footer = `\n\n*Total: ${new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      maximumFractionDigits: 0,
    }).format(totalPrice())}*`;

    const message = encodeURIComponent(header + body + footer);
    // Replace with actual phone number if known, otherwise placeholder
    window.open(`https://wa.me/573001234567?text=${message}`, "_blank");
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-heading text-xl">Tu Carrito</SheetTitle>
        </SheetHeader>
        
        <div className="flex-1 overflow-hidden relative mt-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-4 text-muted-foreground">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4">
                <Send className="h-8 w-8 text-muted-foreground/50" />
              </div>
              <p className="text-lg font-medium mb-1">Tu carrito está vacío</p>
              <p className="text-sm">Agrega productos deliciosos para comenzar tu pedido.</p>
            </div>
          ) : (
            <ScrollArea className="h-full pr-4">
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-20 h-20 rounded-lg bg-secondary overflow-hidden flex-shrink-0">
                      {item.image ? (
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-zinc-100">
                          <span className="text-xs text-zinc-400">Sin img</span>
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm line-clamp-2">{item.name}</h4>
                      <p className="text-muted-foreground text-xs mt-1">{item.unit}</p>
                      <div className="mt-2 flex items-center justify-between">
                        <p className="font-bold text-sm">
                          {new Intl.NumberFormat("es-CO", {
                            style: "currency",
                            currency: "COP",
                            maximumFractionDigits: 0,
                          }).format(item.price)}
                        </p>
                        
                        <div className="flex items-center gap-1 bg-secondary rounded-md p-0.5">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-6 w-6 rounded-sm hover:bg-white shadow-none"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-6 text-center text-xs font-medium">{item.quantity}</span>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-6 w-6 rounded-sm hover:bg-white shadow-none"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          )}
        </div>

        {items.length > 0 && (
          <div className="pt-4 mt-auto">
            <Separator className="mb-4" />
            <div className="flex items-center justify-between mb-4">
              <span className="font-medium">Total Estimado</span>
              <span className="font-heading font-bold text-xl text-primary">
                {new Intl.NumberFormat("es-CO", {
                  style: "currency",
                  currency: "COP",
                  maximumFractionDigits: 0,
                }).format(totalPrice())}
              </span>
            </div>
            <Button className="w-full h-12 text-base font-bold gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white" onClick={handleWhatsAppCheckout}>
              <Send className="h-5 w-5" />
              Enviar pedido por WhatsApp
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}

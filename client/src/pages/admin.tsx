import { useState } from 'react';
import { useLocation } from 'wouter';
import { useAuth } from '@/lib/auth';
import { useCart } from '@/lib/store';
import { CATEGORIES } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { LogOut, Plus, Edit2, Trash2 } from 'lucide-react';
import { Label } from '@/components/ui/label';

export default function AdminPage() {
  const [, setLocation] = useLocation();
  const { isAuthenticated, adminName, logout } = useAuth();
  const { products, updateProduct, addProduct, deleteProduct } = useCart();
  const [filterCategory, setFilterCategory] = useState<string | null>(null);
  const [editingProduct, setEditingProduct] = useState<any>(null);
  const [showForm, setShowForm] = useState(false);

  // Redirect if not authenticated
  if (!isAuthenticated) {
    setLocation('/login');
    return null;
  }

  const handleLogout = () => {
    logout();
    setLocation('/');
  };

  const filteredProducts = filterCategory
    ? products.filter((p) => p.category === filterCategory)
    : products;

  const handleSaveProduct = (formData: any) => {
    if (editingProduct) {
      updateProduct(editingProduct.id, formData);
    } else {
      addProduct({
        ...formData,
        id: Date.now().toString(),
      });
    }
    setEditingProduct(null);
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="font-heading font-bold text-2xl">Panel de Administración</h1>
            <p className="text-sm text-muted-foreground">Bienvenido, {adminName}</p>
          </div>
          <Button variant="outline" size="sm" onClick={handleLogout} className="gap-2">
            <LogOut className="h-4 w-4" />
            Cerrar Sesión
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="productos" className="space-y-6">
          <TabsList className="grid w-full max-w-sm grid-cols-2">
            <TabsTrigger value="productos">Productos</TabsTrigger>
            <TabsTrigger value="estadisticas">Estadísticas</TabsTrigger>
          </TabsList>

          {/* Productos Tab */}
          <TabsContent value="productos" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold font-heading">Gestionar Productos</h2>
              <Dialog open={showForm && !editingProduct} onOpenChange={(open) => {
                if (!open) setShowForm(false);
              }}>
                <DialogTrigger asChild onClick={() => {
                  setEditingProduct(null);
                  setShowForm(true);
                }}>
                  <Button className="gap-2 bg-primary hover:bg-primary/90">
                    <Plus className="h-4 w-4" />
                    Agregar Producto
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <ProductFormDialog 
                    product={null}
                    onSave={handleSaveProduct}
                    onCancel={() => setShowForm(false)}
                  />
                </DialogContent>
              </Dialog>
            </div>

            {/* Filter by Category */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              <Button
                variant={filterCategory === null ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilterCategory(null)}
              >
                Todos ({products.length})
              </Button>
              {CATEGORIES.map((cat) => (
                <Button
                  key={cat.id}
                  variant={filterCategory === cat.id ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilterCategory(cat.id)}
                >
                  {cat.name}
                </Button>
              ))}
            </div>

            {/* Products Grid */}
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <CardTitle className="text-base line-clamp-2">{product.name}</CardTitle>
                        <CardDescription className="text-xs mt-1">
                          {CATEGORIES.find((c) => c.id === product.category)?.name}
                        </CardDescription>
                      </div>
                      <span className="text-xs font-semibold bg-primary/10 text-primary px-2 py-1 rounded">
                        {product.unit}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Precio</p>
                        <p className="font-bold text-sm">
                          {new Intl.NumberFormat('es-CO', {
                            style: 'currency',
                            currency: 'COP',
                            maximumFractionDigits: 0,
                          }).format(product.price)}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Stock</p>
                        <p className="font-bold text-sm">{product.stock || 0}</p>
                      </div>
                    </div>
                    <div className="flex gap-2 pt-2 border-t">
                      <Dialog open={editingProduct?.id === product.id} onOpenChange={(open) => {
                        if (!open) setEditingProduct(null);
                      }}>
                        <DialogTrigger asChild onClick={() => setEditingProduct(product)}>
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex-1 gap-1 h-8"
                          >
                            <Edit2 className="h-3.5 w-3.5" />
                            Editar
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <ProductFormDialog
                            product={editingProduct}
                            onSave={handleSaveProduct}
                            onCancel={() => setEditingProduct(null)}
                          />
                        </DialogContent>
                      </Dialog>
                      <Button
                        size="sm"
                        variant="destructive"
                        className="flex-1 gap-1 h-8"
                        onClick={() => deleteProduct(product.id)}
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                        Eliminar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12 bg-zinc-100 rounded-lg">
                <p className="text-muted-foreground">No hay productos en esta categoría.</p>
              </div>
            )}
          </TabsContent>

          {/* Estadísticas Tab */}
          <TabsContent value="estadisticas" className="space-y-6">
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Total de Productos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold font-heading">{products.length}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Categorías
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold font-heading">
                    {new Set(products.map((p) => p.category)).size}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Stock Total
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold font-heading">
                    {products.reduce((sum, p) => sum + (p.stock || 0), 0)}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Stock Bajo</CardTitle>
                <CardDescription>Productos con stock menor a 10</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {products.filter((p) => (p.stock || 0) < 10).map((p) => (
                    <div key={p.id} className="flex items-center justify-between p-2 bg-yellow-50 rounded border border-yellow-200">
                      <span className="font-medium text-sm">{p.name}</span>
                      <span className="text-sm font-bold text-yellow-700">Stock: {p.stock || 0}</span>
                    </div>
                  ))}
                  {products.filter((p) => (p.stock || 0) < 10).length === 0 && (
                    <p className="text-muted-foreground text-sm">Todos los productos tienen buen stock.</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

function ProductFormDialog({
  product,
  onSave,
  onCancel,
}: {
  product: any | null;
  onSave: (product: any) => void;
  onCancel: () => void;
}) {
  const [formData, setFormData] = useState(
    product || {
      name: '',
      category: 'heladeria',
      price: 0,
      unit: '',
      stock: 0,
      description: '',
      image: '',
    }
  );

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFormData({ ...formData, image: event.target?.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle className="font-heading">
          {product ? 'Editar Producto' : 'Agregar Nuevo Producto'}
        </DialogTitle>
        <DialogDescription>
          {product ? 'Actualiza los detalles del producto' : 'Completa los campos para crear un nuevo producto'}
        </DialogDescription>
      </DialogHeader>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Nombre</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="category">Categoría</Label>
          <select
            id="category"
            className="w-full px-3 py-2 border border-input rounded-md text-sm"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          >
            {CATEGORIES.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="price">Precio</Label>
            <Input
              id="price"
              type="number"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="stock">Stock</Label>
            <Input
              id="stock"
              type="number"
              value={formData.stock || 0}
              onChange={(e) => setFormData({ ...formData, stock: parseInt(e.target.value) })}
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="unit">Unidad (ej: Kg, Litro, Paquete)</Label>
          <Input
            id="unit"
            value={formData.unit}
            onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
            placeholder="Litro"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="description">Descripción</Label>
          <Input
            id="description"
            value={formData.description || ''}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Descripción del producto"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="image">Imagen del Producto</Label>
          {formData.image && (
            <div className="mb-2 w-full h-32 bg-gray-100 rounded-md overflow-hidden">
              <img src={formData.image} alt="preview" className="w-full h-full object-cover" />
            </div>
          )}
          <Input
            id="image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="cursor-pointer"
          />
          <p className="text-xs text-muted-foreground">Carga una imagen para el producto</p>
        </div>
        <div className="flex gap-2 justify-end pt-4 border-t">
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancelar
          </Button>
          <Button type="submit" className="bg-primary hover:bg-primary/90">
            {product ? 'Guardar Cambios' : 'Agregar Producto'}
          </Button>
        </div>
      </form>
    </>
  );
}

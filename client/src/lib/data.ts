import { productImages } from './product-images';

export const CATEGORIES = [
  { id: 'heladeria', name: 'Heladería', icon: 'IceCream' },
  { id: 'confiteria', name: 'Confitería', icon: 'Candy' },
  { id: 'aceites', name: 'Aceites', icon: 'Droplet' },
  { id: 'panes', name: 'Panes', icon: 'Wheat' },
  { id: 'lacteos', name: 'Lácteos', icon: 'Milk' },
  { id: 'pollo', name: 'Pollo', icon: 'Drumstick' },
  { id: 'empaques', name: 'Empaques', icon: 'Package' },
  { id: 'carnicos', name: 'Cárnicos', icon: 'Beef' },
  { id: 'salsas', name: 'Salsas', icon: 'Utensils' },
  { id: 'congelados', name: 'Congelados', icon: 'Snowflake' },
  { id: 'harinas', name: 'Harinas', icon: 'Cookie' },
  { id: 'bebidas', name: 'Bebidas', icon: 'CupSoda' },
];

export const PRODUCTS = [
  // Heladería
  {
    id: '1',
    name: 'Base para Helado Vainilla',
    category: 'heladeria',
    price: 15000,
    unit: 'Litro',
    image: productImages.vanilla_ice_cream,
    description: 'Base cremosa lista para preparar helado soft o artesanal.'
  },
  {
    id: '2',
    name: 'Cono de Galleta Crocante',
    category: 'heladeria',
    price: 12000,
    unit: 'Caja x 12',
    image: productImages.waffle_cone
  },
  // Confitería
  {
    id: '3',
    name: 'Chispas de Chocolate',
    category: 'confiteria',
    price: 8500,
    unit: '500g',
    image: productImages.chocolate_chips
  },
  {
    id: '4',
    name: 'Gomitas Variadas',
    category: 'confiteria',
    price: 6000,
    unit: 'Paquete',
    image: productImages.gummy_bears
  },
  // Aceites
  {
    id: '5',
    name: 'Aceite Vegetal Premium',
    category: 'aceites',
    price: 25000,
    unit: '3 Litros',
    image: productImages.vegetable_oil
  },
  // Panes
  {
    id: '6',
    name: 'Pan Hamburguesa Artesanal',
    category: 'panes',
    price: 9000,
    unit: 'Paquete x 6',
    image: productImages.hamburger_buns
  },
  {
    id: '7',
    name: 'Pan Perro Caliente',
    category: 'panes',
    price: 7500,
    unit: 'Paquete x 8',
    image: productImages.hot_dog_buns
  },
  // Lácteos
  {
    id: '8',
    name: 'Queso Mozzarella Bloque',
    category: 'lacteos',
    price: 32000,
    unit: 'Kg',
    image: productImages.mozzarella_cheese
  },
  // Pollo
  {
    id: '9',
    name: 'Pechuga de Pollo Fresca',
    category: 'pollo',
    price: 18000,
    unit: 'Kg',
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&q=80&w=400'
  },
  // Empaques
  {
    id: '10',
    name: 'Cajas para Hamburguesa',
    category: 'empaques',
    price: 45000,
    unit: 'Paquete x 50',
    image: 'https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&q=80&w=400'
  },
  // Cárnicos
  {
    id: '11',
    name: 'Carne para Hamburguesa',
    category: 'carnicos',
    price: 28000,
    unit: 'Paquete x 10',
    image: 'https://images.unsplash.com/photo-1553555909-6fa796362e36?auto=format&fit=crop&q=80&w=400'
  },
  // Salsas
  {
    id: '12',
    name: 'Salsa de Tomate Industrial',
    category: 'salsas',
    price: 15000,
    unit: 'Galón',
    image: 'https://images.unsplash.com/photo-1620608678580-b21eb23e070d?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '13',
    name: 'Mayonesa',
    category: 'salsas',
    price: 16000,
    unit: 'Galón',
    image: 'https://images.unsplash.com/photo-1585325701165-351af916e581?auto=format&fit=crop&q=80&w=400'
  },
  // Bebidas
  {
    id: '14',
    name: 'Gaseosa 3 Litros',
    category: 'bebidas',
    price: 6500,
    unit: 'Unidad',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=400'
  }
];

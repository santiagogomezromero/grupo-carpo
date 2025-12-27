import { DEFAULT_PLACEHOLDER } from './product-images';

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
  // ACEITES
  { id: '1', name: 'Aceite económico', category: 'aceites', description: 'Aceites en línea económica', unit: 'Varios tamaños', price: 20000, stock: 50, image: DEFAULT_PLACEHOLDER },
  { id: '2', name: 'Aceite Oleo Llano', category: 'aceites', description: '100% oleína de palma', unit: 'Botella plástica', price: 22000, stock: 40, image: DEFAULT_PLACEHOLDER },
  { id: '3', name: 'Aceite de oliva', category: 'aceites', description: 'Aceite de oliva', unit: 'Varios tamaños', price: 35000, stock: 30, image: DEFAULT_PLACEHOLDER },
  
  // POLLO
  { id: '4', name: 'Pollo adobado', category: 'pollo', description: 'Pollo sin marinar - Marinado - Adobado - BBQ - Lomo', unit: 'Paquete', price: 18000, stock: 25, image: DEFAULT_PLACEHOLDER },
  { id: '5', name: 'Chuzos de pollo', category: 'pollo', description: 'Chuzos de pollo', unit: 'Unidad', price: 5000, stock: 100, image: DEFAULT_PLACEHOLDER },
  { id: '6', name: 'Milanesas apanadas', category: 'pollo', description: 'Milanesas apanadas de pollo', unit: 'Paquete', price: 12000, stock: 35, image: DEFAULT_PLACEHOLDER },
  { id: '7', name: 'Alitas de pollo', category: 'pollo', description: 'Alitas de pollo', unit: 'Paquete', price: 14000, stock: 40, image: DEFAULT_PLACEHOLDER },
  { id: '8', name: 'Menudencias de pollo', category: 'pollo', description: 'Menudencias de pollo', unit: 'Paquete', price: 8000, stock: 30, image: DEFAULT_PLACEHOLDER },
  { id: '9', name: 'Moliexpress', category: 'pollo', description: 'Producto procesado de pollo', unit: 'Paquete', price: 10000, stock: 25, image: DEFAULT_PLACEHOLDER },
  { id: '10', name: 'Chorizos de pollo', category: 'pollo', description: 'Chorizos de pollo', unit: 'Paquete', price: 9000, stock: 45, image: DEFAULT_PLACEHOLDER },
  { id: '11', name: 'Muslos y Contramuslos', category: 'pollo', description: 'Muslos y Contramuslos de pollo', unit: 'Paquete', price: 11000, stock: 50, image: DEFAULT_PLACEHOLDER },
  
  // LÁCTEOS
  { id: '12', name: 'Queso mozzarella', category: 'lacteos', description: 'Queso mozzarella', unit: 'Variable', price: 28000, stock: 30, image: DEFAULT_PLACEHOLDER },
  { id: '13', name: 'Queso campesino', category: 'lacteos', description: 'Queso campesino', unit: 'Variable', price: 32000, stock: 25, image: DEFAULT_PLACEHOLDER },
  { id: '14', name: 'Queso costeño y parmesano', category: 'lacteos', description: 'Queso costeño y parmesano', unit: 'Variable', price: 30000, stock: 20, image: DEFAULT_PLACEHOLDER },
  { id: '15', name: 'Queso crema', category: 'lacteos', description: 'Queso crema', unit: 'Variable', price: 15000, stock: 40, image: DEFAULT_PLACEHOLDER },
  { id: '16', name: 'Leche líquida y en polvo', category: 'lacteos', description: 'Leche líquida y en polvo', unit: 'Variable', price: 8000, stock: 60, image: DEFAULT_PLACEHOLDER },
  { id: '17', name: 'Crema de leche', category: 'lacteos', description: 'Crema de leche', unit: 'Variable', price: 12000, stock: 35, image: DEFAULT_PLACEHOLDER },
  { id: '18', name: 'Crema agria', category: 'lacteos', description: 'Crema de leche entera cultivada pasteurizada', unit: 'Caja 4 Kg', price: 18000, stock: 20, image: DEFAULT_PLACEHOLDER },
  { id: '19', name: 'Mantequilla', category: 'lacteos', description: 'Mantequilla', unit: 'Variable', price: 16000, stock: 45, image: DEFAULT_PLACEHOLDER },
  { id: '20', name: 'Suero costeño', category: 'lacteos', description: 'Suero costeño', unit: 'Variable', price: 6000, stock: 50, image: DEFAULT_PLACEHOLDER },
  { id: '21', name: 'Crema Chantilly', category: 'lacteos', description: 'Crema Chantilly', unit: 'Variable', price: 14000, stock: 30, image: DEFAULT_PLACEHOLDER },
  
  // PANES
  { id: '22', name: 'Pan hamburguesa', category: 'panes', description: 'Pan para hamburguesa', unit: 'Paquete 12 unidades', price: 9000, stock: 40, image: DEFAULT_PLACEHOLDER },
  { id: '23', name: 'Pan perro caliente', category: 'panes', description: 'Pan para perro caliente', unit: 'Paquete', price: 7500, stock: 35, image: DEFAULT_PLACEHOLDER },
  { id: '24', name: 'Pan tajado', category: 'panes', description: 'Pan tajado', unit: 'Paquete', price: 8000, stock: 30, image: DEFAULT_PLACEHOLDER },
  { id: '25', name: 'Croissants', category: 'panes', description: 'Croissants', unit: 'Paquete', price: 11000, stock: 25, image: DEFAULT_PLACEHOLDER },
  
  // SALSAS
  { id: '26', name: 'Salsa rosada', category: 'salsas', description: 'Salsa rosada', unit: 'Variable', price: 12000, stock: 35, image: DEFAULT_PLACEHOLDER },
  { id: '27', name: 'Salsa de tomate', category: 'salsas', description: 'Salsa de tomate', unit: 'Variable', price: 10000, stock: 40, image: DEFAULT_PLACEHOLDER },
  { id: '28', name: 'Salsa piña', category: 'salsas', description: 'Salsa con sabor a piña', unit: 'Bolsa 4 Kg', price: 16000, stock: 20, image: DEFAULT_PLACEHOLDER },
  { id: '29', name: 'Salsa BBQ', category: 'salsas', description: 'Salsa BBQ', unit: 'Bolsa 4 Kg', price: 16000, stock: 18, image: DEFAULT_PLACEHOLDER },
  { id: '30', name: 'Salsa mostaza', category: 'salsas', description: 'Salsa mostaza', unit: 'Variable', price: 11000, stock: 30, image: DEFAULT_PLACEHOLDER },
  { id: '31', name: 'Salsas para carne', category: 'salsas', description: 'Salsas especiales para carne', unit: 'Variable', price: 14000, stock: 25, image: DEFAULT_PLACEHOLDER },
  { id: '32', name: 'Aderezos', category: 'salsas', description: 'Aderezos para ensaladas', unit: 'Variable', price: 9000, stock: 35, image: DEFAULT_PLACEHOLDER },
  { id: '33', name: 'Salsas picantes', category: 'salsas', description: 'Salsas picantes y dulces', unit: 'Variable', price: 13000, stock: 28, image: DEFAULT_PLACEHOLDER },
  { id: '34', name: 'Salsas gourmet', category: 'salsas', description: 'Salsas gourmet especiales', unit: 'Variable', price: 18000, stock: 15, image: DEFAULT_PLACEHOLDER },
  
  // CONGELADOS
  { id: '35', name: 'Empanadas y pasteles', category: 'congelados', description: 'Empanadas y pasteles congelados', unit: 'Paquete', price: 15000, stock: 40, image: DEFAULT_PLACEHOLDER },
  { id: '36', name: 'Palitos y pancerotti', category: 'congelados', description: 'Palitos y pancerotti', unit: 'Paquete', price: 12000, stock: 45, image: DEFAULT_PLACEHOLDER },
  { id: '37', name: 'Arepas de queso y patacones', category: 'congelados', description: 'Arepas de queso y patacones', unit: 'Paquete', price: 11000, stock: 35, image: DEFAULT_PLACEHOLDER },
  { id: '38', name: 'Mix de verduras y maicitos', category: 'congelados', description: 'Mix de verduras y maicitos', unit: 'Paquete', price: 8000, stock: 50, image: DEFAULT_PLACEHOLDER },
  { id: '39', name: 'Papas fritas', category: 'congelados', description: 'Papas fritas congeladas', unit: 'Paquete', price: 9000, stock: 48, image: DEFAULT_PLACEHOLDER },
  { id: '40', name: 'Maíz dulce desgranado 500g', category: 'congelados', description: 'Maíz dulce desgranado', unit: '500 g', price: 7000, stock: 55, image: DEFAULT_PLACEHOLDER },
  { id: '41', name: 'Maíz dulce desgranado 1000g', category: 'congelados', description: 'Maíz dulce desgranado', unit: '1000 g', price: 12000, stock: 40, image: DEFAULT_PLACEHOLDER },
  
  // HELADERÍA Y REPOSTERÍA
  { id: '42', name: 'Conos para helado', category: 'heladeria', description: 'Conos para helado', unit: 'Paquete', price: 12000, stock: 50, image: DEFAULT_PLACEHOLDER },
  { id: '43', name: 'Queso industrial', category: 'heladeria', description: 'Queso para repostería', unit: 'Variable', price: 24000, stock: 20, image: DEFAULT_PLACEHOLDER },
  { id: '44', name: 'Arequipe - lecherita y salsas dulces', category: 'heladeria', description: 'Productos para relleno', unit: 'Variable', price: 15000, stock: 30, image: DEFAULT_PLACEHOLDER },
  { id: '45', name: 'Saborizantes y colorantes', category: 'heladeria', description: 'Saborizantes y colorantes para alimentos', unit: 'Variable', price: 18000, stock: 25, image: DEFAULT_PLACEHOLDER },
  { id: '46', name: 'Frutos secos y mixtos', category: 'heladeria', description: 'Frutos secos y mixtos', unit: 'Variable', price: 22000, stock: 20, image: DEFAULT_PLACEHOLDER },
  { id: '47', name: 'Milo', category: 'heladeria', description: 'Milo en polvo', unit: 'Variable', price: 14000, stock: 35, image: DEFAULT_PLACEHOLDER },
  { id: '48', name: 'Bocadillo', category: 'heladeria', description: 'Bocadillo', unit: 'Variable', price: 11000, stock: 40, image: DEFAULT_PLACEHOLDER },
  { id: '49', name: 'Galletería variada', category: 'heladeria', description: 'Galletas variadas', unit: 'Variable', price: 13000, stock: 45, image: DEFAULT_PLACEHOLDER },
  
  // CONFITERÍA
  { id: '50', name: 'Mentas frías', category: 'confiteria', description: 'Mentas frías', unit: 'Paquete', price: 6000, stock: 60, image: DEFAULT_PLACEHOLDER },
  { id: '51', name: 'Mentas masticables', category: 'confiteria', description: 'Mentas masticables', unit: 'Paquete', price: 5500, stock: 55, image: DEFAULT_PLACEHOLDER },
  { id: '52', name: 'Masmelos', category: 'confiteria', description: 'Masmelos', unit: 'Paquete', price: 7000, stock: 40, image: DEFAULT_PLACEHOLDER },
  { id: '53', name: 'Gomitas', category: 'confiteria', description: 'Gomitas de dulce', unit: 'Paquete', price: 6000, stock: 50, image: DEFAULT_PLACEHOLDER },
  { id: '54', name: 'Chupetas', category: 'confiteria', description: 'Chupetas', unit: 'Paquete', price: 5500, stock: 65, image: DEFAULT_PLACEHOLDER },
  { id: '55', name: 'Confites temáticos', category: 'confiteria', description: 'Confites temáticos', unit: 'Bolsa 400g', price: 8000, stock: 35, image: DEFAULT_PLACEHOLDER },
  { id: '56', name: 'Confites económicos', category: 'confiteria', description: 'Confites económicos', unit: 'Variable', price: 4500, stock: 80, image: DEFAULT_PLACEHOLDER },
  
  // BEBIDAS
  { id: '57', name: 'Productos Coca-Cola', category: 'bebidas', description: 'Productos Coca-Cola', unit: 'Variable', price: 6500, stock: 100, image: DEFAULT_PLACEHOLDER },
  { id: '58', name: 'Productos Postobón', category: 'bebidas', description: 'Productos Postobón', unit: '2.5 L', price: 10000, stock: 60, image: DEFAULT_PLACEHOLDER },
  { id: '59', name: 'Jugos Hit - Cifrut y Del Valle', category: 'bebidas', description: 'Jugos Hit - Cifrut y Del Valle', unit: 'Variable', price: 8000, stock: 75, image: DEFAULT_PLACEHOLDER },
  { id: '60', name: 'Pony Malta', category: 'bebidas', description: 'Pony Malta', unit: 'Variable', price: 5500, stock: 90, image: DEFAULT_PLACEHOLDER },
  
  // HARINAS Y VARIOS
  { id: '61', name: 'Café molido y granulado', category: 'harinas', description: 'Café molido y granulado', unit: 'Variable', price: 16000, stock: 40, image: DEFAULT_PLACEHOLDER },
  { id: '62', name: 'Vinagre y Zumo de limón', category: 'harinas', description: 'Vinagre y Zumo de limón', unit: 'Variable', price: 7000, stock: 50, image: DEFAULT_PLACEHOLDER },
  { id: '63', name: 'Pasabocas y chicharrones', category: 'harinas', description: 'Pasabocas y chicharrones', unit: 'Variable', price: 9000, stock: 45, image: DEFAULT_PLACEHOLDER },
  { id: '64', name: 'Colbuñuelo y Empanadalista', category: 'harinas', description: 'Colbuñuelo y Empanadalista', unit: 'Variable', price: 11000, stock: 35, image: DEFAULT_PLACEHOLDER },
  { id: '65', name: 'Aceitunas y Alcaparras', category: 'harinas', description: 'Aceitunas y Alcaparras', unit: 'Variable', price: 12000, stock: 30, image: DEFAULT_PLACEHOLDER },
  { id: '66', name: 'Azúcar pitillo', category: 'harinas', description: 'Azúcar pitillo - Alta Pureza', unit: '1 kg', price: 8000, stock: 100, image: DEFAULT_PLACEHOLDER },
  { id: '67', name: 'Cereales', category: 'harinas', description: 'Cereales', unit: 'Variable', price: 14000, stock: 40, image: DEFAULT_PLACEHOLDER },
  { id: '68', name: 'Bocadillos', category: 'harinas', description: 'Bocadillos', unit: 'Variable', price: 10000, stock: 50, image: DEFAULT_PLACEHOLDER },
  { id: '69', name: 'Té y aromáticas', category: 'harinas', description: 'Té y aromáticas', unit: 'Variable', price: 6500, stock: 60, image: DEFAULT_PLACEHOLDER },
  
  // EMPAQUES DESECHABLES
  { id: '70', name: 'Papel aluminio', category: 'empaques', description: 'Papel aluminio', unit: 'Rollo', price: 15000, stock: 50, image: DEFAULT_PLACEHOLDER },
  { id: '71', name: 'Papel vinipel', category: 'empaques', description: 'Papel vinipel', unit: 'Rollo', price: 12000, stock: 45, image: DEFAULT_PLACEHOLDER },
  { id: '72', name: 'Papel parafinado', category: 'empaques', description: 'Papel parafinado en colores', unit: '15cm x 15cm', price: 8000, stock: 60, image: DEFAULT_PLACEHOLDER },
  { id: '73', name: 'Palos de pincho y chuzo', category: 'empaques', description: 'Palos de pincho - chuzo y palillos', unit: 'Paquete', price: 7000, stock: 80, image: DEFAULT_PLACEHOLDER },
  { id: '74', name: 'Mezcladores plásticos y de madera', category: 'empaques', description: 'Mezcladores plásticos y de madera', unit: 'Paquete', price: 6000, stock: 100, image: DEFAULT_PLACEHOLDER },
  { id: '75', name: 'Sello Plus para postres', category: 'empaques', description: 'Sello Plus para postres', unit: 'Paquete', price: 20000, stock: 30, image: DEFAULT_PLACEHOLDER },
  { id: '76', name: 'Bolsas variadas', category: 'empaques', description: 'Bolsas de papel - plásticas - aluminizadas y herméticas', unit: 'Variable', price: 10000, stock: 70, image: DEFAULT_PLACEHOLDER },
  { id: '77', name: 'Contenedores de icopor', category: 'empaques', description: 'Desechables de icopor', unit: 'Variable', price: 12000, stock: 55, image: DEFAULT_PLACEHOLDER },
  { id: '78', name: 'Porta perros y hamburguesa', category: 'empaques', description: 'Empaques para perros y hamburguesas', unit: 'Paquete', price: 8000, stock: 60, image: DEFAULT_PLACEHOLDER },
];

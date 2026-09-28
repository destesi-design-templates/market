// The sample shop this template shows where no shop is behind the page (its
// live demo, or your project before the workspace sets up a shop). It never
// reaches a live shop: there the page draws the shop's own catalog, banner and
// settings. Replace it with your own sample shop, or leave it: a live shop
// never loads these photos.
import hero from './demo/hero.webp'
import story from './demo/story.webp'
import p1 from './demo/p1.webp'
import p2 from './demo/p2.webp'
import p3 from './demo/p3.webp'
import p4 from './demo/p4.webp'
import p5 from './demo/p5.webp'
import p6 from './demo/p6.webp'
import p7 from './demo/p7.webp'
import p8 from './demo/p8.webp'

export const demo = {
  name: 'MERCADO VERDE',
  tagline: 'Frutas, café y despensa en un solo lugar',
  about: 'Frutas, café y básicos de despensa para el día a día, elegidos con cuidado. Una tienda de demostración de la plantilla Market.',
  announcement: 'Tu mercado de todos los días',
  hero,
  story,
  detail: 'Seleccionado con cuidado y empacado para que llegue fresco a tu cocina. Un básico de todos los días, listo para tu despensa.',
  benefits: ['Productos frescos y seleccionados', 'Paga al recibir', 'Te atendemos por WhatsApp'],
  categories: [
    { id: 'cafe-te', name: 'Café y té' },
    { id: 'despensa', name: 'Despensa' },
    { id: 'frutas', name: 'Frutas' },
  ],
  products: [
    { id: '1', name: 'Café de origen 500 g', price_cents: 4200000, category_id: 'cafe-te', badge: 'Nuevo', image: p1 },
    { id: '2', name: 'Miel pura 500 g', price_cents: 2800000, category_id: 'despensa', image: p2 },
    { id: '3', name: 'Aceite de oliva extra virgen 500 ml', price_cents: 5400000, category_id: 'despensa', image: p3 },
    { id: '4', name: 'Granola artesanal 400 g', price_cents: 2400000, category_id: 'despensa', image: p4 },
    { id: '5', name: 'Canasta de frutas tropicales', price_cents: 6500000, category_id: 'frutas', badge: 'De temporada', image: p5 },
    { id: '6', name: 'Té de hierbas x20', price_cents: 1800000, category_id: 'cafe-te', image: p6 },
    { id: '7', name: 'Pan de masa madre', price_cents: 1600000, category_id: 'despensa', image: p7 },
    { id: '8', name: 'Jugo de naranja natural 1 L', price_cents: 1400000, category_id: 'frutas', image: p8 },
  ],
}

import { Section } from './sections.jsx'

// This template's pages, in code. Each <Section> is an ordinary component
// call: change its props, replace it with your own JSX, add anything you
// like, delete what you do not want. Nothing reads a document to undo you.
// The look — fonts, colours, spacing, the header — is src/theme.css.

// The Google Fonts these pages and theme.css name. Add a key when you use a new one.
export const fonts = ["poppins", "dm-sans"]

export function Home() {
  return <main>
    <Section section={{
        id: "hero",
        type: "hero",
        props: {
          title: "Todo para tu semana",
          subtitle: "Elige lo que necesitas y haz tu pedido desde tu celular, en pocos pasos.",
          button_label: "Empezar a comprar",
          design: {
            variant: "split"
          }
        }
      }} />
    <Section section={{
        id: "benefits",
        type: "benefits",
        props: {}
      }} />
    <Section section={{
        id: "catalog",
        type: "product_grid",
        props: {
          title: "Compra por categoría",
          chips: true,
          limit: 12,
          design: {
            columns: 4
          }
        }
      }} />
    <Section section={{
        id: "story",
        type: "rich_text",
        props: {
          eyebrow: "Así de fácil",
          title: "Lo de todos los días, sin vueltas",
          body: "Encuentra lo que necesitas, agrégalo al carrito y termina tu pedido desde cualquier dispositivo. Hacer el mercado debería ser así de simple.",
          button_label: "Ver productos",
          image_side: "right"
        }
      }} />
    <Section section={{
        id: "more",
        type: "product_carousel",
        props: {
          title: "Más para ti",
          limit: 8,
          design: {
            columns: 4
          }
        }
      }} />
    <Section section={{
        id: "faq",
        type: "faq",
        props: {
          title: "Preguntas frecuentes",
          items: [
            {
              question: "¿Cómo hago mi pedido?",
              answer: "Agrega los productos al carrito, escribe tus datos de entrega y confirma el pedido. Todo desde esta página."
            },
            {
              question: "¿Cómo puedo pagar?",
              answer: "Eliges el medio de pago al finalizar la compra, entre los que la tienda tiene disponibles."
            },
            {
              question: "¿Puedo cambiar las cantidades antes de confirmar?",
              answer: "Sí. En el carrito sumas o quitas unidades de cada producto antes de confirmar tu pedido."
            }
          ]
        }
      }} />
  </main>
}

export function Product() {
  return <main>
    <Section section={{
        id: "detail",
        type: "product_detail",
        props: {
          design: {
            variant: "split"
          }
        }
      }} />
    <Section section={{
        id: "suggested",
        type: "product_suggested",
        props: {
          title: "Completa tu pedido",
          limit: 4,
          design: {
            columns: 4
          }
        }
      }} />
  </main>
}

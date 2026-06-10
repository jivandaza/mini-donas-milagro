import miniDonaDulceLeche from '../assets/products/mini-dona-dulce-leche.webp'
import miniDonaChocolate from '../assets/products/mini-dona-chocolate.webp'
import miniDonaLecherita from '../assets/products/mini-dona-lecherita.webp'
import miniDonaCremaChantilly from '../assets/products/mini-dona-crema-chantilly.webp'
import miniDonaCoberturaChocolate from '../assets/products/mini-dona-cobertura-chocolate.webp'
import miniDonaNutella from '../assets/products/mini-dona-nutella.webp'
import toppingMarshmello from '../assets/products/topping-marshmello.webp'
import toppingOreoCrunch from '../assets/products/topping-oreo-crunch.webp'
import toppingMani from '../assets/products/topping-mani.webp'
import toppingLluviaColores from '../assets/products/topping-lluvia-colores.webp'
import toppingFresas from '../assets/products/topping-fresas.webp'
import toppingMm from '../assets/products/topping-mm.webp'
import toppingPalitosChocolate from '../assets/products/topping-palitos-chocolate.webp'
import toppingLluviaChocolate from '../assets/products/topping-lluvia-chocolate.webp'

export const productCategories = [
  {
    name: 'Mini Donas Clasicas',
    description: 'Sabores tradicionales, suaves y perfectos para cualquier antojo en mini dona.',
    priceLabel: '1 unidad x 2.000 COP | 3 unidades x 5.000 COP',
    orderable: true,
    products: [
      {
        name: 'Mini dona de dulce de leche',
        description: 'Esponjosa, suave y con el toque dulce que nunca falla.',
        price: '1 x 2.000 COP | 3 x 5.000 COP',
        image: miniDonaDulceLeche,
      },
      {
        name: 'Mini dona de chocolate',
        description: 'Cubierta cremosa con sabor intenso a chocolate clasico.',
        price: '1 x 2.000 COP | 3 x 5.000 COP',
        image: miniDonaChocolate,
      },
      {
        name: 'Mini dona de lecherita',
        description: 'Dulce, delicada y con una cobertura que encanta.',
        price: '1 x 2.000 COP | 3 x 5.000 COP',
        image: miniDonaLecherita,
      },
    ],
  },
  {
    name: 'Mini Donas Premium',
    description: 'Opciones especiales de mini donas para pedidos con un toque mas cremoso y cargado.',
    priceLabel: '1 unidad x 2.000 COP | 3 unidades x 5.000 COP',
    orderable: true,
    products: [
      {
        name: 'Mini dona rellena de crema chantilly',
        description: 'Ligera por fuera, cremosa por dentro y muy suave al paladar.',
        price: '1 x 2.000 COP | 3 x 5.000 COP',
        image: miniDonaCremaChantilly,
      },
      {
        name: 'Mini dona con cobertura de chocolate',
        description: 'Una dona generosa con acabado brillante y sabor profundo.',
        price: '1 x 2.000 COP | 3 x 5.000 COP',
        image: miniDonaCoberturaChocolate,
      },
      {
        name: 'Mini dona Nutella',
        description: 'Ideal para amantes del cacao y el relleno cremoso.',
        price: '1 x 2.000 COP | 3 x 5.000 COP',
        image: miniDonaNutella,
      },
    ],
  },
  {
    name: 'Topping',
    description: 'Elige un relleno opcional para cada dona sin cambiar el precio base.',
    priceLabel: '1 topping por dona | Sin costo adicional',
    orderable: false,
    products: [
      {
        name: 'Marshmello',
        description: 'Toque suave y dulce para una cubierta mas divertida.',
        price: 'Relleno opcional sin costo extra',
        image: toppingMarshmello,
      },
      {
        name: 'Oreo crunch',
        description: 'Galleta crocante para dar textura a tu dona.',
        price: 'Relleno opcional sin costo extra',
        image: toppingOreoCrunch,
      },
      {
        name: 'Mani',
        description: 'Crujiente y tostado para contrastar con la cubierta.',
        price: 'Relleno opcional sin costo extra',
        image: toppingMani,
      },
      {
        name: 'Lluvia de colores',
        description: 'Clasica, alegre y perfecta para un acabado colorido.',
        price: 'Relleno opcional sin costo extra',
        image: toppingLluviaColores,
      },
      {
        name: 'Fresas',
        description: 'Una opcion frutal con sabor fresco y dulce.',
        price: 'Relleno opcional sin costo extra',
        image: toppingFresas,
      },
      {
        name: 'M&M',
        description: 'Chocolates de colores para una cubierta mas divertida.',
        price: 'Relleno opcional sin costo extra',
        image: toppingMm,
      },
      {
        name: 'Palitos de chocolate',
        description: 'Decoracion crocante con sabor extra a chocolate.',
        price: 'Relleno opcional sin costo extra',
        image: toppingPalitosChocolate,
      },
      {
        name: 'Lluvia de chocolate',
        description: 'Pequenos toques de chocolate para rematar cada pedido.',
        price: 'Relleno opcional sin costo extra',
        image: toppingLluviaChocolate,
      },
    ],
  },
]

export const products = productCategories
  .filter((category) => category.orderable)
  .flatMap((category) => category.products)

export const toppingOptions = productCategories.find((category) => category.name === 'Topping')?.products ?? []

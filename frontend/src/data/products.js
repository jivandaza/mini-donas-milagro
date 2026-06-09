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
        image:
          'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Mini dona de chocolate',
        description: 'Cubierta cremosa con sabor intenso a chocolate clasico.',
        price: '1 x 2.000 COP | 3 x 5.000 COP',
        image:
          'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Mini dona de lecherita',
        description: 'Dulce, delicada y con una cobertura que encanta.',
        price: '1 x 2.000 COP | 3 x 5.000 COP',
        image:
          'https://images.unsplash.com/photo-1514517220031-89f8a85ed3f6?auto=format&fit=crop&w=900&q=80',
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
        image:
          'https://images.unsplash.com/photo-1527904324834-3bda86da6771?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Mini dona con cobertura de chocolate',
        description: 'Una dona generosa con acabado brillante y sabor profundo.',
        price: '1 x 2.000 COP | 3 x 5.000 COP',
        image:
          'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Mini dona Nutella',
        description: 'Ideal para amantes del cacao y el relleno cremoso.',
        price: '1 x 2.000 COP | 3 x 5.000 COP',
        image:
          'https://images.unsplash.com/photo-1611241893603-3c359704e0ee?auto=format&fit=crop&w=900&q=80',
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
        image:
          'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Oreo crunch',
        description: 'Galleta crocante para dar textura a tu dona.',
        price: 'Relleno opcional sin costo extra',
        image:
          'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Mani',
        description: 'Crujiente y tostado para contrastar con la cubierta.',
        price: 'Relleno opcional sin costo extra',
        image:
          'https://images.unsplash.com/photo-1603048297172-c92544798d5a?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Lluvia de colores',
        description: 'Clasica, alegre y perfecta para un acabado colorido.',
        price: 'Relleno opcional sin costo extra',
        image:
          'https://images.unsplash.com/photo-1464306076886-da185f6a9d05?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Fresas',
        description: 'Una opcion frutal con sabor fresco y dulce.',
        price: 'Relleno opcional sin costo extra',
        image:
          'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'M&M',
        description: 'Chocolates de colores para una cubierta mas divertida.',
        price: 'Relleno opcional sin costo extra',
        image:
          'https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Palitos de chocolate',
        description: 'Decoracion crocante con sabor extra a chocolate.',
        price: 'Relleno opcional sin costo extra',
        image:
          'https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Lluvia de chocolate',
        description: 'Pequenos toques de chocolate para rematar cada pedido.',
        price: 'Relleno opcional sin costo extra',
        image:
          'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=900&q=80',
      },
    ],
  },
]

export const products = productCategories
  .filter((category) => category.orderable)
  .flatMap((category) => category.products)

export const toppingOptions = productCategories.find((category) => category.name === 'Topping')?.products ?? []

import { useState } from 'react'

const paymentOptions = ['Nequi QR', 'Nequi numero', 'Contra entrega']

function Order({ order, setOrder, products, toppings, businessPhone, nequiNumber }) {
  const [selectedProduct, setSelectedProduct] = useState(products[0]?.name ?? '')

  const handleChange = (event) => {
    const { name, value } = event.target

    setOrder((currentOrder) => ({
      ...currentOrder,
      [name]: value,
    }))
  }

  const handleAddItem = () => {
    if (!selectedProduct) {
      return
    }

    setOrder((currentOrder) => ({
      ...currentOrder,
      items: currentOrder.items.some((item) => item.product === selectedProduct)
        ? currentOrder.items.map((item) =>
            item.product === selectedProduct
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          )
        : [...currentOrder.items, { product: selectedProduct, quantity: 1, topping: '' }],
    }))
  }

  const handleItemChange = (productName, field, value) => {
    setOrder((currentOrder) => ({
      ...currentOrder,
      items: currentOrder.items.map((item) =>
        item.product === productName
          ? {
              ...item,
              [field]: field === 'quantity' ? Math.max(1, Number(value) || 1) : value,
            }
          : item,
      ),
    }))
  }

  const handleRemoveItem = (productName) => {
    setOrder((currentOrder) => ({
      ...currentOrder,
      items: currentOrder.items.filter((item) => item.product !== productName),
    }))
  }

  const totalUnits = order.items.reduce((total, item) => total + item.quantity, 0)
  const itemsMessage =
    order.items.length > 0
      ? order.items.map(
          (item) =>
            `- ${item.product} x ${item.quantity} | Topping: ${item.topping || 'Sin topping'}`,
        )
      : ['- Sin productos agregados']

  const paymentMessage =
    order.paymentMethod === 'Nequi QR'
      ? 'Adjunta el comprobante despues de escanear el QR.'
      : order.paymentMethod === 'Nequi numero'
        ? `Haz tu pago al numero ${nequiNumber}.`
        : 'Pagas cuando recibas tu pedido.'

  const whatsappMessage = [
    'Hola, quiero hacer un pedido en Mini Donas Milagro:',
    `Nombre: ${order.customerName || 'No especificado'}`,
    `WhatsApp: ${order.whatsapp || 'No especificado'}`,
    `Direccion: ${order.address || 'No especificada'}`,
    '',
    'Productos:',
    ...itemsMessage,
    `Metodo de pago: ${order.paymentMethod}`,
    `Detalle de pago: ${paymentMessage}`,
  ].join('\n')

  const whatsappUrl = `https://wa.me/57${businessPhone}?text=${encodeURIComponent(whatsappMessage)}`

  const handleSubmit = (event) => {
    event.preventDefault()
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="page-stack container order-layout">
      <section className="section-card order-card">
        <div className="section-heading">
          <span className="eyebrow">Haz tu pedido</span>
          <h1>Completa tus datos</h1>
          <p className="lead-text">
            Te contactamos por WhatsApp para confirmar tu pedido a domicilio y la direccion de entrega.
          </p>
        </div>

        <form className="order-form" onSubmit={handleSubmit}>
          <label>
            Nombre del cliente
            <input
              type="text"
              name="customerName"
              value={order.customerName}
              onChange={handleChange}
              placeholder="Escribe tu nombre"
              required
            />
          </label>

          <label>
            WhatsApp
            <input
              type="tel"
              name="whatsapp"
              value={order.whatsapp}
              onChange={handleChange}
              placeholder="3001234567"
              required
            />
          </label>

          <label className="order-form__full">
            Direccion de entrega
            <input
              type="text"
              name="address"
              value={order.address}
              onChange={handleChange}
              placeholder="Barrio, calle, referencia y detalles del domicilio"
              required
            />
          </label>

          <div className="order-builder order-form__full">
            <div className="order-builder__controls">
              <label className="order-builder__field">
                Agregar dona
                <select
                  value={selectedProduct}
                  onChange={(event) => setSelectedProduct(event.target.value)}
                >
                  {products.map((product) => (
                    <option key={product.name} value={product.name}>
                      {product.name}
                    </option>
                  ))}
                </select>
              </label>

              <button type="button" className="button button--primary" onClick={handleAddItem}>
                Agregar producto
              </button>
            </div>

            <p className="order-builder__hint">
              Puedes agregar varias donas. Cada una puede llevar un topping opcional como
              relleno sin costo adicional para tu pedido a domicilio.
            </p>
          </div>

          <div className="order-items order-form__full">
            {order.items.length > 0 ? (
              order.items.map((item) => (
                <article key={item.product} className="order-item-card">
                  <div className="order-item-card__header">
                    <div>
                      <h3>{item.product}</h3>
                      <p>Personaliza la cantidad y el topping de esta dona.</p>
                    </div>
                    <button
                      type="button"
                      className="button button--ghost"
                      onClick={() => handleRemoveItem(item.product)}
                    >
                      Eliminar
                    </button>
                  </div>

                  <div className="order-item-card__controls">
                    <label>
                      Cantidad
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(event) =>
                          handleItemChange(item.product, 'quantity', event.target.value)
                        }
                        required
                      />
                    </label>

                    <label>
                      Topping de relleno
                      <select
                        value={item.topping}
                        onChange={(event) =>
                          handleItemChange(item.product, 'topping', event.target.value)
                        }
                      >
                        <option value="">Sin topping</option>
                        {toppings.map((topping) => (
                          <option key={topping.name} value={topping.name}>
                            {topping.name}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>
                </article>
              ))
            ) : (
              <div className="order-empty-state">
                <h3>Aun no has agregado donas</h3>
                <p>Agrega productos para definir cantidades y topping por cada dona.</p>
              </div>
            )}
          </div>

          <label className="order-form__full">
            Metodo de pago
            <select name="paymentMethod" value={order.paymentMethod} onChange={handleChange}>
              {paymentOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <div className="payment-panel order-form__full">
            <h3>Informacion de pago</h3>

            {order.paymentMethod === 'Nequi QR' && (
              <div className="qr-placeholder">
                <div className="qr-placeholder__grid"></div>
                <div>
                  <strong>Espacio para imagen QR</strong>
                  <p>Escanea aqui tu codigo de pago Nequi.</p>
                </div>
              </div>
            )}

            {order.paymentMethod === 'Nequi numero' && (
              <p className="payment-note">Numero Nequi: {nequiNumber}</p>
            )}

            {order.paymentMethod === 'Contra entrega' && (
              <p className="payment-note">
                Pagas al recibir tu domicilio en la direccion indicada.
              </p>
            )}
          </div>

          <button
            type="submit"
            className="button button--primary order-form__full"
            disabled={order.items.length === 0}
          >
            Enviar pedido por WhatsApp
          </button>
        </form>
      </section>

      <aside className="section-card section-card--soft summary-card">
        <span className="eyebrow">Resumen rapido</span>
        <h2>Tu pedido actual</h2>
        <ul className="summary-list">
          <li>
            <span>Donas agregadas</span>
            <strong>{order.items.length}</strong>
          </li>
          <li>
            <span>Unidades</span>
            <strong>{totalUnits}</strong>
          </li>
          <li>
            <span>Pago</span>
            <strong>{order.paymentMethod}</strong>
          </li>
          <li>
            <span>Atencion</span>
            <strong>+57 310 430 2978</strong>
          </li>
        </ul>

        <div className="summary-items">
          {order.items.length > 0 ? (
            order.items.map((item) => (
              <article key={item.product} className="summary-item-card">
                <strong>{item.product}</strong>
                <span>Cantidad: {item.quantity}</span>
                <span>Topping: {item.topping || 'Sin topping'}</span>
              </article>
            ))
          ) : (
            <p className="summary-empty">Tu pedido esta vacio por ahora.</p>
          )}
        </div>
      </aside>
    </div>
  )
}

export default Order

import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Order from './pages/Order'
import Location from './pages/Location'
import { productCategories, products, toppingOptions } from './data/products'

const initialOrder = {
  customerName: '',
  whatsapp: '',
  address: '',
  items: [],
  paymentMethod: 'Nequi QR',
}

function App() {
  const [order, setOrder] = useState(initialOrder)

  const handleAddToOrder = (productName) => {
    setOrder((currentOrder) => ({
      ...currentOrder,
      items: currentOrder.items.some((item) => item.product === productName)
        ? currentOrder.items.map((item) =>
            item.product === productName
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          )
        : [...currentOrder.items, { product: productName, quantity: 1, topping: '' }],
    }))
  }

  return (
    <div className="app-shell">
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-mi" element={<About />} />
          <Route
            path="/productos"
            element={
              <Products categories={productCategories} onAddToOrder={handleAddToOrder} />
            }
          />
          <Route
            path="/pedido"
            element={
              <Order
                order={order}
                setOrder={setOrder}
                products={products}
                toppings={toppingOptions}
                businessPhone="3104302978"
                nequiNumber="310 430 2978"
              />
            }
          />
          <Route path="/ubicacion" element={<Location />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App

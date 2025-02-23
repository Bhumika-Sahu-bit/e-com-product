import { useState } from "react"
import { products} from './data/products'
import ProductList from "./components/ProductList"
import ProductModal from "./components/ProductModal"
import Cart from "./components/Cart"

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems , product])
    alert(`${product.name} added to cart`)
  }
  return (
    <div className="min-h-screen bg-gray-50">

      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Our store</h1>

            <button
            onClick={() => setShowCart(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              Cart({cartItems.length})
            </button>
          </div>
        </div>
      </header>

       {/* Main content area - products ki list 📦 */}
       <main className="container mx-auto px-4 py-8">
        <ProductList
        products={products}
        onAddToCart={handleAddToCart}
        onShowDetails={setSelectedProduct} />
       </main>

       {selectedProduct && (
        <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(false)}
        />
       )}

       { showCart && (
        <Cart
        items={cartItems}
        onClose={ () => setShowCart(false)}
        />
       )}

    </div>
  )
}

export default App
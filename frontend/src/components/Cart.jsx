
import PropTypes from 'prop-types';

const Cart = ({ items, onClose }) => {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg max-w-2xl w-full">
        <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
        {items.map(item => (
          <div key={item.id} className="flex items-center gap-4 mb-4 p-2 border-b">
            <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
            <div>
              <h3 className="font-bold">{item.name}</h3>
              <p className="text-gray-600">${item.price}</p>
            </div>
          </div>
        ))}
        <div className="text-xl font-bold mt-4">Total: ${total.toFixed(2)}</div>
        <button 
          onClick={onClose}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

Cart.propTypes = {
  items: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired
};

export default Cart;
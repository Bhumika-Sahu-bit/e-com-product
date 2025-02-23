
import PropTypes from 'prop-types';

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg max-w-2xl">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-64 object-cover mb-4"
        />
        <h2 className="text-2xl font-bold">{product.name}</h2>
        <p className="text-xl text-gray-600 mb-2">${product.price}</p>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <button 
          onClick={onClose}
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

// Add PropTypes validation
ProductModal.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }),  // Note: not marked as required since it can be null
  onClose: PropTypes.func.isRequired
};

// Add default props (optional)
ProductModal.defaultProps = {
  product: null
};

export default ProductModal;
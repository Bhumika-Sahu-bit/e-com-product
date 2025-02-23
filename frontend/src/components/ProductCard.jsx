import PropTypes from 'prop-types';


const ProductCard = ({ product, onAddToCart , onShowDetails }) => {
  console.log(product , onAddToCart , onShowDetails);
  return (
    <div className="border rounded-lg p-4 shadow-md">
        <img src={product.image} alt={product.name}
        className="w-full h-48 object-contain mb-4"
        />
        <h2 className="text-xl font-bold">{product.name}</h2>
        <p className="text-gray-600">${product.price}</p>
        <p className="text-sm text-gray-500 mb-4">{product.description}</p>
        <div className="flex gap-2">
          <button
          onClick={ () => onAddToCart(product)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          > Add to Cart</button>
          <button 
          onClick={ () => onShowDetails(product)}
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
          >View Details</button>
        </div>
    </div>
  );
};

// Add PropTypes validation
ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onShowDetails: PropTypes.func.isRequired
};


export default ProductCard
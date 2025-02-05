const ProductItem = ({ product, onAddToCart }) => {
    return (
      <div className="bg-white border rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all">
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800 truncate">{product.title}</h3>
          <div className="flex justify-between items-center mt-4">
            <p className="text-xl font-bold text-gray-800">${product.price}</p>
            <button
              onClick={() => onAddToCart(product)}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductItem;
  
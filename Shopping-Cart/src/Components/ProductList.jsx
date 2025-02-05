import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, addToCart } from '../redux/cartSlice';
import ProductItem from './ProductItem';

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, status, error } = useSelector((state) => state.cart);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  if (status === 'loading') {
    return <div className="text-center py-12"><p className="text-lg text-gray-600">Loading products...</p></div>;
  }

  if (status === 'failed') {
    return <div className="text-center py-12"><p className="text-lg text-red-600">Error: {error}</p></div>;
  }

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Product List</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
